import { TouchableOpacity } from "react-native";
import React from "react";
import Text from "../Text";

type Props = {
  title?: string;
  disabled?: boolean;
  bgColor?: string;
  titleColor?: string;
  styles?: any;
} & React.ComponentProps<typeof TouchableOpacity>;

export default function Button({
  title = "Button",
  disabled = false,
  bgColor = "#18DCFF",
  titleColor,
  styles,
  ...props
}: Readonly<Props>) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        {
          flex: 1,
          backgroundColor: bgColor,
          padding: 12,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
          opacity: disabled ? 0.5 : 1,
        },
        styles,
      ]}
      {...props}
    >
      <Text bold color={titleColor}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
