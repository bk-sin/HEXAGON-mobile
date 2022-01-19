import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import Productos from "../components/Productos";
import productoAction from "../redux/actions/productoAction";
import { connect } from "react-redux";


const Shop = (props) => {
  useEffect(() => {
    props.listaProductos();
  }, []);

  return (
    <ScrollView>
      {props.productos.map((producto, index) => {
        return <Productos key={index} producto={producto} />;
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