import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { connect } from "react-redux";

function Perfil(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={require("../assets/bg3.jpg")}
        style={{
          height: 150,
          justifyContent: "center",
        }}
      >
        <View style={styles.containerFoto}>
          <Text style={styles.containerNombre}>{props.user.firstName}</Text>
          <Image
            source={{ uri: `${props.user.photo}` }}
            style={{ width: 60, height: 60, borderRadius: 30, marginLeft: 10 }}
          />
        </View>
        <View style={styles.containerMail}>
          <Text style={styles.Mail}>{props.user.email}</Text>
        </View>
      </ImageBackground>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps)(Perfil);

const styles = StyleSheet.create({
  containerFoto: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerNombre: {
    fontSize: 17,
    fontWeight: "700",
    color: "#ffffff",
  },
  Mail: {
    fontSize: 17,
    fontWeight: "700",
    color: "#ffffff",
  },
  containerMail: {
    alignItems: "center",
    marginTop: 10,
  },
});
