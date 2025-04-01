import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AgentsScreen from "../screens/AgentsScreen";
import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Agents") {
              iconName = focused ? "people" : "people-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "log-in" : "log-in-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Agents" component={AgentsScreen} />
        <Tab.Screen name="Profile" component={LoginScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
