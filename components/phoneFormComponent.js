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
const phoneFormComponent = () => {
  
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
          رقم الهاتف
        </Text>
        <TextInput
          placeholder={" رقم الهاتف"}
          placeholderTextColor="#D1D1D1"
          style={styles.textInput}
          keyboardType="numeric"
        />
        <Text style={{ color: "orange", marginVertical: 5, fontSize: 22 }}>
          كلمة المرور{" "}
        </Text>
        <TextInput
          placeholder=" كلمة المرور"
          placeholderTextColor="#D1D1D1"
          style={styles.textInput}
          //   secureTextEntry={true}
        />
      </View>
    </View>
  );
};

export default phoneFormComponent;

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
    borderWidth: 1,
    borderRadius: 50,
    height: 40,
    borderColor: "#A3A3A3",
    color: "#A3A3A3",
    paddingHorizontal: 15,
    width: 250,
    alignItems: "center",
    marginHorizontal: 5,
    fontSize: 18,
  },
});
