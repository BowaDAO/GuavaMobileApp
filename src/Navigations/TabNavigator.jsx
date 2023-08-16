import { Image } from "react-native";
import { Bookmark, Feed, Category, More } from "../TabScreens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icon } from "../../constants";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        if (route.name === "Feed") {
          return <Image source={icon.home} />;
        }
        if (route.name === "Category") {
          return <Image source={icon.category} />;
        }
        if (route.name === "Bookmark") {
          return <Image source={icon.bookmark} />;
        }
        if (route.name === "More") {
          return <Image source={icon.more} />;
        }
      },
    })}
  >
    <Tab.Screen name="Feed" component={Feed}></Tab.Screen>
    <Tab.Screen name="Category" component={Category} />
    <Tab.Screen name="Bookmark" component={Bookmark} />
    <Tab.Screen name="More" component={More} />
  </Tab.Navigator>;
};

export default TabNavigator;
