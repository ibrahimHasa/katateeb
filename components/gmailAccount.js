import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import MySessions from "../screens/MySessionsScreen";

const gmailAccount = (props) => {
  return (
    <View>
      <Text style={{ color: "black", fontSize: 15, marginVertical: 5 }}>
        {" "}
        او سجل باستخدام
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Sessions")}
        style={styles.registerBottom}
      >
        <Text style={{ color: "red", fontSize: 18, marginHorizontal: 5 }}>
          Google
        </Text>
        <Image
          style={styles.googleImage}
          source={require("../assets/images/google.png")}
        />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", marginTop: 7 }}>
        <TouchableOpacity>
          <Text style={{ color: "orange", fontSize: 19, marginHorizontal: 10 }}>
            انشئ حساب جديد
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "black", fontSize: 16 }}>ليس لديك حساب ؟</Text>
      </View>
    </View>
  );
};

export default gmailAccount;

const styles = StyleSheet.create({
  registerBottom: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 50,
    height: 40,
    borderColor: "red",
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    width: 125,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    marginVertical: 7,
    alignSelf: "flex-end",
  },
  googleImage: {
    width: 30,
    height: 30,
  },
});
