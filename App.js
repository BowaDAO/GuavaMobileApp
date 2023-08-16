import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Stack, Tabs } from "expo-router";

const App = () => {
  return (
    <Tabs>
      <Tabs.Screen name="Feed" />
    </Tabs>
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
