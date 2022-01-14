import { VStack, Box, Divider, NativeBaseProvider } from 'native-base';
import { StyleSheet } from 'react-native';


const  Cards = (props) => {

  console.log(props)

  return (
    <NativeBaseProvider style={styles.cardContainer}>
        <Box style={styles.card}>
          <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
        </Box>
        <Box px="4">
          NativeBase is a free and open source framework that enable developers
          to build high-quality mobile apps using React Native iOS and Android
          apps with a fusion of ES6.
        </Box>
        <Box px="4" pb="4">
          GeekyAnts
        </Box>
        <Box px="4" pb="4">
          GeekyAnts
        </Box>
      </VStack>
    </Box>
    </NativeBaseProvider>
  );
}


export default Cards


const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ddd9ff",
        width: "60%",
        borderRadius: 10
    },
    cardContainer:{
        justifyContent: "center",
        alignItems: "center"
    }
})