import { View, ScrollView, Image, StyleSheet } from "react-native";
import { colors } from "../../constants";
import { PostTitle, AuthorInfo } from "../Components";

const Details = ({ route }) => {
  const { post } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.image_container}>
        <Image source={post.image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.body}>
        <PostTitle title={post.title} />
        <AuthorInfo post={post} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image_container: {
    height: 350,
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  body: {
    paddingHorizontal: 10,
  },
});

export default Details;
