import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native";
import Home from "../screens/Home";
import Shop from "../screens/Shop";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";

const Tab = createBottomTabNavigator();

export default function NavTabs(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Hexagon",
          headerRight: () => (
            <Button
              onPress={() => props.navigation.openDrawer()}
              title="Menu"
              color="#000000"
            />
          ),
        }}
      />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="SignIn" component={SignIn} />
    </Tab.Navigator>
  );
}
