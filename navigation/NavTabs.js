import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Shop from '../screens/Shop'


const Tab = createBottomTabNavigator();

export default function NavTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shop" component={Shop} />
    </Tab.Navigator>
  );
}