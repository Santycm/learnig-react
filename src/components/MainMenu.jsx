import { FormComponent } from "./FormComponent"
import { CounterComponent } from "./CounterComponent";
import { useState } from "react";

export const MainMenu = () => {
    const [component, setComponent] = useState(<div></div>);

    const showForm = ()=>{
        setComponent(<FormComponent/>);
    }

    const showCounter = () => {
      setComponent(<CounterComponent />);
    };

  return (
    <>
      <button onClick={showCounter}>COUNTER</button>
      <button onClick={showForm}>FORM</button>
      <div>{component}</div>
    </>
  );
}
