import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const emailFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    if (email != "" && password != "") {
      await fetch("https://katateeb-test.roqay.solutions/api/v2/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=UTF-8",
          "Accept-Language": "ar",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData == "ok") {
            alert("successfully login");
            this.props.navigation.navigate("profile");
          } else {
            alert("wrong login");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <View>
      <Text style={{ fontSize: 24 }}>مرحبا بك مجددا !</Text>
      <Text style={{ fontSize: 20 }}>سجل الدخول باستخدام </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TeacherLogin")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>رقم الهاتف</Text>
          <MaterialCommunityIcons
            name="radiobox-marked"
            size={24}
            color="#A3A3A3"
            style={{ marginLeft: 23 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("TeacherLogin")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>البريد الالكتروني</Text>
          <MaterialCommunityIcons
            name="radiobox-marked"
            size={24}
            color="#A3A3A3"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ color: "orange", marginBottom: 5, fontSize: 22 }}>
          البريد الالكتروني
        </Text>
        <TextInput
          placeholder="البريد الاكتروني"
          placeholderTextColor="#D1D1D1"
          style={styles.textInput}
          onChangeText={setEmail}
        />
        <Text style={{ color: "orange", marginVertical: 5, fontSize: 22 }}>
          كلمة المرور
        </Text>
        <TextInput
          placeholder=" كلمة المرور"
          placeholderTextColor="#D1D1D1"
          style={styles.textInput}
          onChange={setPassword}
          //  secureTextEntry={true}
        />
        {/* <View
          style={{
            alignSelf: "stretch",
          }}
        > */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: 5,
            alignSelf: "flex-end",
          }}
        >
          <Text style={{ fontSize: 18, paddingHorizontal: 7, marginBottom: 5 }}>
            نسيت كلمة المرور ؟{" "}
          </Text>
          <AntDesign
            style={{ paddingHorizontal: 5, marginTop: 5 }}
            name="exclamationcircle"
            size={14}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => login({ email, password })}
          style={styles.loginButton}
        >
          <Text style={{ color: "white", fontSize: 18 }}>تسجيل الدخول </Text>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            backgroundColor: "#DADADA",
          }}
        />
        {/* </View> */}
      </View>
    </View>
  );
};

export default emailFormComponent;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    height: 5,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "orange",
    paddingHorizontal: 7,
    paddingVertical: 14,
    marginHorizontal: 5,
    width: 125,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 6,
  },
  buttonText: {
    fontSize: 15,
    color: "#A3A3A3",
    paddingLeft: 5,
    paddingRight: 2,
  },
  textInput: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 50,
    height: 40,
    borderColor: "#A3A3A3",
    color: "#A3A3A3",
    paddingHorizontal: 20,
    width: 250,
    marginHorizontal: 5,
    fontSize: 18,
  },
  loginButton: {
    borderWidth: 1,
    borderRadius: 50,
    height: 40,
    borderColor: "#FFF",
    backgroundColor: "orange",
    paddingHorizontal: 15,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    marginBottom: 7,
  },
});
