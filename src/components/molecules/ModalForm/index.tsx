import { View } from "react-native";
import React, { useState } from "react";
import Text from "@components/atoms/Text";
import styles from "./styles";
import InputText from "@components/atoms/InputText";
import Button from "@components/atoms/Button";
import { IForm } from "@interfaces/InterfaceForm";
import { generateUUID, upperCaseEachWord } from "@utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "@store/actions/actionTodo";
import useRedux from "@hooks/useRedux";
import { useModalContext } from "@utils/context/modalContext";

type Props = {
  typesTitle?: string;
  formFill?: IForm;
};

export default function ModalForm({
  typesTitle = "Add",
  formFill,
}: Readonly<Props>) {
  const dispatch = useDispatch();
  const { setModalOpen } = useModalContext();
  const { dataTodo } = useRedux() as { dataTodo: IForm[] };

  const [form, setForm] = useState<IForm>({
    id: formFill?.id ?? generateUUID(),
    title: formFill?.title ?? "",
    description: formFill?.description ?? "",
    isDone: formFill?.isDone ?? false,
    updateAt: new Date(),
  });

  const onSubmit = () => {
    //serch index by id
    const indexForm = dataTodo.findIndex((item) => item.id === formFill?.id);
    if (indexForm >= 0) {
      const formUpdate = [...dataTodo];
      formUpdate[indexForm] = form;
      dispatch(setTodo(formUpdate));
    } else {
      dispatch(setTodo([...dataTodo, form]));
    }

    setModalOpen(false);
  };

  const onSubmitDelete = () => {
    const indexForm = dataTodo.findIndex((item) => item.id === formFill?.id);
    if (indexForm >= 0) {
      const formUpdate = [...dataTodo];
      formUpdate.splice(indexForm, 1);
      dispatch(setTodo(formUpdate));
    }
    setModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text bold fonstSize={30}>
        {typesTitle} Task
      </Text>
      <InputText
        title="Title"
        value={form.title}
        maxLength={50}
        onChangeText={(e) => setForm({ ...form, title: e })}
        style={styles.form}
      />
      <InputText
        title="Description"
        style={styles.form}
        value={form.description}
        onChangeText={(e) => setForm({ ...form, description: e })}
        multiline
        numberOfLines={5}
        textAlignVertical="top"
      />

      <View style={styles.button}>
        {formFill?.id && (
          <Button
            title="Delete"
            bgColor="#c0392b"
            titleColor="#fff"
            onPress={onSubmitDelete}
          />
        )}
        <Button title="Submit" bgColor="#ffd533" onPress={onSubmit} />
      </View>
    </View>
  );
}
