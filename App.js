import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import UserTypeScreen from "./screens/UserTypeScreen";
import StudentLoginScreen from "./screens/StudentLoginScreen";
import TeacherLoginScreen from "./screens/TeacherLoginScreen";
import TeacherPhoneLoginScreen from "./screens/phoneLogin/TeacherPhoneLoginScreen";
import SessionsScreen from "./screens/MySessionsScreen";

import MySessions from "./screens/mySessions/MySessions";
import ProfileScreen from "./screens/ProfileScreen";
const navigator = createStackNavigator(
  {
    Sessions: MySessions,
    Profile: ProfileScreen,
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
