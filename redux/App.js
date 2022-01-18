import React from "react";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import Navigator from "./navigation/NavDrawer";
import { NavigationContainer } from "@react-navigation/native";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#a474f0" />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
