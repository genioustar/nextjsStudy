import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Potato() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <h1> Hellow {counter}</h1>
      </div>
      <button onClick={() => setCounter((prev) => prev + 1)}> + </button>
    </>
  );
}
