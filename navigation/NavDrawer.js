import * as React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()


export default function NavDrawer() {
  return (
  <Drawer.Navigator>
    <Drawer.Screen 
    name="Home"
    component={Home}
    />  
      <Drawer.Screen 
    name="Shop"
    component={Shop}
    />  

</Drawer.Navigator>
)}