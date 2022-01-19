import React from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { vw, vh, vmax } from "react-native-expo-viewport-units";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";

function Hero({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/bg2.jpg")}
      style={styles.container}
    >
      <Image source={require("../assets/logo.png")} style={{width: vw(90), height: 100, resizeMode: "contain"}} />
      <Text style={styles.texto}>Find a new device or make yours special!</Text>
      <Text style={styles.parrafo}>
        Thanks to Hexagon, you can find yourself a brand new phone or give to
        your current one new looks and accessories
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Shop", { screen: "Shop" });
        }}
        style={styles.boton}
      >
        <Text style={styles.botonTexto}>Go Shopping!</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps)(Hero);

const styles = StyleSheet.create({
  container: {
    width: vw(100),
    height: vh(90),
    resizeMode: "cover",
    alignItems: "center",
  },
  texto: {
    color: "#ffffff",
    fontSize: 40,
    textAlign: "center",
    marginTop: 30,
    fontFamily: "Poppins_700Bold"
  },
  parrafo: {
    color: "#fb9728",
    fontSize: 20,
    fontFamily: "Mukta_400Regular",
    textAlign: "center",
    paddingHorizontal: 5,
    marginTop: 30,
  },
  boton: {
    borderColor: "#ef2f56",
    borderWidth: 3,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#662a88",
    margin: 30,
  },
  botonTexto: {
    fontSize: 25,
    fontFamily: "Poppins_700Bold",
    color: "#e1b0f9",
  },
});
