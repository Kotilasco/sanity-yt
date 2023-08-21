import { Pressable, Image, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import kuda from "../images/kuly.jpeg";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: "#212121",
          padding: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              //backgroundColor: '#cacaca',
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 50 }}
              source={kuda}
            />
          </View>

          <View>
            <Text
              style={{
                color: "white",
                fontSize: 24,
              }}
            >
              Kuda
            </Text>
            <Text
              style={{
                color: "lightgrey",
              }}
            >
              Hello
            </Text>
          </View>
        </View>

        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: "#919191",
            borderTopColor: "#919191",
            paddingVertical: 5,
            marginVertical: 10,
          }}
        >
          <Pressable onPress={() => console.warn("Messages")}>
            <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
              Messages
            </Text>
          </Pressable>
        </View>
        <Pressable onPress={() => console.warn("Do more with your account")}>
          <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
            Do more with your account
          </Text>
        </Pressable>

        <Pressable onPress={() => console.warn("Make money driving")}>
          <Text style={{ color: "white", paddingVertical: 5 }}>
            Hello Admin
          </Text>
        </Pressable>
      </View>

      <DrawerItemList {...props} />
      <Pressable onPress={() => console.log("object")}>
        <Text
          style={{
            color: "black",
            fontSize: 24,
            padding: 5,
          }}
        >
          Logout
        </Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
