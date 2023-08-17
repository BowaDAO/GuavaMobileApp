import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { FONTS, colors } from "../../constants";
import { useNavigation } from "@react-navigation/native";

// Component that renders single post card on the feed
const SinglePost = ({ post }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Details", { post });
  };

  return (
    <TouchableOpacity
      style={[styles.container, styles.shadowProp]}
      onPress={onPress}
    >
      <View style={styles.image_container}>
        <Image source={post.image} resizeMode="contain" style={styles.image} />
      </View>
      <View style={styles.post_info_container}>
        <View style={styles.category_container}>
          <Text style={styles.category_text}>{post.category}</Text>
        </View>

        <Text style={styles.post_title}>{post.title}</Text>

        <View style={styles.duration_container}>
          <Text style={styles.time}>{post.readTime} read</Text>
          <Text style={styles.time}>posted {post.time} ago</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.white,
    paddingVertical: 3,
  },
  image_container: {
    width: 135,
    height: 105,
    borderRadius: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    // borderRadius: 10,
  },
  post_info_container: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    flex: 1,
  },
  duration_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "100%",
  },
  post_title: {
    flexWrap: "wrap",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: FONTS.regular,
  },
  category_container: {
    backgroundColor: colors.purple,
    paddingVertical: 3,
    paddingHorizontal: 4,
    borderRadius: 3,
  },
  category_text: {
    color: colors.white,
    textTransform: "capitalize",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: FONTS.regular,
  },
  time: {
    fontSize: 12,
    fontFamily: FONTS.regular,
  },
  shadowProp: {
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    // elevation: 4,
  },
});

export default SinglePost;
