import React, { useState } from "react";
import { StyleSheet, Button, TextInput, ScrollView, View } from "react-native";
import * as firebase from "firebase";

export default function CreateUserScreen() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChangeText = (email, value) => {
    setState({ ...state, [email]: value });
  };

  const saveNewUser = () => {
    if (state.email === "" || state.password === "") {
      alert("Introduce un valorrr");
    } else {
      console.log(state.email);
      console.log(state.password);
      firebase
        .auth()
        .createUserWithEmailAndPassword(state.email, state.password)
        .then((response) => {
          console.log("añadido correctamente");
        })
        .catch(() => {
          console.log("error");
        });
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="correo"
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="contraseña"
          onChangeText={(value) => handleChangeText("password", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button title="Guardar" onPress={saveNewUser} />
      </View>
      <View style={styles.inputGroup}>
        <Button
          title="Cerrar sesión"
          onPress={() => firebase.auth().singOut()}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
