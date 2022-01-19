import React, { useEffect } from "react";
import { StyleSheet, ImageBackground } from "react-native";
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
import productoAction from "../redux/actions/productoAction.jsx";
import { connect } from "react-redux";
import { vw, vh, vmax } from "react-native-expo-viewport-units";

const paginaProducto = (props) => {
  // console.log(props.producto);

  useEffect(() => {
    let myListener = props.navigation.addListener("focus", () => {
      props.fetchUnProducto(props.route.params.id);
    });
    return () => {
      props.navigation.removeListener(myListener);
    };
  }, [props.route.params.id]);

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
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  styles={styles.imagen}
                  source={{ uri: props.producto.imagen }}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="violet.500"
                _dark={{
                  bg: "violet.400",
                }}
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "xs",
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5"
              >
                PHOTOS
              </Center>
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
    producto: state.productoReducer.producto,
  };
};
const mapDispatchToProps = {
  fetchUnProducto: productoAction.fetchUnProducto,
};

export default connect(mapStateToProps, mapDispatchToProps)(paginaProducto);

const styles = StyleSheet.create({
  imagen: {
    width: 50,
    height: 50,
  },
  img: {
    width: vw(100),
    height: vh(90),
    resizeMode: "cover",
    alignItems: "center",
  },
});
