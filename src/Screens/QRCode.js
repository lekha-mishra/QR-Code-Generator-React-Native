import { View } from "react-native";
import React from "react";
import QRCodeView from "react-native-qrcode-svg";

const QRCode = ({ route }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <QRCodeView
        value={route.params.inputText ? route.params.inputText : "NA"}
        size={250}
        color="black"
        backgroundColor="white"
        logo={{
          url: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png",
        }}
        logoSize={30}
        logoMargin={2}
        logoBorderRadius={15}
        logoBackgroundColor="transparent"
      />
    </View>
  );
};
export default QRCode;
