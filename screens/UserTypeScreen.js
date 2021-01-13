import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const UserTypeScreen = ({ navigation }) => {
  // console.log(navigation);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logolanguage.png")}
        style={styles.image}
      />
      <View>
        <Text style={styles.text}>
          مرحبا بك في برنامج كتاتيب بوابة التواصل بين المحفظين و المتعلميين
          للقرأن الكريم{" "}
        </Text>
        <Text style={styles.text}>اختر نوع الحساب</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("StudentLogin")}
        style={styles.button}
      >
        <Image
          source={require("../assets/images/student.png")}
          style={styles.studentImage}
        />
        <Text style={styles.buttonText}>طالب</Text>
        <MaterialCommunityIcons
          name="radiobox-marked"
          size={24}
          color="black"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TeacherLogin")}
        style={styles.button}
      >
        <Image
          source={require("../assets/images/techer.png")}
          style={styles.studentImage}
        />
        <Text style={styles.buttonText}>معلم</Text>
        <MaterialCommunityIcons
          name="radiobox-marked"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <Image source={require("../assets/images/shape.png")} />
    </View>
  );
};

export default withNavigation(UserTypeScreen);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    alignItems: "center",
    marginTop: 40,
  },
  text: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    fontSize: 23,
    fontWeight: "bold",
    alignItems: "flex-end",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    height: 20,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "orange",
    padding: 30,
    paddingVertical: 30,
    marginBottom: 15,
    width: 270,
  },
  studentImage: {
    width: 50,
    height: 50,
  },
  buttonText: {
    fontSize: 27,
    color: "#A3A3A3",
    paddingLeft: 75,
    paddingRight: 10,
  },
});
