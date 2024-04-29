import { Text as RNText } from "react-native";
import React from "react";

type Props = {
  fonstSize?: number;
  color?: string;
  children?: React.ReactNode;
  regular?: boolean;
  bold?: boolean;
  semiBold?: boolean;
  style?: any;
} & React.ComponentProps<typeof RNText>;

export default function Text({
  fonstSize = 16,
  color = "#160520",
  children,
  regular = true,
  bold = false,
  semiBold = false,
  style,
  ...props
}: Readonly<Props>) {
  return (
    <RNText
      {...props}
      style={[
        {
          fontSize: fonstSize,
          color: color,
        },
        regular && { fontFamily: "regular" },
        bold && { fontFamily: "bold" },
        semiBold && { fontFamily: "semiBold" },
        style,
      ]}
    >
      {children}
    </RNText>
  );
}
