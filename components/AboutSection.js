import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";

const AboutSection = () => {
  return (
    <>
      <View style={styles.colorAmarillo}></View>
      <View style={styles.aboutContainer}>
        <View style={styles.contenedorAbout}>
          <Text style={styles.tituloAbout}>ABOUT US</Text>
          <Text style={styles.parrafoAbout}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            harum, repellendus eos iure illum magnam tempora, tempore dolore
            iusto modi totam sunt maxime ipsum est numquam! Asperiores eveniet
            laboriosam necessitatibus?
          </Text>
        </View>
        <View style={styles.contenedorFeatures}>
          <Text style={styles.tituloAbout}>FEATURES</Text>
          <View style={styles.featuresImgs}>
            <Image
              source={require("../assets/support.png")}
              style={styles.featuresImg}
            />
            <Text style={styles.featuresText}>24/7 Support</Text>
          </View>
          <View style={styles.featuresImgs}>
            <Image
              source={require("../assets/shipping.png")}
              style={styles.featuresImg}
            />
            <Text style={styles.featuresText}>Great Shipping Times</Text>
          </View>
          <View style={styles.featuresImgs}>
            <Image
              source={require("../assets/prices.png")}
              style={styles.featuresImg}
            />
            <Text style={styles.featuresText}>Best Prices</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default AboutSection;

const styles = StyleSheet.create({
  aboutContainer: {
    backgroundColor: "#443494",
    width: vw(100),
    alignItems: "center"
  },
  colorAmarillo: {
    backgroundColor: "#FB9728",
    height: 20,
    width: "100%",
  },
  contenedorAbout: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tituloAbout: {
    color: "#ffffff",
    marginVertical: 15,
    fontFamily: 'Poppins_700Bold',
    fontSize: 25,
    textAlign: "center",
  },
  featuresImg: {
    width: vw(80),
    height: 200,
    resizeMode: "contain"
  },
  parrafoAbout: {
    color: "#fb9728",
    fontFamily: "Mukta_400Regular",
    textAlign: "center",
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 15,
  },
  contenedorFeatures: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  featuresImgs: {
    paddingVertical: 20
  },
  featuresText: {
    textAlign: "center",
    fontFamily: "Mukta_400Regular",
    color: '#fb9728',
    paddingVertical: 10,
    fontSize: 20
  }
});
