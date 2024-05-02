import { Image, View, TouchableOpacity, Platform } from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import styles from "./styles";
import { ModalProvider, useModalContext } from "@utils/context/modalContext";
import { IChildern } from "@interfaces/InterfaceGlobal";
import ICONS from "@assets/icons";

export default function Modal({ children }: Readonly<IChildern>) {
  const modalContent = useModalContext();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState(modalContent.content);

  const snapPoints = useMemo(() => {
    if (Platform.OS === "ios") {
      return ["25%", "50%", "80%"];
    } else {
      return ["25%", "50%", "70%"];
    }
  }, []);

  useEffect(() => {
    if (modalOpen) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [modalOpen]);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    if (index < 0) {
      setModalOpen(false);
      setContent(<View />);
    }
  }, []);

  return (
    <ModalProvider value={{ modalOpen, setModalOpen, content, setContent }}>
      <View style={styles.container}>{children}</View>
      <BottomSheet
        index={-1}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose
        backdropComponent={() => <Backdrop isOpen={modalOpen} />}
      >
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModalOpen(false)}
        >
          <Image
            source={ICONS.close}
            width={24}
            height={24}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <BottomSheetScrollView style={styles.contentContainer}>
          {content}
        </BottomSheetScrollView>
      </BottomSheet>
    </ModalProvider>
  );
}

const Backdrop = ({ isOpen }: { isOpen: boolean }) => (
  <View style={isOpen ? styles.backdrop : styles.noBackdrop} />
);
