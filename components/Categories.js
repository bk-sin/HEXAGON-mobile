import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

const Categories = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/bg5.jpg")}
    >
      <View style={styles.rosa}></View>
      <Text style={styles.tituloTexto}>OUR PRODUCTS</Text>
      <View style={styles.categoriesGrid}>
        <View style={styles.phone}>
          <Text style={styles.textPhone}>01: Phones</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.infotechnology.com/files/image/101/101511/618e8c83532b6.jpg",
            }}
          />
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wireless-headphones-1628004597.jpg?crop=1.00xw:0.849xh;0,0&resize=2048:*",
            }}
          />
        </View>
        <View style={styles.Headphones}>
          <Text style={styles.textPhone}>02: Headphones</Text>
        </View>
        <View style={styles.Accesories}>
          <Text style={styles.textPhone}>03: Accesories</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://moneymint.com/wp-content/uploads/2021/02/Types-of-Mobile-Accessories-1.jpg",
            }}
          />
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2020%2F11%2Fpokemon-casetify-phone-case-collaboration-collection-11.jpg?q=90&w=1400&cbr=1&fit=max",
            }}
          />
        </View>
        <View style={styles.Cases}>
          <Text style={styles.textPhone}>04: Cases</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: vw(100),
    height: vh(100),
  },
  categoriesGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  rosa: {
    backgroundColor: "#e7157e",
    height: 20,
    width: "100%",
  },
  tituloTexto: {
    color: "#ffffff",
    fontFamily: 'Poppins_700Bold',
    fontSize: 25,
    textAlign: "center",
    paddingVertical: 10
  },
  phone: {
    backgroundColor: "#FB9728",
    width: vw(50),
    height: vh(22),
    justifyContent: "center",
    alignItems: "center",
  },
  textPhone: {
    color: "#ffffff",
    fontFamily: 'Mukta_400Regular',
    fontSize: 16,
  },
  image: {
    height: vh(22),
    width: vw(50),
  },
  Headphones: {
    backgroundColor: "#8D237E",
    width: vw(50),
    height: vh(22),
    justifyContent: "center",
    alignItems: "center",
  },
  Accesories: {
    backgroundColor: "#EF2F56",
    width: vw(50),
    height: vh(22),
    justifyContent: "center",
    alignItems: "center",
  },
  Cases: {
    backgroundColor: "#443494",
    width: vw(50),
    height: vh(22),
    justifyContent: "center",
    alignItems: "center",
  },
});
