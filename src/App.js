import React from "react";
import { Routes, Route } from "react-router-dom";
import LearnHoc from "./pages/LearnHoc";
import Home from "./pages/Home";

function App() {
  const Button = (props) => <button style={props.style}>Click me</button>;
  const Text = (props) => <p style={props.style}>Testing me</p>;
  const StyleButton = LearnHoc(Button);
  const StyleText = LearnHoc(Text);

  return (
    <div>
      <StyleButton />
      <Button />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
