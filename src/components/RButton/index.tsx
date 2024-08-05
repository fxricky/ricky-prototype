import color from "@/theme/color";
import { typography } from "@/theme/typography";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type Props = PressableProps & {
  label: string;
};

function RButton({ label, ...props }: Props): React.JSX.Element {
  return (
    <Pressable style={styles.btnNext} {...props}>
      <Text style={styles.btnNext__lbl}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnNext: {
    backgroundColor: color.PRIMARY.DARKEST,
    paddingVertical: 16,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  btnNext__lbl: {
    ...typography().action.m,
    color: color.NEUTRAL.LIGHT.LIGHTEST,
  },
});

export default RButton;
