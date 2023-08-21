import { View, Text, Button } from "react-native";
import { Link, Redirect } from "expo-router";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import app from "../firebase";
export default function Home() {
  const provider = new GoogleAuthProvider(app);

  const [userIn, setUser] = useState(null);
  const [loading, setLoading] = useState("");

  console.log("object");
  console.log(provider);
  const signIn = async () => {
    setLoading(true);
    console.log("hello");

    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  if (!userIn) {
    return <Redirect href={"/(drawer)/home"} />;
  }
  return (
    <View>
      <Button
        title="Google Sign-In"
        onPress={() =>
          signIn().then(() => console.log("Signed in with Google!"))
        }
      />
    </View>
  );
}
