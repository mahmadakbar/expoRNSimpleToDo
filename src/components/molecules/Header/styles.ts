import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === "ios" ? 50 : 25,
    height: Platform.OS === "ios" ? 100 : 70,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  profile: {
    borderColor: "#14dcff",
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 35,
    height: 35,
    backgroundColor: "#14dcff",
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
