import React from "react";
import { Pressable, SafeAreaView, Text } from "react-native";
import { Navigation } from "react-native-navigation";

import color from "@/theme/color";
import "@/templates/Onboarding/Walkthrough";

function App({ componentId }: { componentId: string }): React.JSX.Element {
  const navigate = (screenName: string) => () => {
    Navigation.push(componentId, {
      component: {
        name: screenName,
      },
    });
  };

  return (
    <SafeAreaView>
      <Pressable onPress={navigate("Walkthrough")}>
        <Text style={{ color: color.PRIMARY.DARK }}>Onboarding</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default App;
