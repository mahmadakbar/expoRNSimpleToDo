import {
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ICONS from "@assets/icons";
import styles from "./styles";

type Props = {
  search: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
} & React.ComponentProps<typeof TextInput>;

export default function Search({ search, setSearch }: Readonly<Props>) {
  return (
    <View style={styles.container}>
      <Image source={ICONS.search} style={{ width: 30, height: 30 }} />
      <TextInput
        placeholder="Search Todo"
        value={search}
        onChangeText={setSearch}
        style={{ flex: 1 }}
      />
      {search !== "" && (
        <TouchableOpacity onPress={() => setSearch && setSearch("")}>
          <Image source={ICONS.close} style={{ width: 18, height: 18 }} />
        </TouchableOpacity>
      )}
    </View>
  );
}
