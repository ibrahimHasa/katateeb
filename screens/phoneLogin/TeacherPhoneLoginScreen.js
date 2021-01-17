import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const TeacherPhoneLoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/bglogin.png")}
        style={styles.backgroundImage}
      />
      
    </View>
  );
};

export default TeacherPhoneLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
  },
});
