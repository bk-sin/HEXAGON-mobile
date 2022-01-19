import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import Productos from "../screens/Productos";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import NavTabs from "./NavTabs";
import { Text } from "react-native";

const drawer = createDrawerNavigator();

const NavDrawer = (props) => {
  return (
    <drawer.Navigator
      // drawerContent={(props) => {
      //   <MenuItems {...props} />;
      // }}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#212529",
        },
        headerTintColor: "#ffffff",
      }}
    >
      <drawer.Screen
        name="Home"
        component={NavTabs}
        options={{
          title: "Hexagon",
          headerShown: false,
        }}
      />
      <drawer.Screen name="Productos" component={Productos} />
      <drawer.Screen name="SignUp" component={SignUp} />
      <drawer.Screen name="SignIn" component={SignIn} />
    </drawer.Navigator>
  );
};

// const MenuItems = ({ navigation }) => {
//   return (
//     <DrawerContentScrollView>
//       <Text>My Menu</Text>
//     </DrawerContentScrollView>
//   );
// };
export default NavDrawer;
