import { NavigationContainer } from "@react-navigation/native";
import QRCode from "./src/Screens/QRCode";
import { createStackNavigator } from "@react-navigation/stack";
import GenerateQRCode from "./src/Screens/GenerateQRCode";
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GenerateQRCode"
          component={GenerateQRCode}
          options={{
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "tomato",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="QRCode"
          component={QRCode}
          options={{
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "tomato",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
