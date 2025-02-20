import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState("ALi");

  const changeUser = () => {
    setUser("Ahmad");
  };

  return (
    <div>
      <h1>Hello {user}</h1>
      <button onClick={changeUser}>Change User</button>
    </div>
  );
};

export default App;
