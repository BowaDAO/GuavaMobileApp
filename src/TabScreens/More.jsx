import { ScrollView, Text, Pressable, StyleSheet } from "react-native";
import { FONTS, colors } from "../../constants";

const More = () => {
  return (
    <ScrollView style={styles.body}>
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
    </ScrollView>
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
    fontFamily: FONTS.medium,
  },
});
export default More;
