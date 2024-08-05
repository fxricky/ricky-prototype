import { icCheck } from "@/assets/icons";
import color from "@/theme/color";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  selected?: boolean;
  label: string;
};

function ListItem({ selected, label }: Props): React.JSX.Element {
  const overrideStyle = selected
    ? StyleSheet.compose(styles.container, styles["container--selected"])
    : styles.container;

  return (
    <View style={overrideStyle}>
      <Text>{label}</Text>
      {selected ? <Image style={styles.iconCheck} source={icCheck} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: color.NEUTRAL.LIGHT.DARKEST,
    borderWidth: 0.5,
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  "container--selected": {
    backgroundColor: color.PRIMARY.LIGHTEST,
  },
  iconCheck: {
    height: 12,
    width: 12,
  },
});

export default ListItem;
