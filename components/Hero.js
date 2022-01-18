import React from "react"
import {
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from "react-native"
import {ScrollView} from "react-native-gesture-handler"

export default function Hero(props) {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/bg2.jpg")}
        style={styles.container}
      >
        <Text style={styles.texto}>React Ecosystem</Text>
        <Text style={styles.texto}>
          Find a new device or make yours special!
        </Text>
        <Text style={styles.parrafo}>
          Thanks to Hexagon, you can find yourself a brand new phone or give to
          your current one new looks and accessories
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.boton}>Go Shopping!</Text>
        </TouchableOpacity>
        <View style={styles.rosa}></View>
        <View style={styles.tituloProductos}>
          <Text style={styles.tituloTexto}>OUR PRODUCTS</Text>
        </View>
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
        <View style={styles.Headphones}>
          <Text style={styles.textPhone}>02: Headphones</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wireless-headphones-1628004597.jpg?crop=1.00xw:0.849xh;0,0&resize=2048:*",
            }}
          />
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
        <View style={styles.Cases}>
          <Text style={styles.textPhone}>04: Cases</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2020%2F11%2Fpokemon-casetify-phone-case-collaboration-collection-11.jpg?q=90&w=1400&cbr=1&fit=max",
            }}
          />
        </View>
        <View style={styles.colorAmarillo}></View>
        <View style={styles.contenedorAbout}>
          <Text style={styles.tituloAbout}>ABOUT US</Text>
          <Text style={styles.parrafoAbout}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            harum, repellendus eos iure illum magnam tempora, tempore dolore
            iusto modi totam sunt maxime ipsum est numquam! Asperiores eveniet
            laboriosam necessitatibus?
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 1650,
    resizeMode: "cover",
    alignItems: "center",
  },
  texto: {
    color: "#ffffff",
    fontSize: 20,
    marginTop: 30,
    fontWeight: "700",
  },
  parrafo: {
    color: "#e6bd36",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 30,
  },
  boton: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff",
    borderColor: "#C94570",
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#472B63",
    margin: 30,
  },
  rosa: {
    backgroundColor: "#e7157e",
    height: 20,
    width: "100%",
  },
  tituloProductos: {
    backgroundColor: "#5C3094",
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tituloTexto: {
    color: "#ffffff",
    fontWeight: "700",
  },
  phone: {
    backgroundColor: "#FB9728",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textPhone: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 16,
  },
  image: {
    height: 200,
    width: 500,
  },
  Headphones: {
    backgroundColor: "#8D237E",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  Accesories: {
    backgroundColor: "#EF2F56",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  Cases: {
    backgroundColor: "#443494",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  colorAmarillo: {
    backgroundColor: "#FB9728",
    height: 20,
    width: "100%",
  },
  contenedorAbout: {
    backgroundColor: "#413389",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tituloAbout: {
    color: "#ffffff",
    marginVertical: 15,
    fontWeight: "700",
  },
  parrafoAbout: {
    color: "#ffffff",
    marginBottom: 15,
  },
})
