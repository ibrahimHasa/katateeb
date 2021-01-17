import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";

import LearningSessions from "../screens/mySessions/LearningSessions";
import DirectSessions from "../screens/mySessions/DirectSessions";
import SchedualedSessions from "../screens/mySessions/SchedualedSessions";
import MySessions from "../screens/mySessions/MySessions";
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: LearningSessions,
    },
    MyReadings: {
      screen: DirectSessions,
      navigationOptions: {
        tabBarLabel: "My Readings",
        // activeColor: "black",
        // inactiveColor: "#B0C4DE",
      },
    },
    MySessions: {
      screen: MySessions,
      navigationOptions: {
        tabBarLabel: "My Sessions",
      },
    },
    Settings: {
      screen: SchedualedSessions,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "ios-home";
        } else if (routeName === "MyReadings") {
          iconName = "book-outline";
        } else if (routeName === "MySessions") {
          iconName = "chatbox-ellipses-outline";
        } else if (routeName === "Settings") {
          iconName = "ios-settings";
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color="#B0C4DE"
          />
        );
      },
       tabBarOptions: {
           pressColor: "white",
    //   pressColor: "red",
      style: {
        // backgroundColor: "orange",
        // height: 100,
        // paddingTop: 20,
      },
      indicatorStyle: {
        backgroundColor: "orange",
      },
      activeTintColor: 'orange',
      inactiveTintColor: "#B0C4DE",
    //   showLabel: false,
      showIcon: true,
    },
    }),
  }
);
export default createAppContainer(TabNavigator);
