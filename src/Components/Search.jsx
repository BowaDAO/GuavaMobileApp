import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { colors, icon } from "../../constants";

//component handing search functionality
const Search = () => {
  return (
    <View style={styles.container}>
      <Image source={icon.search} style={styles.icon} />
      <TextInput placeholder="Search interesting topics" style={styles.input} />
      <TouchableOpacity style={styles.search_button}>
        <Text style={styles.search_button_text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

//search component styles
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.gray,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 10,
  },
  input: {
    width: "100%",
    height: "100%",
    paddingLeft: 50,
    fontSize: 16,
    color: colors.grey,
  },
  search_button: {
    position: "absolute",
    right: 10,
    height: 34,
    width: 66,
    backgroundColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  search_button_text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "500",
  },
});

export default Search;
