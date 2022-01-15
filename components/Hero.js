import React from "react"
import { View, Text, NativeBaseProvider} from "native-base"

export default function Hero () {
  return (
    <NativeBaseProvider>
    <View>
      <Text>
      FIND A NEW DEVICE OR MAKE YOURS SPECIAL!
      </Text>
      <Text pt="3" fontWeight="200">
      Thanks to Hexagon, you can find yourself a brand new phone or give to your current one new looks and accessories.
      </Text>
    </View>
    </NativeBaseProvider>
  )
}

