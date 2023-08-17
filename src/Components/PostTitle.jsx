import { Text } from "react-native";
import { FONTS } from "../../constants";

const PostTitle = ({ title }) => {
  return (
    <Text style={{ fontSize: 20, fontWeight: "700", fontFamily: FONTS.bold }}>
      {title}{" "}
    </Text>
  );
};
export default PostTitle;
