import { increment, decrement } from "../redux/actions/counterActions";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const { counter } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default Counter;
