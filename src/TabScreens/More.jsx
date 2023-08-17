import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../../constants";

const More = () => {
  return (
    <View style={styles.body}>
      <Pressable style={styles.wrapper}>
        <Text style={styles.text}>Notifications</Text>
      </Pressable>
      <Pressable style={styles.wrapper}>
        <Text style={styles.text}>Dark Mode</Text>
      </Pressable>
      <Pressable style={styles.wrapper}>
        <Text style={styles.text}>About App</Text>
      </Pressable>
      <Pressable style={styles.wrapper}>
        <Text style={styles.text}>Contact Us</Text>
      </Pressable>
      <Pressable style={styles.wrapper}>
        <Text style={styles.text}>Newsletter</Text>
      </Pressable>
      <Pressable style={styles.wrapper}>
        <Text style={styles.text}>Privacy Policy</Text>
      </Pressable>
      <Pressable style={styles.wrapper}>
        <Text style={styles.text}>Rate Us</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  wrapper: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
export default More;
