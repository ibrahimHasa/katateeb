import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StudentLoginScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/bglogin.png")}
        style={styles.bgImage}
      >
        <View style={styles.logo}>
          <View style={styles.logoTextContainer}>
            <Text style={styles.logoText}>تسجيل الدخول</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={33}
              color="white"
              style={{ marginLeft: 50 }}
            />
          </View>
        </View>

        <Image source={require("../assets/images/logologinuser.png")} />
        <View style={styles.formView}>
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
            <TextInput placeholder=""  style={styles.textInput} />
            <Text style={{ color: "orange", marginVertical: 5, fontSize: 22 }}>
              كلمة المرور{" "}
            </Text>
            <TextInput style={styles.textInput} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StudentLoginScreen;

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  logo: {
    marginTop: 45,
  },
  logoTextContainer: {
    flexDirection: "row",
  },
  logoText: {
    color: "white",
    fontSize: 30,
    marginBottom: 15,
    marginLeft: 50,
  },
  loginForm: {
    backgroundColor: "white",
    height: "300",
    width: "150",
  },
  formView: {
    alignItems: "flex-end",
    backgroundColor: "white",
    marginTop: 20,
    padding: 15,
    borderRadius: 20,
    height: "68%",
    width: 300,
  },
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
    height: 10,
    borderColor: "#A3A3A3",
    color: "#A3A3A3",
    paddingVertical: 15,
    width: 250,
    alignItems: "center",
    marginHorizontal: 5,
  },
});
