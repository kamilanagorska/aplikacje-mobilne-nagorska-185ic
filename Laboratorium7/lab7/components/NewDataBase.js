import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput, ScrollView, Image, Modal, Alert} from 'react-native';
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
  
    const heading = seenHeading ? "'Owned' Villagers:" : "'Wanted' Villagers:";
  
    if (animals === null || animals.length === 0) {
      return (
        <View style={styles.home.example}>
        <Text style={[styles.home.text, {textAlign: 'center', paddingTop: 15, fontSize: 25, paddingBottom: 20}]}>{heading}</Text>
        <ScrollView>
        </ScrollView>    
      </View>
      )
    }
    return(
        <View style={styles.home.example}>
      <Text style={[styles.home.text, {textAlign: 'center', paddingTop: 15, fontSize: 25, paddingBottom: 20}]}>{heading}</Text>
      <ScrollView>
      {animals.map(({ id, seen, value }) => (
        <TouchableOpacity
          key={id}
          //onPress={() => 
         onPress={() => onPressAnimal && onPressAnimal(id)}
          style={{
            backgroundColor: '#c68f4c',
            borderColor: '#a06b3b',
            borderWidth: 2,
            borderRadius: 10,
            marginBottom: 16,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            width: 280
          }}
        >
          <Text style={[styles.home.text, {textAlign: 'center', fontSize: 18, color: '#ffd050'}]}>{value}</Text>
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
    const [modalVisible2, setModalVisible2] = React.useState(false);
    const [modalVisible3, setModalVisible3] = React.useState(false);

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
          },
          null,
          forceUpdate
        );
      };
    return (
      <View style={styles.home.container}>
        {/* DODAWANIE */}
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
            <Image style={styles.home.logo} source={{uri: 'https://i.pinimg.com/originals/65/42/96/654296f367f672cf92cb7810102e3377.png'}}/>
          </View>
          <View style ={styles.home.backApp}>
          <View style={styles.home.btn}>
          <TouchableOpacity style={styles.home.button2} onPress={() => setModalVisible(true)}>
              <Text style={styles.home.btntxt}>New Villager</Text>
            </TouchableOpacity>
          </View>

          {/* POSIADANE*/}
          <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(!modalVisible);
        }}
      >
        <View style={{backgroundColor: '#efd9ae'}}>
        <Text style={styles.home.cancel} onPress={() => setModalVisible2(!modalVisible2)}>Close</Text>
        </View>
        <View style={styles.home.modal}>
        <Animals
              seen
              key={`forceupdate-seen-${forceUpdateId}`}
              onPressAnimal={(id) => {
                Alert.alert("Edit Villager",
                "What do you want to do?",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "Delete", onPress: () => db.transaction(
                       (an) => {
                         an.executeSql(`delete from animals where id = ?;`, [id]);
                      },
                     null,
                       forceUpdate
                     )  },
                     {
                      text: "Change to 'wanted'",
                      onPress: () => db.transaction(
                        (an) => {
                          an.executeSql(`update animals set seen = 0 where id = ?;`, [
                            id,
                          ]);
                        },
                        null,
                        forceUpdate
                      )
                    }
                ])
              }
              }
            />
        </View>
      </Modal>
      
          <View style={styles.home.buttons}>
            <TouchableOpacity style={styles.home.button3} onPress={() => setModalVisible2(true)}>
              <Text style={styles.home.txt3}>Show 'owned' Villagers</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.home.button3} onPress={() => setModalVisible3(true)}>
              <Text style={styles.home.txt3}>Show 'wanted' Villagers</Text>
            </TouchableOpacity>
          </View>

          {/*CHCIANE */}
          <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible3}
        onRequestClose={() => {
          setModalVisible3(!modalVisible3);
        }}
      >
        <View style={{backgroundColor: '#efd9ae'}}>
        <Text style={styles.home.cancel} onPress={() => setModalVisible3(!modalVisible3)}>Close</Text>
        </View>
        <View style={styles.home.modal}>
        <Animals
              key={`forceupdate-wanttosee-${forceUpdateId}`}
              seen={false}
              onPressAnimal={(id) =>
                {
                  Alert.alert("Edit Villager",
                  "What do you want to do?",
                  [
                    {
                      text: "Cancel",
                      style: "cancel"
                    },
                    { text: "Delete", onPress: () => db.transaction(
                         (an) => {
                           an.executeSql(`delete from animals where id = ?;`, [id]);
                        },
                       null,
                         forceUpdate
                       )  },
                       {
                        text: "Change to 'owned'",
                        onPress: () => db.transaction(
                          (an) => {
                            an.executeSql(`update animals set seen = 1 where id = ?;`, [
                              id,
                            ]);
                          },
                          null,
                          forceUpdate
                        )
                      }
                  ])
                }
              }   
            />
        </View>
      </Modal>     
          </View>     
      </View>
    );
}

