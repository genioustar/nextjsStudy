import { useState } from "react";
import Seo from "../components/Seo";

export default function Potato() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Seo title={"About"} />
      <h1>About</h1>
    </div>
  );
}
