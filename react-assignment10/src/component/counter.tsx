import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { increment, decrement } from "../redux/counterSlice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h4> Count : {count} </h4>
      <button onClick={() => dispatch(increment())}> Increment </button>
      <button onClick={() => dispatch(decrement())}> Decrement </button>
    </div>
  );
};
