import { Animated } from "react-native";
import { useFonts } from "expo-font";
import { TabNavigator } from "./src/Navigations";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Image } from "react-native";
import { Details } from "./src/StackScreens";
import { colors, icon } from "./constants";
import { DetailsHeaderRight } from "./src/Components";

const Stack = createStackNavigator();

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const App = () => {
  const [fontLoaded] = useFonts({
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
  });
  if (!fontLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenListeners={{
          focus: () => {
            Animated.timing(av, {
              toValue: 1,
              duration: 200,
              useNativeDriver: true,
            }).start();
          },
        }}
        initialRouteName="Bottom_Tabs"
      >
        <Stack.Screen
          name="Bottom_Tabs"
          component={TabNavigator}
          options={{
            title: "AA",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerBackTitle: "Back",
            headerTitle: "",
            headerBackTitleStyle: { color: colors.grey },
            headerRight: () => <DetailsHeaderRight />,
            headerRightContainerStyle: { paddingRight: 10 },
            headerBackImage: () => (
              <TouchableOpacity>
                <Image
                  source={icon.arrowback}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            ),
            headerLeftContainerStyle: { paddingLeft: 10 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
