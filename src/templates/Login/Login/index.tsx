import React from "react";
import {
  icAppleLogin,
  icEyeInvisible,
  icEyeVisible,
  icFbLogin,
  icGoogleLogin,
  icImage,
} from "@/assets/icons";
import RButton from "@/components/RButton";
import RTextInput from "@/components/RTextInput";
import color from "@/theme/color";
import { typography } from "@/theme/typography";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";

function LoginScreen(): React.ReactElement {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleToggleShowPassword = React.useCallback(() => {
    setShowPassword(prev => !prev);
  }, [showPassword]);

  const renderPasswordFieldRightComponent = React.useCallback(() => {
    return (
      <Pressable onPress={handleToggleShowPassword}>
        <Image
          source={showPassword ? icEyeVisible : icEyeInvisible}
          style={styles.iconPwVisibility}
        />
      </Pressable>
    );
  }, [showPassword, handleToggleShowPassword]);

  return (
    <View style={styles.container}>
      <View style={styles.sectionImg}>
        <Image style={styles.sectionImg__img} source={icImage} />
      </View>
      <View style={styles.sectionContent}>
        <Text style={styles.title}>Welcome!</Text>
        <View style={styles.sectionForm}>
          <RTextInput placeholder="Email Address" />
          <View style={styles.seperator__form} />
          <RTextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            rightComponent={renderPasswordFieldRightComponent()}
          />
          <View style={styles.seperator__form} />
          <Text style={styles.txtForgotPassword}>Forgot password?</Text>
          <RButton label="Login" />
          <Text style={styles.txtNotMember}>
            Not a member?{" "}
            <Text style={styles.txtRegisterNow}>Register Now</Text>
          </Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.sectionSocialLogin}>
          <Text>Or continue with</Text>
          <View style={styles.rowSocialMedia}>
            <Image style={styles.imgSocialMedia} source={icGoogleLogin} />
            <Image style={styles.imgSocialMedia} source={icAppleLogin} />
            <Image style={styles.imgSocialMedia} source={icFbLogin} />
          </View>
        </View>
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
    minHeight: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionImg__img: {
    tintColor: color.PRIMARY.LIGHT,
    height: 32,
    width: 32,
  },
  sectionContent: {
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  title: {
    ...typography().heading.h1,
    marginBottom: 24,
  },
  sectionForm: {},
  iconPwVisibility: {
    height: 16,
    width: 16,
    tintColor: color.NEUTRAL.DARK.LIGHTEST,
    marginLeft: 8,
  },
  seperator__form: {
    height: 16,
  },
  txtForgotPassword: {
    ...typography().action.m,
    color: color.PRIMARY.DARKEST,
    marginBottom: 24,
  },
  txtNotMember: {
    ...typography().body.s,
    color: color.NEUTRAL.DARK.LIGHT,
    marginTop: 16,
    textAlign: "center",
  },
  txtRegisterNow: {
    ...typography().action.m,
    color: color.PRIMARY.DARKEST,
  },
  seperator: {
    height: 0.5,
    backgroundColor: color.NEUTRAL.LIGHT.DARK,
    marginVertical: 24,
  },
  sectionSocialLogin: {
    justifyContent: "center",
    alignItems: "center",
  },
  rowSocialMedia: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 144,
    marginTop: 16,
  },
  imgSocialMedia: {
    width: 40,
    height: 40,
  },
});

Navigation.registerComponent("Login.LoginScreen", () => LoginScreen);
