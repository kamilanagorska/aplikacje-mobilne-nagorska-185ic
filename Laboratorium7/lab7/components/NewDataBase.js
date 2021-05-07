import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput, ScrollView, Image, Modal, Pressable, Alert} from 'react-native';
import styles from './style'
import * as SQLite from "expo-sqlite";

function openDB() { 
    const db = SQLite.openDatabase("db.db");
    return db;
}

const db = openDB();

function Animals({ seen: seenHeading, onPressAnimal }) {
    const [animals, setAnimals] = React.useState(null);
  
    React.useEffect(() => {
      db.transaction((an) => {
        an.executeSql(
          `select * from animals where seen = ?;`,
          [seenHeading ? 1 : 0],
          (_, { rows: { _array } }) => setAnimals(_array)
        );
      });
    }, []);
  
    const heading = seenHeading ? "Widziane:" : "Chcę zobaczyć:";
  
    if (animals === null || animals.length === 0) {
      return null;
    }
    return(
        <View style={styles.home.example}>
      <Text style={[styles.home.text, {textAlign: 'center', paddingTop: 10, paddingBottom: 10}]}>{heading}</Text>
      <ScrollView>
      {animals.map(({ id, seen, value }) => (
        <TouchableOpacity
          key={id}
          onPress={() => onPressAnimal && onPressAnimal(id)}
          style={{
            backgroundColor: "#bfbab0",
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 16,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            width: 250
          }}
        >
          <Text style={[styles.home.text, {textAlign: 'center', fontSize: 18}]}>{value}</Text>
        </TouchableOpacity>
      ))}
      </ScrollView>    
    </View>
    );
}

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return [() => setValue(value + 1), value];
  }

export default function NewDataBase() {
    const [text, setText] = React.useState(null);
    const [forceUpdate, forceUpdateId] = useForceUpdate();
    const [modalVisible, setModalVisible] = React.useState(false);

    React.useEffect(() => {
        db.transaction((an) => {
          an.executeSql(
            "create table if not exists animals (id integer primary key not null, seen int, value text);"
          );
        });
      }, []);
    
      const add = (text) => {
        if (text === null || text === "") {
          return false;
        }
    
        db.transaction(
          (an) => {
            an.executeSql("insert into animals (seen, value) values (0, ?)", [text]);
            an.executeSql("select * from animals", [], (_, { rows }) =>
              console.log(JSON.stringify(rows))
            );
          },
          null,
          forceUpdate
        );
      };
    return (
      <View style={styles.home.container}>
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{backgroundColor: '#efd9ae'}}>
        <Text style={styles.home.cancel} onPress={() => setModalVisible(!modalVisible)}>Cancel</Text>
        </View>
        <View style={styles.home.modal}>
          <View style={styles.home.bak}>
            <Text style={styles.home.modalText}>What Villager do you want to add?</Text>
            <TextInput
              onChangeText={(text) => setText(text)}
              onSubmitEditing={() => {
                add(text);
                setText(null);
                setModalVisible(!modalVisible);
              }}
              placeholder="Write name here"
              value={text}
              style={styles.home.input}
            />
          </View>
          <Image style={[styles.home.molly, {transform: [{scale: 0.7}], marginTop: 30}]} source={{uri: 'http://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/9/9e/Molly_NewLeaf.png'}}/>
        </View>
      </Modal>

          <View style={styles.home.backLog}>
            <Image style={[styles.home.logo, {transform: [{scale: 0.3}], marginTop: 60}]} source={{uri: 'https://i.pinimg.com/originals/65/42/96/654296f367f672cf92cb7810102e3377.png'}}/>
          </View>
          <View style={styles.home.btn}>
          <TouchableOpacity style={styles.home.button2} onPress={() => setModalVisible(true)}>
              <Text style={styles.home.btntxt}>New Villager</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.home.buttons}>
            <TouchableOpacity style={styles.home.button3}>
              <Text>Show 'owned' Villagers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home.button3}>
              <Text>Show 'wanted' Villagers</Text>
            </TouchableOpacity>
          </View>
            <Animals
              key={`forceupdate-wanttosee-${forceUpdateId}`}
              seen={false}
              onPressAnimal={(id) =>
                db.transaction(
                  (an) => {
                    an.executeSql(`update animals set seen = 1 where id = ?;`, [
                      id,
                    ]);
                  },
                  null,
                  forceUpdate
                )
              }
            />
            <Animals
              seen
              key={`forceupdate-seen-${forceUpdateId}`}
              onPressAnimal={(id) =>
                db.transaction(
                  (an) => {
                    an.executeSql(`delete from animals where id = ?;`, [id]);
                  },
                  null,
                  forceUpdate
                )
              }
            />
      </View>
    );
}

