import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";

const DetailsPage = () => {
  return (
    <View>
      <Drawer.Screen
        options={{
          drawerLabel: "Details",
          title: "Details",
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <Text>DetailsPage for Drawer</Text>
    </View>
  );
};

export default DetailsPage;
