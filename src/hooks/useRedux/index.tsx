import { RootState } from "@store/reducers";
import { shallowEqual, useSelector } from "react-redux";

type ReduxList = {
  dataTodo: RootState;
};

export default function useRedux() {
  const dataTodo = useSelector<ReduxList>((state) => state.dataTodo.todo);

  return {
    dataTodo,
  };
}
