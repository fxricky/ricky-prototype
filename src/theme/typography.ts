const FONT_FAMILY_MAPPING = {
  regular: "NotoSans-Regular",
  bold: "NotoSans-Bold",
  black: "NotoSans-Black",
  medium: "NotoSans-Medium",
  semiBold: "NotoSans-SemiBold",
  extraBold: "NotoSans-ExtraBold",
};

type FontFamily = keyof typeof FONT_FAMILY_MAPPING;
function font(fontSize: number, fontFamily: FontFamily = "regular") {
  return {
    fontSize,
    fontFamily: FONT_FAMILY_MAPPING[fontFamily],
  };
}

export const typography = () => ({
  heading: {
    h1: font(24, "black"),
    h2: font(18, "black"),
    h3: font(16, "black"),
    h4: font(14, "extraBold"),
    h5: font(12, "bold"),
  },
  body: {
    xl: font(18, "regular"),
    l: font(16, "regular"),
    m: font(14, "regular"),
    s: font(12, "regular"),
    xs: font(10, "medium"),
  },
  action: {
    l: font(14, "semiBold"),
    m: font(12, "semiBold"),
    s: font(10, "semiBold"),
  },
  caption: {
    m: font(10, "semiBold"),
  },
});
