import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./Pages/Home"
import { Detail } from "./Pages/Detail"
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";


const Stack = createNativeStackNavigator();

export default function Routes() {
   return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Detail" component={Detail} options={{ headerRight: () => (
        <TouchableOpacity>
          <Feather name="shopping-cart" size={24} color="#000"/>
        </TouchableOpacity>
      )}}/>
    </Stack.Navigator>
  </NavigationContainer>
   )
}
