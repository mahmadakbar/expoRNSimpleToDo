import { View, TextInput } from "react-native";
import React from "react";
import Text from "../Text";
import styles from "./styles";

type Props = {
  title?: string;
  rightIcon?: React.ReactNode;
  error?: string | null;
  style?: React.CSSProperties;
} & React.ComponentProps<typeof TextInput>;

export default function InputText({
  title = "",
  rightIcon = <View />,
  error = "",
  style,
  ...props
}: Readonly<Props>) {
  return (
    <View style={style}>
      <Text semiBold>{title}</Text>
      <View
        style={[styles.container, { borderColor: error ? "#EA85" : "#9f9f9f" }]}
      >
        <TextInput style={styles.input} {...props} />
        {rightIcon && <View>{rightIcon}</View>}
      </View>
      {/* Error */}
      {error && (
        <Text color="#EA85" style={{ textAlign: "right" }}>
          {error}
        </Text>
      )}
    </View>
  );
}
