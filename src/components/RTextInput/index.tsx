import color from "@/theme/color";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
  rightComponent?: React.ReactElement;
};

function RTextInput({ rightComponent, ...rest }: Props): React.ReactElement {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...rest} />
      {rightComponent ? rightComponent : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: color.NEUTRAL.LIGHT.DARKEST,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    paddingVertical: 14,
    flex: 1,
  },
});

export default RTextInput;
