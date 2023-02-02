import logo from "./logo.svg";
import "./App.css";
import User from "./components/dummyComponents/user";
import { useState } from "react";
import { MuiMode } from "./components/mui/MuiMode";
import { AppProviders } from "./providers/AppProviders";

function App() {
  const [users, setUsers] = useState(["Albert", "Tesla"]);
  return (
    <AppProviders>
      <div className='App'>
        {/* <User userList={users} setUsers={setUsers} /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
