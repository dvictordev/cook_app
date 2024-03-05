import { Slot } from "expo-router";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { ActivityIndicator } from "react-native";

export default function Layout() {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fonstLoaded) {
    return;
  }

  return fonstLoaded ? <Slot /> : <ActivityIndicator />;
}
