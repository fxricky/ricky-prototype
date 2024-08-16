import React from "react";
import {
  Image,
  Linking,
  Pressable,
  SectionList,
  SectionListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Navigation } from "react-native-navigation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import color from "@/theme/color";

import "@/templates/Onboarding/Walkthrough";
import "@/templates/Onboarding/Personalize";
import "@/templates/SubscriptionPlan";
import "@/templates/Login/Login";
import { typography } from "@/theme/typography";
import { icChevronRight } from "@/assets/icons";

const TEMPLATES: {
  title: string;
  data: { label: string; screenName: string }[];
}[] = [
  {
    title: "Onboarding",
    data: [
      { label: "Walkthrough", screenName: "Walkthrough" },
      { label: "Personalize", screenName: "Personalize" },
    ],
  },
  {
    title: "Subscription",
    data: [{ label: "Subscription Plan", screenName: "SubscriptionPlan" }],
  },
  {
    title: "Login",
    data: [{ label: "Login", screenName: "Login.LoginScreen" }],
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

  const handleProfileClick = () => {
    Linking.openURL("https://www.figma.com/@renataporto");
  };

  const renderItem: SectionListRenderItem<any> = ({ item }) => {
    return (
      <Pressable
        style={styles.section__item}
        onPress={navigate(item.screenName)}>
        <Text>{item.label}</Text>
        <Image style={styles.section__item__icon} source={icChevronRight} />
      </Pressable>
    );
  };

  const renderSectionHeader = ({ section }: { section: any }) => (
    <Text style={styles.section__title}>{section.title}</Text>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header__container}>
          <Text style={styles.header__title}>Ricky Prototype</Text>
          <Text style={styles.header__desc}>
            Get a feel for the prototype, where a selection of mobile app
            components that are not just functional, but also easy to use and
            beautiful to look at.
          </Text>
          <Text style={styles.header__desc}>
            Whether it’s smooth navigation or clean UI elements, these
            components are here to inspire and help you build something amazing.
          </Text>
          <Text style={styles.header__credit}>
            This prototype kit designed by{" "}
            <Text
              onPress={handleProfileClick}
              style={styles.header__credit__profile}>
              @renataporto
            </Text>
            .
          </Text>
        </View>
        <SectionList
          sections={TEMPLATES}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.NEUTRAL.LIGHT.LIGHTEST,
    flex: 1,
  },
  btnScreen: {
    backgroundColor: color.PRIMARY.DARKEST,
  },
  btnScreen__lbl: {
    color: color.NEUTRAL.LIGHT.LIGHTEST,
  },
  header__container: {
    backgroundColor: color.PRIMARY.LIGHTEST,
    padding: 16,
  },
  header__title: {
    ...typography().heading.h1,
    textAlign: "center",
  },
  header__desc: {
    ...typography().body.m,
    textAlign: "justify",
    marginTop: 16,
  },
  header__credit: {
    ...typography().body.xs,
    color: color.NEUTRAL.DARK.LIGHTEST,
    marginTop: 16,
  },
  header__credit__profile: {
    textDecorationLine: "underline",
  },
  section__title: {
    ...typography().heading.h1,
    textAlign: "center",
    paddingTop: 16,
  },
  section__item: {
    borderBottomWidth: 1,
    borderBottomColor: color.NEUTRAL.LIGHT.DARK,
    padding: 16,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  section__item__icon: {
    height: 12,
    width: 12,
  },
});

export default App;
