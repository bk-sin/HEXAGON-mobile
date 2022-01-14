import React from 'react'
import {createStore, applyMiddleware} from "redux"
import rootReducer from "./redux/reducers/rootReducer"
import thunk from "redux-thunk"
import {Provider} from 'react-redux'
// import Navigate from './navigation/NavDrawer'
import Navigator from './navigation/NavTabs'
import { NavigationContainer } from '@react-navigation/native'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigator/>
          {/* <Navigate/> */}
        </NavigationContainer>      
      </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
