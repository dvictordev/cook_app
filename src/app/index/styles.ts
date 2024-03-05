import { StyleSheet } from "react-native";
import { theme } from "@/theme";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 32,
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    color: theme.colors.black,
    fontFamily: theme.fonts.family.bold,
  },
  subtitle: {
    fontSize: theme.fonts.size.heading.xl,
    color: theme.colors.black,
    fontFamily: theme.fonts.family.regular,
  },
  message: {
    fontSize: theme.fonts.size.body.md,
    color: theme.colors.gray_400,
    fontFamily: theme.fonts.family.regular,
  },
  ingredients: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingBottom: 200,
    gap: 12,
  },
  ingredientsContent: {
    gap: 12,
    paddingHorizontal: 32,
  },
});
