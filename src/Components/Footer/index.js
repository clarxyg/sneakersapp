import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Shoes } from "../Shoes";

export function Footer() {
  return (
    <View>
      <Text style={styles.title}>Você também pode gostar</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../assets/1.png")} cost="R$199">
              Nike Air Max
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../assets/3.png")} cost="R$199">
              Nike Air Max
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../assets/4.png")} cost="R$199">
              Nike Air Max
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../assets/2.png")} cost="R$199">
              Nike Air Max
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Anton_400Regular",
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
});
