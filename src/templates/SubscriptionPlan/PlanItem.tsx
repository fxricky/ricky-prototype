import { icRadio, icRadioSelected, icRecommended } from "@/assets/icons";
import color from "@/theme/color";
import { typography } from "@/theme/typography";
import { Image, StyleSheet, Text, View } from "react-native";

export type TPlan = {
  type: string;
  discount?: string;
  price: string;
  unit: string;
  recommended?: boolean;
};

type Props = {
  plan: TPlan;
  selected?: boolean;
};

function PlanItem({ plan, selected }: Props): React.ReactElement {
  const overrideContainerStyle = selected
    ? StyleSheet.compose(styles.container, styles.container__selected)
    : styles.container;

  return (
    <View>
      <View key={plan.type} style={overrideContainerStyle}>
        <Image
          style={styles.iconRadio}
          source={selected ? icRadioSelected : icRadio}
        />
        <View style={styles.content}>
          <View>
            <Text style={styles.txtType}>{plan.type}</Text>
            {plan.discount && (
              <Text style={styles.txtDiscount}>-{plan.discount} discount</Text>
            )}
          </View>
          <View>
            <Text style={styles.txtPrice}>${plan.price}</Text>
            <Text style={styles.txtUnit}>every {plan.unit}</Text>
          </View>
        </View>
      </View>
      {plan.recommended && (
        <Image style={styles.iconRec} source={icRecommended} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 0.5,
    borderColor: color.NEUTRAL.LIGHT.DARK,
  },
  container__selected: {
    backgroundColor: color.PRIMARY.LIGHTEST,
    borderWidth: 0,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 12,
  },
  iconRadio: {
    width: 16,
    height: 16,
    flexShrink: 1,
  },
  txtType: {
    ...typography().heading.h4,
    color: color.NEUTRAL.DARK.DARKEST,
    marginBottom: 4,
  },
  txtDiscount: {
    ...typography().body.xs,
    color: color.PRIMARY.DARKEST,
  },
  txtPrice: {
    ...typography().heading.h3,
    color: color.NEUTRAL.DARK.DARKEST,
    textAlign: "right",
  },
  txtUnit: {
    ...typography().body.xs,
    color: color.NEUTRAL.DARK.DARKEST,
  },
  iconRec: {
    position: "absolute",
    right: -8,
    top: -8,
  },
});

export default PlanItem;
