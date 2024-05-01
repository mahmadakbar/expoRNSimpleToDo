import uuid from "react-native-uuid";

export const generateUUID = () => uuid.v4() as string;

// upercase each word
export const upperCaseEachWord = (str: string) => {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
