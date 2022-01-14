const initialState = {
  productos: [],
  producto: [],
}

const productoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTOS":
      return {
        ...state,
        productos: action.payload.productos,
        producto: action.payload.productos,
      }

    case "FETCH_UN_PRODUCTO":
      return {
        ...state,
        producto: action.payload.respuesta,
        success: action.payload.success,
      }
    default:
      return state
  }
}

export default productoReducer
