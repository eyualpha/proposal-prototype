import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import CheckBox from "react-native-check-box";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,

          width: "100%",
          alignContent: "center",
        }}
      >
        <Text style={styles.title}>Sign Up</Text>
        <Text style={{ color: "gray", textAlign: "center", fontSize: 20 }}>
          Find Your Dream Home with Ease Explore, Discover, and Invest!
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-around",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={26}></Ionicons>
            <Text style={{ marginLeft: 10 }}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={25}></Ionicons>
            <Text style={{ marginLeft: 10 }}>Google</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          textContentType="password"
        />

        <TextInput
          style={styles.input}
          placeholder="Confirem Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          textContentType="password"
        />
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <CheckBox
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            checkBoxColor="tomato"
          />
          <Text style={{ marginLeft: 10 }}>
            By proceeding, you agree to our
            <Text style={{ color: "#3461FD" }}> Terms</Text> of Service and
            <Text style={{ color: "#3461FD" }}> Privasy Policy</Text>.
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text>
          Already have an account?
          <Text style={{ color: "#3461FD" }}> Sign In</Text>
        </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "tomato",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    paddingVertical: 5,
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: "tomato",
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
  socialButton: {
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#ddd",
    width: 100,
  },
  buttonText: { color: "white", fontWeight: "bold" },
});

export default LoginScreen;
