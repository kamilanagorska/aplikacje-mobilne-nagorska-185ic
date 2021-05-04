import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput, ScrollView} from 'react-native';
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
          <View style={styles.home.explain}>
              <Text style={[styles.home.text, {textAlign: 'center'}]}>Przykład użycia bazy SQLite, tworzonej w momencie uruchomienia aplikacji</Text>
          </View>
          <View>
            <TextInput
              onChangeText={(text) => setText(text)}
              onSubmitEditing={() => {
                add(text);
                setText(null);
              }}
              placeholder="Jakie zwierzątko chcesz zobaczyć?"
              value={text}
              style={styles.home.input}
            />
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

