import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@interfaces/IntervaceNavigaion";

import HederMain from "@components/molecules/HeaderMain";
import Content from "@components/organisms/Content";
import ListTodo from "@components/organisms/ListTodo";

type Props = NativeStackScreenProps<RootStackParamList, "Main">;

export default function Main({ navigation }: Readonly<Props>) {
  return (
    <Content>
      <HederMain />

      <ListTodo />
    </Content>
  );
}
