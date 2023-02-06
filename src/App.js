import logo from "./logo.svg";
import "./App.css";
import User from "./components/dummyComponents/user";
import { useState } from "react";
import { MuiMode } from "./components/mui/MuiMode";
import { AppProviders } from "./providers/AppProviders";
import Count from "./customFunc/count";
import Customers from "./mockApi/Customers";

function App() {
  const [users, setUsers] = useState(["Albert", "Tesla"]);
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <AppProviders>
      <div className='App'>
        {/* <User userList={users} setUsers={setUsers} /> */}
        {/* <MuiMode /> */}
        {/* <Count count={count} increment={increment} decrement={decrement} /> */}
        <Customers />
      </div>
    </AppProviders>
  );
}

export default App;
