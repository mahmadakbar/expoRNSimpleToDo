import { View, TouchableNativeFeedback } from "react-native";
import React from "react";
import { SHADOW } from "@assets/styles";

type Props = {
  children?: React.ReactNode;
  height?: number;
  bgColor?: string;
  styleCard?: any;
  style?: any;
  pading?: number;
  disabled?: boolean;
} & React.ComponentProps<typeof TouchableNativeFeedback>;

export default function Card({
  children,
  height,
  bgColor,
  styleCard,
  style,
  pading,
  disabled = false,
  ...props
}: Readonly<Props>) {
  return (
    <View
      style={[
        {
          flex: 1,
          overflow: "hidden",
          borderRadius: 10,
          height: height ?? 100,
        },
        SHADOW,
        style,
      ]}
    >
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#BDBDBD", true, 200)}
        {...props}
      >
        <View
          pointerEvents={"auto"}
          style={[
            {
              flex: 1,
              backgroundColor: disabled ? "#E0E0E0" : bgColor ?? "#fff",
            },
            pading && { padding: pading },
            styleCard,
          ]}
        >
          {children}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
