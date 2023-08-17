import { Image, StyleSheet } from "react-native";
import { Bookmark, Feed, Category, More } from "../TabScreens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icon, colors } from "../../constants";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Feed") {
            return (
              <Image
                source={focused ? icon.coloredhome : icon.home}
                style={styles.icon}
              />
            );
          }
          if (route.name === "Category") {
            return (
              <Image
                source={focused ? icon.coloredcategory : icon.category}
                style={styles.icon}
              />
            );
          }
          if (route.name === "Bookmark") {
            return (
              <Image
                source={focused ? icon.coloredbookmark : icon.bookmark}
                style={styles.icon}
              />
            );
          }
          if (route.name === "More") {
            return (
              <Image
                source={focused ? icon.coloredmore : icon.more}
                style={styles.icon}
              />
            );
          }
        },
        tabBarActiveTintColor: colors.purple,
        tabBarLabelStyle: { fontSize: 12, fontWeight: "700" },
        headerTitleStyle: { fontSize: 20, fontWeight: "700" },
        headerShadowVisible: false,
      })}
    >
      <Tab.Screen name="Feed" component={Feed}></Tab.Screen>
      <Tab.Screen
        name="Category"
        component={Category}
        options={{ title: "Categories" }}
      />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});

export default TabNavigator;
