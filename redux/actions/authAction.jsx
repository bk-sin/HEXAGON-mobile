import axios from "axios"
const rootUrl = "https://hexagon-techstore.herokuapp.com/api/"
const tokenAuth = rootUrl + "auth"
const loginUrl = rootUrl + "user/login"
const registerUrl = rootUrl + "user/register"
const allUsers = rootUrl + "user/modificar"
const allUsersByDate = rootUrl + "user/getUsersByDate"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {ToastAndroid} from "react-native"

const authAction = {
  loginPending: (email, password) => {
    return (dispatch, getState) => {
      dispatch({
        type: "auth@@GET_USER_PENDING",
      })
    }
  },
  userLogin: (formulario) => {
    return async (dispatch, getState) => {
      const {email, password} = formulario
      try {
        const response = await axios.post(loginUrl, {email, password})
        if (response.data.success) {
          await AsyncStorage.setItem("token", response.data.token)
          getState().modalReducer.showModal = false
          ToastAndroid.showWithGravityAndOffset(
            "Welcome to Hexagon 👋! ",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            60
          )
          dispatch({
            type: "auth@@USER",
            payload: {
              user: response.data.user,
              authError: response.data.errors,
              token: response.data.token,
            },
          })
        } else {
          console.error(response.data.errors)
          dispatch({
            type: "auth@@GET_USER_FAIL",
            payload: {
              authError: response.data.errors,
            },
          })
        }
      } catch (error) {
        ToastAndroid.showWithGravityAndOffset(
          "⚠️ Invalid password or email",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          60
        )
        console.log(error)
        console.error("Email or password incorrect!")
        dispatch({
          type: "auth@@GET_USER_FAIL",
          payload: {
            authError: "Email or password incorrect!",
          },
        })
      }
    }
  },
  userRegister: (formulario) => {
    return async (dispatch, getState) => {
      const {firstName, lastName, password, email, photo, country} = formulario
      try {
        let response = await axios.post(registerUrl, {
          firstName,
          lastName,
          password,
          email,
          photo,
          country,
          google:false
        })
        if (response.data.success && !response.data.errors) {
          getState().modalReducer.showModal = false
          await AsyncStorage.setItem("token", response.data.response.token)
          console.log(
            "Welcome to HEXAGON " +
              response.data.response.nuevoUsuario.firstName
          )
          dispatch({
            type: "auth@@NEW_USER",
            payload: {
              user: response.data.response.nuevoUsuario,
              token: response.data.response.token,
              authError: response.data.errors,
            },
          })
        } else {
          dispatch({
            type: "auth@@GET_USER_FAIL",
            payload: {authError: response.data.errors},
          })
          response.data.errors.isArray
            ? response.data.errors.map((err) => console.error(err.message))
            : console.error(response.data.errors)
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  tokenVerify: () => {
    return async (dispatch, getState) => {
      try {
        const token =
          (await AsyncStorage.getItem("token")) || getState().authReducer.token
        const response = await axios.get(tokenAuth, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        dispatch({
          type: "auth@@GET_USER_SUCCESS",
          payload: {
            user: response.data.user,
            token: token,
            authError: null,
          },
        })
      } catch (error) {
        const token =
          (await AsyncStorage.getItem("token")) || getState().authReducer.token
        if (token) {
          dispatch({
            type: "auth@@GET_USER_FAIL",
            payload: {user: null, token: null, authError: error.message},
          })
        } else {
          dispatch({
            type: "auth@@GET_USER_FAIL",
            payload: {user: null, token: null, authError: "no token"},
          })
        }
      }
    }
  },
  logout: async () => {
    await AsyncStorage.removeItem("token")
    return (dispatch, getState) => {
      dispatch({type: "auth@@LOGOUT", payload: ""})
    }
  },
  getUsers: () => {
    return async (dispatch, getState) => {
      const response = await axios.get(allUsers)
      dispatch({type: "auth@@ALL_USERS", payload: response.data.response})
      return response
    }
  },
  getUsersByDate: () => {
    return async (dispatch, getState) => {
      const response = await axios.get(allUsersByDate)
      dispatch({
        type: "auth@@ALL_USERS_BY_DATE",
        payload: response.data,
      })
    }
  },
}
export default authAction
