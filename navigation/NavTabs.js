import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Shop from '../screens/Shop'
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn'

const Tab = createBottomTabNavigator();

export default function NavTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="SignIn" component={SignIn} />
    </Tab.Navigator>
  );
}


// options={{ tabBarBadge: 6 }}