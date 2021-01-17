import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// const Separator = () => <View style={styles.separator} />;
const forgetPass = () => {
  return (
    <View
      style={{
        alignSelf: "stretch",
      }}
    >
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
      <TouchableOpacity style={styles.loginButton}>
        <Text style={{ color: "white", fontSize: 18 }}>تسجيل الدخول </Text>
      </TouchableOpacity>
      <View
        style={{
          height: 1,
          backgroundColor: "#DADADA",
        }}
      />
    </View>
  );
};

export default forgetPass;

const styles = StyleSheet.create({
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
