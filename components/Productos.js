import React from "react";
import { StyleSheet } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base";
import { TouchableOpacity, ImageBackground } from "react-native";
import productoAction from "../redux/actions/productoAction";
import { connect } from "react-redux";
import { vw, vh, vmax } from "react-native-expo-viewport-units";

const Productos = (props) => {
  return (
    <ImageBackground source={require("../assets/bg5.jpg")} style={styles.img}>
      <NativeBaseProvider>
        <Center>
          <Box
            maxW="80"
            marginTop="5"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Box>
              <AspectRatio
                w="100%"
                ratio={16 / 9}
                style={{ resizeMode: "contain" }}
              >
                <Image
                  styles={styles.imagen}
                  source={{ uri: `${props.producto.imagen}` }}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {props.producto.nombre}
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: "violet.500",
                  }}
                  _dark={{
                    color: "violet.400",
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  {props.producto.marca}
                </Text>
              </Stack>
              <Text fontWeight="400">{props.producto.descripcion}</Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center" justifyContent="space-between">
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                    fontWeight="400"
                  >
                    {"$ " + props.producto.precio}
                  </Text>
                  <Text>{props.producto.calificacion}</Text>
                  <TouchableOpacity
                    styles={styles.boton}
                    onPress={() =>
                      props.navigate("Selected Product", {
                        id: props.producto._id,
                      })
                    }
                  >
                    <Text style={styles.boton}>See more</Text>
                  </TouchableOpacity>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Center>
      </NativeBaseProvider>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = {
  likeDislike: productoAction.likeDislike,
};
export default connect(mapStateToProps, mapDispatchToProps)(Productos);

const styles = StyleSheet.create({
  imagen: {
    width: 50,
    height: 100,
    resizeMode: "contain",
  },
  boton: {
    marginLeft: 40,
    marginTop: 20,
    fontWeight: "600",
    fontSize: 20,
  },
  img: {
    width: vw(100),
    height: vh(90),
    resizeMode: "cover",
    alignItems: "center",
  },
  boton: {
    borderColor: "#ef2f56",
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#e1c5f3",
    marginTop: 50,
    marginHorizontal: 40,
    fontSize: 15,
    fontWeight: "600",
  },
});
