import { IForm } from "@interfaces/InterfaceForm";

const initialState: { todo: IForm[] } = {
  todo: [],
};

const dataTodo = (
  state = initialState,
  action: { type: string; payload: IForm }
) => {
  switch (action.type) {
    case "@APP/TODO":
      return {
        ...state,
        todo: action.payload,
      };
  }
  return state;
};

export default dataTodo;
