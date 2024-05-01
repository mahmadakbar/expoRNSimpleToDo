import { View, ScrollView } from "react-native";
import React from "react";
import { IChildern } from "@interfaces/InterfaceGlobal";
import { styles } from "./styles";

type IProps = {
  havePadding?: boolean;
} & IChildern;

export default function Content({
  children,
  havePadding = false,
}: Readonly<IProps>) {
  return (
    <View style={[styles.container, { padding: havePadding ? 20 : 0 }]}>
      {children}
    </View>
  );
}

export function ContentScroll({
  children,
  ...props
}: Readonly<IProps & React.ComponentProps<typeof ScrollView>>) {
  return (
    <ScrollView {...props} style={styles.container}>
      {children}
    </ScrollView>
  );
}
