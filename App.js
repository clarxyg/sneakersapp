import 'react-native-gesture-handler'
import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/router";
import { Anton_400Regular, useFonts } from "@expo-google-fonts/anton"; 
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Anton_400Regular
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true}/>
      <Routes />
    </>
  );
}

