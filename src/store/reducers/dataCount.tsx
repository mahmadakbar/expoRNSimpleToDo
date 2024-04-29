const initialState = {
  increment: 0,
};

const dataCount = (
  state = initialState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case "@APP/COUNT":
      return {
        ...state,
        increment: action.payload,
      };
  }
  return state;
};

export default dataCount;
