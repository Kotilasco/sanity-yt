import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";

const HomePage = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
      }}
    >
      <Drawer.Screen
        options={{
          drawerLabel: "Home",
          title: "Home",
          headerLeft: () => <DrawerToggleButton />,
        }}
        
      />
      <Text
        style={{
          fontSize: 30,
        }}
      >
        HomePage for Drawer
      </Text>
    </View>
  );
};

export default HomePage;
