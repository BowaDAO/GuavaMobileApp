import { FlatList } from "react-native";
import { SinglePost } from "../Components";
import { postsData } from "../../constants/data";

const renderItem = ({ item }) => {
  return <SinglePost post={item} />;
};

const Lists = () => {
  return (
    <FlatList
      data={postsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 5 }}
    />
  );
};

export default Lists;
