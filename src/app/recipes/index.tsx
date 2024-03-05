import { Text, View, FlatList } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Recipe } from "@/components/Recipe";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          color="#000"
          onPress={() => router.back()}
        />
        <Text style={styles.title}> Ingredientes</Text>

        <FlatList
          data={["1"]}
          keyExtractor={(item) => item}
          renderItem={() => (
            <Recipe
              recipe={{
                name: "Omelete",
                image:
                  "https://static.itdg.com.br/images/360-240/b7fbdbc168198caec6673ff663bcef66/322150-original.jpg",
                minutes: 20,
              }}
            />
          )}
        />
      </View>
    </View>
  );
}
