import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Shoes } from "../../Components/Shoes";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Tênis</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>•</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 15, alignSelf: "center" }}
          >
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
      <ScrollView>
        <Text style={[styles.text, { marginHorizontal: '3.5%', marginBottom: 20 }]}>LANÇAMENTOS</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes img={require('../../assets/1.png')} cost="R$299,90" onClick={() => navigation.navigate('Detail')}>
            Nike Shoes Air
          </Shoes>
          <Shoes img={require('../../assets/2.png')} cost="R$189,90" onClick={() => navigation.navigate('Detail')}>
            Nike Run Flyknit
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes img={require('../../assets/3.png')} cost="R$299,90" onClick={() => navigation.navigate('Detail')}>
            Nike Shoes SK Run 38
          </Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$189,90" onClick={() => navigation.navigate('Detail')}>
            Nike Air Max
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes img={require('../../assets/1.png')} cost="R$299,90" onClick={() => navigation.navigate('Detail')}>
            Nike Shoes Air
          </Shoes>
          <Shoes img={require('../../assets/2.png')} cost="R$189,90" onClick={() => navigation.navigate('Detail')}>
            Nike Shoes VX
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes img={require('../../assets/3.png')} cost="R$299,90" onClick={() => navigation.navigate('Detail')}>
            Nike Shoes SK Run 38
          </Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$189,90" onClick={() => navigation.navigate('Detail')}>
            Nike Air Max
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
  },
  textContainer: {
    marginVertical: "5%",
    marginHorizontal: "5%",
    flexDirection: "row",
  },
  text: {
    fontFamily: "Anton_400Regular",
    marginHorizontal: "1%",
    fontSize: 26,
  },
  line: {
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 2,
  },
});
