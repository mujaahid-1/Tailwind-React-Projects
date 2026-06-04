import React, { useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-800">
      <Todo />
    </div>
  );
};

export default App;
