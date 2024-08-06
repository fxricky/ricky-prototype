import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Navigation } from "react-native-navigation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import color from "@/theme/color";

import "@/templates/Onboarding/Walkthrough";
import "@/templates/Onboarding/Personalize";
import "@/templates/SubscriptionPlan";

const TEMPLATES: { label: string; screenName: string }[] = [
  {
    label: "Onboarding.Walkthrough",
    screenName: "Walkthrough",
  },
  {
    label: "Onboarding.Personalize",
    screenName: "Personalize",
  },
  {
    label: "Subsription Plan",
    screenName: "SubscriptionPlan",
  },
];

function App({ componentId }: { componentId: string }): React.JSX.Element {
  const navigate = (screenName: string) => () => {
    Navigation.push(componentId, {
      component: {
        name: screenName,
      },
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {TEMPLATES.map(template => {
          return (
            <Pressable
              key={template.screenName}
              style={styles.btnScreen}
              onPress={navigate(template.screenName)}>
              <Text style={styles.btnScreen__lbl}>{template.label}</Text>
            </Pressable>
          );
        })}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  btnScreen: {
    backgroundColor: color.PRIMARY.DARKEST,
  },
  btnScreen__lbl: {
    color: color.NEUTRAL.LIGHT.LIGHTEST,
  },
});

export default App;
