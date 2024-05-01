import { View } from "react-native";
import React from "react";
import ButtonFilter from "@components/atoms/ButtonFilter";

type Props = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function FilterContent({ filter, setFilter }: Readonly<Props>) {
  return (
    <View
      style={{
        marginVertical: 10,
        marginLeft: 20,
        flexDirection: "row",
        gap: 10,
      }}
    >
      <ButtonFilter
        title="All"
        bgColor={filter === "All" ? "#18DCFF" : "#FFF"}
        onPress={() => setFilter("All")}
      />
      <View style={{ borderLeftWidth: 2, borderColor: "#9f9f9f" }} />
      <ButtonFilter
        title="Compleate"
        bgColor={filter === "Compleate" ? "#18DCFF" : "#FFF"}
        onPress={() => setFilter("Compleate")}
      />
      <ButtonFilter
        title="On Going"
        bgColor={filter === "On Going" ? "#18DCFF" : "#FFF"}
        onPress={() => setFilter("On Going")}
      />
    </View>
  );
}
