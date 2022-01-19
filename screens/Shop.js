import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import Cards from "../components/Productos";
import productoAction from "../redux/actions/productoAction";
import { connect } from "react-redux";


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