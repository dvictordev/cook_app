import { Alert, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Ingredient } from "@/components/Ingredient";
import { Selected } from "@/components/Selected";
import { router } from "expo-router";

export default function Index() {
  const [selected, setSelected] = useState<string[]>([]);
  function hangleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected(selected.filter((item) => item !== value));
    }

    setSelected((state) => [...state, value]);
  }

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar os ingredientes selecionados?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Limpar",
        style: "destructive",
        onPress: () => setSelected([]),
      },
    ]);
  }

  function handleSearch() {
    router.navigate("/recipes/");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu
      </Text>

      <ScrollView
        contentContainerStyle={styles.ingredients}
        showsHorizontalScrollIndicator={false}
      >
        {Array.from({ length: 10 }).map((item, index) => (
          <Ingredient
            key={index}
            name="Tomate"
            image={require("@/assets/tomato.png")}
            selected={selected.includes(String(index))}
            onPress={() => hangleToggleSelected(String(index))}
          />
        ))}
      </ScrollView>
      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  );
}
