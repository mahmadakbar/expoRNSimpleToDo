import React, { createContext, useContext } from "react";
import { View } from "react-native";

interface IModal {
  modalOpen: boolean;
  setModalOpen: (c: boolean) => void;
  content?: React.ReactNode;
  setContent?: (c: React.ReactNode) => void;
}

const modalContext = {
  modalOpen: false,
  setModalOpen: () => {},
  content: <View />,
  setContent: () => {},
};

const ModalContext = createContext<IModal>(modalContext);

export const ModalProvider = ModalContext.Provider;
export const useModalContext = () => useContext(ModalContext);
