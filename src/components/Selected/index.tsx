import { Text, View } from "react-native";
import Animated, { SlideInDown, BounceOutDown } from "react-native-reanimated";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "@/components/Button";

type SelectedProps = {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
};

export function Selected({ onClear, onSearch, quantity }: SelectedProps) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
        <MaterialIcons name="close" size={24} color="#fff" onPress={onClear} />
      </View>
      <Button title="Encontrar" onPress={onSearch} />
    </Animated.View>
  );
}
