import React from "react";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";
import styles from "./styles";

type Props = {
  trigger: React.ReactNode;
  optionMenus: React.ReactNode;
};

export default function MenuPop({ trigger, optionMenus }: Props) {
  return (
    <MenuProvider style={styles.container}>
      <Menu plaement="bottom" style={styles.container}>
        <MenuTrigger>{trigger}</MenuTrigger>
        <MenuOptions customStyles={{}}>{optionMenus}</MenuOptions>
      </Menu>
    </MenuProvider>
  );
}
