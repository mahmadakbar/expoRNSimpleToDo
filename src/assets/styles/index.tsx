import { Dimensions } from "react-native";

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("screen").height;
export const SHADOW = {
  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 4.5,
  },
  shadowOpacity: 0.17,
  shadowRadius: 3.05,
  elevation: 4,
};
