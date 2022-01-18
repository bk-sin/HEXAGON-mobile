import * as React from "react"
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  NativeBaseProvider,
  Select,
  CheckIcon,
} from "native-base"
import {ScrollView} from "react-native"

export default function SignUp() {
  const countries = [
    {name: "Argentina"},
    {name: "Bolivia"},
    {name: "Paraguay"},
    {name: "Brasil"},
    {name: "Uruguay"},
    {name: "Chile"},
    {name: "Ecuador"},
    {name: "Peru"},
  ]
  console.log(countries)
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            fontWeight="semibold"
          >
            Welcome to Hexagon
          </Heading>
          <Heading
            // mt="1"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="medium"
            size="xs"
          >
            If you don't have an account, create a new one!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormControl.Label>LastName</FormControl.Label>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input type="email" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Photo</FormControl.Label>
              <Input type="string" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Country</FormControl.Label>
              <Select
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />,
                }}
                // mt="1"
              >
                <Select.Item label="UX Research" value="ux" />
              </Select>
            </FormControl>
            <Button colorScheme="indigo">Sign up</Button>
          </VStack>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  )
}
