import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants";

const Bookmark = () => {
  return <View style={styles.body}></View>;
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
export default Bookmark;
