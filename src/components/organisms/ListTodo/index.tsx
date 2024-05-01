import { View, FlatList } from "react-native";
import React, { useMemo, useState } from "react";
import { HEIGHT } from "@assets/styles";
import CardTodo from "@components/molecules/CardTodo";
import useRedux from "@hooks/useRedux";
import { IForm } from "@interfaces/InterfaceForm";
import { styles } from "./styles";
import FilterContent from "@components/molecules/FilterContent";
import Search from "@components/atoms/Search";
import Empty from "@components/atoms/Empty/indes";

export default function ListTodo() {
  const { dataTodo } = useRedux() as { dataTodo: IForm[] };

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const dataFilter = useMemo(() => {
    const applyFilter =
      search === ""
        ? dataTodo
        : dataTodo.filter((item) => item.title.includes(search));
    if (filter === "All") {
      return applyFilter;
    } else if (filter === "Compleate") {
      return applyFilter.filter((item) => item.isDone);
    } else if (filter === "On Going") {
      return applyFilter.filter((item) => !item.isDone);
    }
  }, [dataTodo, filter, search]);

  return (
    <View style={{ height: HEIGHT * 0.77 }}>
      <Search search={search} setSearch={setSearch} />
      <FilterContent filter={filter} setFilter={setFilter} />

      <FlatList
        data={dataFilter}
        ListEmptyComponent={() => <Empty />}
        renderItem={({ item }) => <CardTodo {...item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
