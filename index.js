/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from "./App";
import { Text } from "react-native";
import color from "@/theme/color";

Text.defaultProps = { color: color.NEUTRAL.DARK.DARKEST };

Navigation.registerComponent("root", () => App);
Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
});
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "root",
            },
          },
        ],
      },
    },
  });
});
