import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import LearningSessions from "./LearningSessions";
import DirectSessions from "./DirectSessions";
import SchedualedSessions from "./SchedualedSessions";

const TabNavigator = createMaterialTopTabNavigator(
  {
    Learn: {
      screen: LearningSessions,
      navigationOptions: {
        tabBarLabel: "جلسات مجدولة",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <AntDesign
              name="calendar"
              size={22}
              style={[{ color: tintColor }]}
            />
          </View>
        ),
        initialRouteName: "Learn",
      },
    },
    Direct: {
      screen: DirectSessions,
      navigationOptions: {
        tabBarLabel: "جلسات مباشرة",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <MaterialIcons
              name="live-tv"
              size={22}
              style={[{ color: tintColor }]}
            />
          </View>
        ),
      },
    },
    Settings: {
      screen: SchedualedSessions,
      navigationOptions: {
        tabBarLabel: "جلسات التعلم",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5
              name="quran"
              size={22}
              v
              style={[{ color: tintColor }]}
            />
          </View>
        ),
      },
    },
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      pressColor: "white",
      style: {
        backgroundColor: "orange",
        height: 100,
        paddingTop: 20,
      },
      indicatorStyle: {
        backgroundColor: "white",
      },
      // activeTintColor: '#FFF',
      inactiveTintColor: "black",
      // showLabel: false,
      showIcon: true,
    },
  }
);

export default createAppContainer(TabNavigator);
