import color from "@/theme/color";
import { typography } from "@/theme/typography";
import { Image, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import PlanItem, { TPlan } from "./PlanItem";
import RButton from "@/components/RButton";
import { icStarFilled } from "@/assets/icons";

const PLANS: TPlan[] = [
  {
    type: "Yearly",
    discount: "66%",
    price: "94.80",
    unit: "year",
    recommended: true,
  },
  {
    type: "Monthly",
    discount: "53%",
    price: "10.90",
    unit: "month",
  },
  {
    type: "Weekly",
    price: "5.90",
    unit: "week",
  },
];

function SubscriptionPlanScreen() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeader__title}>
          Choose your subscription plan
        </Text>
        <Text style={styles.sectionHeader__description}>
          And get a 7-day free trial
        </Text>
      </View>
      <View style={styles.sectionPricing}>
        {PLANS.map((plan, index) => {
          return <PlanItem key={plan.type} plan={plan} selected={index == 0} />;
        })}
      </View>
      <View style={styles.sectionAddOn}>
        <Text style={styles.sectionAddOn__title}>You'll get</Text>
        <View style={styles.sectionAddOn__seperator} />
        <View style={styles.sectionAddOn__item}>
          <Image
            style={styles.sectionAddOn__item__icon}
            source={icStarFilled}
          />
          <Text style={styles.sectionAddOn__item__description}>
            Unlimited Access
          </Text>
        </View>
        <View style={styles.sectionAddOn__seperator} />
        <View style={styles.sectionAddOn__item}>
          <Image
            style={styles.sectionAddOn__item__icon}
            source={icStarFilled}
          />
          <Text style={styles.sectionAddOn__item__description}>
            200GB Storage
          </Text>
        </View>
        <View style={styles.sectionAddOn__seperator} />
        <View style={styles.sectionAddOn__item}>
          <Image
            style={styles.sectionAddOn__item__icon}
            source={icStarFilled}
          />
          <Text style={styles.sectionAddOn__item__description}>
            Sync all your devices
          </Text>
        </View>
      </View>
      <View style={styles.sectionButton}>
        <RButton label="Subscribe" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    paddingHorizontal: 32,
    paddingTop: 48,
    paddingBottom: 24,
  },
  sectionHeader__title: {
    ...typography().heading.h1,
    marginBottom: 16,
  },
  sectionHeader__description: {
    ...typography().body.m,
    color: color.NEUTRAL.DARK.LIGHT,
  },
  sectionPricing: {
    padding: 24,
  },
  sectionAddOn: {
    backgroundColor: color.NEUTRAL.LIGHT.LIGHT,
    marginHorizontal: 24,
    marginBottom: 24,
    padding: 24,
    borderStartEndRadius: 16,
  },
  sectionAddOn__title: {
    ...typography().heading.h3,
    color: color.NEUTRAL.DARK.DARKEST,
  },
  sectionAddOn__item: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionAddOn__item__icon: {
    width: 10,
    height: 10,
  },
  sectionAddOn__item__description: {
    ...typography().body.s,
    color: color.NEUTRAL.DARK.LIGHT,
    marginLeft: 12,
  },
  sectionAddOn__seperator: {
    height: 16,
  },
  sectionButton: {
    padding: 24,
  },
});

Navigation.registerComponent(
  "SubscriptionPlan",
  () => props =>
    (
      <SafeAreaProvider>
        <SubscriptionPlanScreen {...props} />
      </SafeAreaProvider>
    ),
  () => SubscriptionPlanScreen,
);
