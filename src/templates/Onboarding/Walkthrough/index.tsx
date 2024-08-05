import { icImage } from "@/assets/icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import color from "@/theme/color";
import { typography } from "@/theme/typography";
import RButton from "@/components/RButton";

function WalkthroughScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.sectionImg}>
        <Image source={icImage} />
      </View>
      <View style={styles.sectionContent}>
        <View style={styles.rowPagination}>
          <View
            style={[styles.paginationDot, styles["paginationDot--active"]]}
          />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>
        <View style={{ height: 24 }} />
        <Text style={styles.txtHeader}>
          Create a prototype in just a few minutes
        </Text>
        <View style={{ height: 24 }} />
        <Text style={styles.txtDescription}>
          Enjoy these pre-made components and worry only about creating the best
          product ever.
        </Text>
        <View style={{ height: 24 }} />
        <RButton label={"Next"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionImg: {
    backgroundColor: color.PRIMARY.LIGHTEST,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  sectionContent: {
    padding: 24,
  },
  rowPagination: {
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: color.NEUTRAL.DARK.DARKEST_01,
  },
  "paginationDot--active": {
    backgroundColor: color.PRIMARY.DARKEST,
  },
  txtHeader: {
    ...typography().heading.h1,
  },
  txtDescription: {
    ...typography().body.s,
    color: color.NEUTRAL.DARK.LIGHT,
  },
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

Navigation.registerComponent("Walkthrough", () => WalkthroughScreen);
