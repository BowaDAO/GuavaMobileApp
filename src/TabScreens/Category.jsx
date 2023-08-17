import { View, Text, FlatList, StyleSheet } from "react-native";
import { categoryData } from "../../constants/data";
import { colors } from "../../constants";
import { CategoryCard } from "../Components";

const Category = () => {
  const renderItem = ({ item }) => {
    return <CategoryCard item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Category;
