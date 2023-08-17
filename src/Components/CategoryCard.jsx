import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../constants";

const CategoryCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.text}>{item.name} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: "30.8%",
    backgroundColor: colors.purple,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  text: {
    textTransform: "capitalize",
    textAlign: "center",
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
    padding: 5,
  },
});

export default CategoryCard;
