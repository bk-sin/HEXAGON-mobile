import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Productos from "../components/Productos";
import productoAction from "../redux/actions/productoAction";
import Loader from '../components/Loader'

import { connect } from "react-redux";

const Shop = (props) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getProductos = async() => {
      let res = await props.listaProductos()
      if(res) setLoading(false)
    }
    getProductos()
  }, []);

  if(loading){
    return <Loader />
  }
  return (
    <ScrollView>
      {props.productos.map((producto, index) => {
        return (
          <Productos
            key={index}
            producto={producto}
            navigate={props.navigation.navigate}
          />
        );
      })}
    </ScrollView>
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
