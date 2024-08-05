import color from "@/theme/color";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import ListItem from "./components/ListItem";
import RButton from "@/components/RButton";

import { personaliseOption } from "./data";
import { typography } from "@/theme/typography";

function PersonalizeScreen(): React.JSX.Element {
  const { top } = useSafeAreaInsets();

  const renderListItem: ListRenderItem<string> = ({ item, index }) => {
    return (
      <ListItem key={item} label={item} selected={index == 3 || index == 6} />
    );
  };

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.sectionContent}>
        <View style={styles.progressBar}>
          <View style={styles.progressBar__indicator} />
        </View>
        <Text style={styles.txtHeader}>Personalise your experience</Text>
        <View style={styles.txtSeperator} />
        <Text style={styles.txtDescription}>Choose your interest</Text>
        <FlatList
          data={personaliseOption}
          renderItem={renderListItem}
          style={styles.optionsContainer}
          ItemSeparatorComponent={() => (
            <View style={styles.optionsContainer__seperator} />
          )}
        />
        <RButton label="Next" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContent: {
    flex: 1,
    padding: 24,
  },
  progressBar: {
    height: 8,
    width: "100%",
    backgroundColor: color.NEUTRAL.LIGHT.MEDIUM,
    borderRadius: 4,
    marginBottom: 40,
  },
  progressBar__indicator: {
    height: "100%",
    width: "50%",
    backgroundColor: color.PRIMARY.DARKEST,
    borderRadius: 4,
  },
  optionsContainer: {
    marginVertical: 40,
  },
  optionsContainer__seperator: {
    height: 8,
  },
  txtHeader: {
    ...typography(24),
  },
  txtDescription: {
    ...typography(14),
  },
  txtSeperator: {
    height: 16,
  },
});

Navigation.registerComponent(
  "Personalize",
  () => props =>
    (
      <SafeAreaProvider>
        <PersonalizeScreen {...props} />
      </SafeAreaProvider>
    ),
  () => PersonalizeScreen,
);
