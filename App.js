import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import UserTypeScreen from "./screens/UserTypeScreen";
import StudentLoginScreen from "./screens/StudentLoginScreen";
import TeacherLoginScreen from "./screens/TeacherLoginScreen";

const navigator = createStackNavigator(
  {
    UserType: UserTypeScreen,
    StudentLogin: StudentLoginScreen,
    TeacherLogin: TeacherLoginScreen,
  },
  {
    initialRouteName: "UserType",
    defaultNavigationOptions: {
      title: "KATATEEB",
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
