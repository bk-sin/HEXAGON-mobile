import React from "react";
import AppLoading from "expo-app-loading";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Navigator from "./navigation/NavDrawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Mukta_400Regular } from "@expo-google-fonts/mukta";

export default function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Mukta_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    );
  }
}
