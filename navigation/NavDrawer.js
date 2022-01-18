import {
  createDrawerNavigator,
  CustomDrawerContent,
} from "@react-navigation/drawer";
import Home from "../screens/Home";
import Shop from "../screens/Shop";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import NavTabs from "./NavTabs";

const Tab = createDrawerNavigator();

const NavDrawer = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#212529",
        },
        headerTintColor: "#ffffff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={NavTabs}
        options={{
          title: "Hexagon",
          headerShown: false,
        }}
      />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="SignIn" component={SignIn} />
    </Tab.Navigator>
  );
};
export default NavDrawer;
