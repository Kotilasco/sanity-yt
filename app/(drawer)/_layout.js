import { Drawer } from "expo-router/drawer";

import { View,Text } from "react-native";
import CustomDrawer from "../../components/CustomDrawer";

export default function Layout() {
  return (
      <Drawer
        screenOptions={{
          headerShown: false,
          /* swipeEdgeWidth: 0, */ //enable this is you don't want tthe swipe functionality when openng the drawer
        }}
        drawerContent={props => <CustomDrawer {...props}/>}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="details"
          options={{
            drawerLabel: "Details",
            title: "Details",
          }}
        ></Drawer.Screen>
      </Drawer>
  );
}
