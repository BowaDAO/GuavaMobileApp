import { View, Text, StyleSheet } from "react-native";
import { Search } from "../Components";
import { colors } from "../../constants";
import { Lists } from "../Containers";

const Feed = () => {
  return (
    <View style={styles.body}>
      <Search />
      <View style={styles.posts_wrapper}>
        <Lists />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  posts_wrapper: {
    paddingVertical: 10,
  },
});
export default Feed;
