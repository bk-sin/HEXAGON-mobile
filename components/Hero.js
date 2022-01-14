import React from "react"
import { View, Text, Heading, NativeBaseProvider} from "native-base"

export default function Hero () {
  return (
    <NativeBaseProvider>
    <View>
      <Heading>
      FIND A NEW DEVICE OR MAKE YOURS SPECIAL!
        <Heading color="emerald.400">React Ecosystem</Heading>
      </Heading>
      <Text pt="3" fontWeight="md">
      Thanks to Hexagon, you can find yourself a brand new phone or give to your current one new looks and accessories.
      </Text>
    </View>
    </NativeBaseProvider>
  )
}

