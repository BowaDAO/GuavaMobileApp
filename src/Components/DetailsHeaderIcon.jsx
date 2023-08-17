import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { icon } from "../../constants";

//Components that renders the header right image of details screen.
const DetailsHeaderRight = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={icon.bookmark} style={styles.bookmark_icon} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  bookmark_icon: {
    height: 24,
    width: 24,
  },
});
export default DetailsHeaderRight;
