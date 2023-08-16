import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TabNavigator } from "./src/Navigations";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bottom_Tabs">
        <Stack.Screen
          name="Bottom_Tabs"
          component={TabNavigator}
          options={{
            title: "AA",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
