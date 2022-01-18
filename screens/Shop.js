import React, { useEffect } from "react";
// import {  View } from 'react-native';
import { ScrollView } from "react-native";
import Cards from "../components/Cards";
import productoAction from "../redux/actions/productoAction";
import { connect } from "react-redux";
// import Navigator from './navigation/NavDrawer'
// import { NavigationContainer } from '@react-navigation/native';

const Shop = (props) => {
  useEffect(() => {
    props.listaProductos();
  }, []);

  return (
    <ScrollView>
      {props.productos.map((producto, index) => {
        return <Cards key={index} producto={producto} />;
      })}
    </ScrollView>
    // <NavigationContainer>
    // {/* <Navigator/> */}
    // {/* </NavigationContainer> */
  );
};

const mapStateToProps = (state) => {
  return {
    productos: state.productoReducer.productos,
  };
};

const mapDispatchToProps = {
  listaProductos: productoAction.fetchearProductos,
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
