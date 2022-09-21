import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Dot } from "../../Components/Dot";
import { SizeButton } from "../../Components/SizeButton";
import { Button } from "../../Components/Button";
import { Footer } from "../../Components/Footer";

export function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Nike Air",
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/detail.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$299,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>Nike Air</Text>
        </View>
        <View style={styles.dotContainer}>
          <Dot color="#2479f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#fff">
              39
            </SizeButton>
            <SizeButton>38</SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>36</SizeButton>
          </ScrollView>
        </View>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.textTitle}>Nike Air</Text>
        <Text style={styles.textContent}>
          Estilo esportivo renovado com o Tenis Nike Air Max Masculino! O
          cabedal em sintético fornece resistência e durabilidade, enquanto a
          entressola com a tecnologia Air Max apresenta amortecimento suave
          durante o dia a dia. O design esportivo dá o diferencial da peça.
          Adquira já esse tênis Nike masculino!
        </Text>
        <Text style={styles.textList}>- Categoria - Amortecimento</Text>
        <Text style={styles.textList}>- Material - Mesh</Text>
      </View>
      <Button />
      <View style={styles.line}/>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffff",
  },
  image: {
    width: "100%",
  },
  title: {
    fontFamily: "Anton_400Regular",
    paddingHorizontal: "2%",
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "2%",
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    lineHeight: 25,
    paddingHorizontal: '2%'
  },
  textList: {
    fontSize: 16,
    lineHeight: 25
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: '2%'
  }
});
