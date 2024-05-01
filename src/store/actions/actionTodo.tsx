import { IForm } from "@interfaces/InterfaceForm";

// ini akan dipakai untuk set data pada redux
export function setTodo(data: IForm[]) {
  return {
    type: "@APP/TODO", // id(type) harus sama dengan yang di pakai reducers
    payload: data, // payload yang digunakan untuk merubah value
  };
}
