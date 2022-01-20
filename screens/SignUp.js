import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import authAction from "../redux/actions/authAction.jsx";

const SignUp = (props) => {
  console.log(props?.user);

  const countries = [
    "Argentina",
    "Bolivia",
    "Paraguay",
    "Uruguay",
    "Chile",
    "Colombia",
    "Peru",
    "Brasil",
    "Venezuela",
  ];
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photo: "",
    country: "",
  });

  const [error, setError] = useState(null);
  const onSubmit = async (e) => {
    let response = await props.userRegister(form);
    if (!response.data.success) {
      if (Array.isArray(response.data.errors)) {
        setError(
          response.data.errors.map((msj, id) => {
            return <p key={id}>{msj.message}</p>;
          })
        );
      } else {
        setError(<p>{response.data.error}</p>);
      }
    }
  };

  const handleChange = async () => {
    if (
      (form.firstName === "" ||
        form.lastName === "" ||
        form.email === "" ||
        form.password === "",
      form.photo === "",
      form.country === "")
    ) {
      ToastAndroid.showWithGravityAndOffset(
        "⚠️ All fields must be completed",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        60
      );
    } else {
      try {
        let response = await props.userRegister(form);
        if (response.data.success) {
          props.navigation.navigate("home");
          ToastAndroid.showWithGravityAndOffset(
            "Welcome to Hexagon 👋!",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            60
          );
        } else if (response.data.errors) {
          let errors = response.data.errors;
          errors.map((error) =>
            ToastAndroid.showWithGravityAndOffset(
              "⚠️" + error.message,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              60
            )
          );
        } else {
          ToastAndroid.showWithGravityAndOffset(
            "This email is already in use",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            60
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView>
      {/* <ImageBackground
        style={styles.signUpBack}
        source={require("../assets/home.jpg")}
        resizeMode="cover"
      > */}
      <ImageBackground
        source={require("../assets/bg2.jpg")}
        resizeMode="cover"
        style={styles.inputConteiner}
      >
        <Text style={styles.signUpTitle}>Sign up!</Text>
        <TextInput
          style={styles.input}
          color="#ffffff"
          placeholder="First Name"
          placeholderTextColor="#ffffff"
          onChange={(e) => setForm({ ...form, firstName: e.nativeEvent.text })}
        />
        <TextInput
          style={styles.input}
          color="#ffffff"
          placeholder="Last Name"
          placeholderTextColor="#ffffff"
          onChange={(e) => setForm({ ...form, lastName: e.nativeEvent.text })}
        />
        <TextInput
          style={styles.input}
          color="#ffffff"
          placeholder="Email"
          placeholderTextColor="#ffffff"
          onChange={(e) => setForm({ ...form, email: e.nativeEvent.text })}
        />
        <TextInput
          style={styles.input}
          color="#ffffff"
          placeholder="Picture Url"
          placeholderTextColor="#ffffff"
          onChange={(e) => setForm({ ...form, photo: e.nativeEvent.text })}
        />
        <TextInput
          style={styles.input}
          color="#ffffff"
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          onChange={(e) => setForm({ ...form, password: e.nativeEvent.text })}
        />
        <SelectDropdown
          style={styles.inputSelect}
          data={countries}
          defaultButtonText={"Select your country"}
          buttonStyle={styles.dropdownButtonStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={() => {
            return (
              <FontAwesome name="chevron-down" color={"black"} size={15} />
            );
          }}
          dropdownIconPosition={"right"}
          onSelect={(selectedItem) =>
            setForm({ ...form, country: selectedItem })
          }
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          onValueChange={(e) => userHandler(e, "country")}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleChange}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSignIn}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate("SignIn")}
        >
          <Text style={styles.textSignIn}>Already a member? Sign In here</Text>
        </TouchableOpacity>
      </ImageBackground>
      {/* </ImageBackground> */}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = {
  userRegister: authAction.userRegister,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const styles = StyleSheet.create({
  signUpBack: {
    width: "100%",
    height: 900,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 260,
    margin: 9,
    padding: 10,
    borderRadius: 2,
    borderColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
  },
  inputSelect: {
    height: 40,
  },
  signUpTitle: {
    marginTop: 50,
    padding: 10,
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 35,
    textAlign: "center",
  },

  inputConteiner: {
    alignItems: "center",
    height: 670,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    marginTop: 20,
    backgroundColor: "black",
    width: 150,
    height: 50,
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.3,
    color: "white",
  },
  buttonSignIn: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 40,
    zIndex: 1,
  },
  textSignIn: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.3,
    color: "#ffffff",
    borderBottomWidth: 2,
    textShadowColor: "#020202",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dropdownButtonStyle: {
    height: 50,
    width: 260,
    margin: 9,
    padding: 10,
    borderRadius: 2,
    borderColor: "#dad8d8",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
