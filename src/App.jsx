import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Carousel />
    </>
  );
}

export default App;
