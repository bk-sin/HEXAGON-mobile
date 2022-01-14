import React from "react"
import { View, Text, Heading, NativeBaseProvider} from "native-base"

export default function Hero () {
  return (
    <NativeBaseProvider>
    <View>
      <Heading>
        A component library for the{" "}
        <Heading color="emerald.400">React Ecosystem</Heading>
      </Heading>
      <Text pt="3" fontWeight="md">
        NativeBase is a simple, modular and accessible component library that
        gives you building blocks to build you React applications.
      </Text>
    </View>
    </NativeBaseProvider>
  )
}

