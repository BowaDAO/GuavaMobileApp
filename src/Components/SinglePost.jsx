import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../constants";

// Component that renders single post card on the feed
const SinglePost = ({ post }) => {
  return (
    <TouchableOpacity style={[styles.container, styles.shadowProp]}>
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
    height: 105,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image_container: {
    width: 135,
    height: "100%",
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
    // gap: 50,
  },
  post_title: {
    flexWrap: "wrap",
    fontSize: 18,
    fontWeight: "400",
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
  },
  time: {
    fontSize: 12,
  },
  shadowProp: {
    shadowColor: colors.white,
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default SinglePost;
