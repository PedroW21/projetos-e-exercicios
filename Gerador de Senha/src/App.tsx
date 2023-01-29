import { PasswordDisplay } from "./components/PasswordDisplay";
import { Title } from "./components/Title";
import { Table } from "./components/Table";
import  PasswordContext from "./core/PasswordContext";
import { useState } from "react";

const App = () => {

  const [password, setPassword] = useState('');

  return (
    <div
      className={`
      App 
      h-screen
      flex
      flex-col
      justify-center
      items-center
      bg-backgroundColor 
      text-gray
      `}
    >
      <Title />
      <PasswordContext.Provider value={{password, setPassword}}>
        <PasswordDisplay inputValue={password}/>
        <Table />
      </PasswordContext.Provider>
    </div>
  );
};

export default App;
