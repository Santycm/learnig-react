import { useCounter } from "../hooks/useCounter"

export const CounterComponent = () => {

    const {counter, increment, decrement, reset} = useCounter(0);

  return (
    <>
      <h1>COUNTER: {counter}</h1>
      <div>
        <button onClick={() => increment()}>+1</button>
        <button onClick={() => reset()}>RESET</button>
        <button onClick={() => decrement()}>-1</button>
      </div>
    </>
  );
}
