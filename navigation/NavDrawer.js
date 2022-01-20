import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Shop from "../screens/Shop";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import NavTabs from "./NavTabs";
import Perfil from "../components/Perfil";
import LogOut from "../components/LogOut";
import { connect } from "react-redux";

const drawer = createDrawerNavigator();

const NavDrawer = (props) => {
  return (
    <drawer.Navigator
      drawerContent={(props) => <Perfil {...props} />}
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
      <drawer.Screen name="Shop" component={Shop} />
      {!props.isAuth ? (
        <>
          <drawer.Screen name="SignUp" component={SignUp} />
          <drawer.Screen name="SignIn" component={SignIn} />
        </>
      ) : (
        <drawer.Screen name="Log Out" component={LogOut} />
      )}
    </drawer.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps)(NavDrawer);
