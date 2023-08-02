import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState("");
  const [qrvalue, setQrvalue] = useState("");
  const qrCode = () => {
    setQrvalue(inputText);
    navigation.navigate("QRCode", { inputText: inputText });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Please insert any value to generate QR code
        </Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(inputText) => setInputText(inputText)}
          placeholder="Enter Any Value here"
          value={inputText}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={() => qrCode()}>
          <Text style={styles.buttonTextStyle}>Generate QR Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  textStyle: {
    textAlign: "center",
    margin: 10,
    fontSize: 17,
    color: "tomato",
  },
  textInputStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    width: windowWidth - 40,
    borderWidth: 0.3,
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: "grey",
  },

  buttonStyle: {
    height: 55,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "tomato",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#51D8C7",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    fontSize: 16,
    paddingLeft: 7,
    paddingRight: 7,
    padding: 5,
  },
});
