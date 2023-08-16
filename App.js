import { StatusBar } from "expo-status-bar";
import { TabNavigator } from "./src/Navigations";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "./src/TabScreens";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Bottom_Tabs"
        screenOptions={{ headerShown: false }}
      >
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
