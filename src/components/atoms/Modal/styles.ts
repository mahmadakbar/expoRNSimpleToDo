import { HEIGHT, WIDTH } from "@assets/styles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    zIndex: 10000000000,
  },
  backdrop: {
    flex: 1,
    position: "absolute",
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  noBackdrop: {
    flex: 1,
  },
  closeButton: {
    alignSelf: "flex-end",
    margin: 10,
    borderColor: "red",
    height: 24,
  },
});

export default styles;
