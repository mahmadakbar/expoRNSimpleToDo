import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import Card from "@components/atoms/Card";
import Text from "@components/atoms/Text";
import ICONS from "@assets/icons";
import { IForm } from "@interfaces/InterfaceForm";
import moment from "moment";
import { useModalContext } from "@utils/context/modalContext";
import ModalForm from "../ModalForm";
import { upperCaseEachWord } from "@utils/helper";
import { useDispatch } from "react-redux";
import useRedux from "@hooks/useRedux";
import { setTodo } from "@store/actions/actionTodo";

type IProps = IForm & React.ComponentProps<typeof Card>;

export default function CardTodo({
  id,
  title,
  description,
  isDone,
  updateAt,
  ...props
}: IProps) {
  const dispatch = useDispatch();
  const { setModalOpen, setContent } = useModalContext();
  const { dataTodo } = useRedux() as { dataTodo: IForm[] };
  const forms = {
    id: id,
    title: title,
    description: description,
    isDone: isDone,
    updateAt: updateAt,
  };

  const onModalOpen = () => {
    setModalOpen(true);
    setContent &&
      setContent(<ModalForm typesTitle={"Edit"} formFill={forms} />);
  };

  const onCompleate = () => {
    const indexForm = dataTodo.findIndex((item) => item.id === id);
    if (indexForm >= 0) {
      const formUpdate = [...dataTodo];
      formUpdate[indexForm] = {
        ...forms,
        isDone: !isDone,
      };
      dispatch(setTodo(formUpdate));
    }
  };
  return (
    <Card
      pading={10}
      height={160}
      disabled={isDone}
      onPress={onModalOpen}
      {...props}
    >
      <Text semiBold fonstSize={18} numberOfLines={1}>
        {upperCaseEachWord(title)}
      </Text>
      <Text
        fonstSize={12}
        color="#939393"
        style={{ marginTop: 6 }}
        numberOfLines={3}
      >
        {description}
      </Text>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginBottom: 8,
          }}
        >
          <Text fonstSize={12} color="#939393">
            {moment(updateAt).format("DD MMM YYYY, HH:mm")}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Image
            source={ICONS.edit}
            style={{ width: 18, height: 18, margin: 5 }}
          />
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: isDone ? "#c0392b" : "#2ecc71",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 99,
              alignItems: "center",
            }}
            onPress={onCompleate}
          >
            <Image
              source={isDone ? ICONS.cancel : ICONS.done}
              style={{ width: 18, height: 18 }}
            />
            <Text color="white" fonstSize={12} style={{ marginLeft: 5 }}>
              {isDone ? "Cancel" : "Done"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
}
