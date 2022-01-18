import React from "react";
import { createStore, applyMiddleware } from "redux";
import { StatusBar } from "expo-status-bar";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Navigator from "./navigation/NavDrawer.js";
import { NavigationContainer } from "@react-navigation/native";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#c950e7" />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
