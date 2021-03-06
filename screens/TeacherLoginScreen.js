import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ForgetPass from "../components/forgetPass";
import GmailBottom from "../components/gmailAccount";
import EmailForm from "../components/emailFormComponent";
const TeacherLoginScreen = () => {
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
          <EmailForm />
          {/* <ForgetPass /> */}
          {/* <GmailBottom /> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default TeacherLoginScreen;

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
    height: "250",
    width: "150",
  },
  formView: {
    alignItems: "flex-end",
    backgroundColor: "white",
    marginTop: 20,
    padding: 15,
    borderRadius: 20,
    height: "52%",
    width: 300,
  },
});
