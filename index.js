/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from "./App";

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
