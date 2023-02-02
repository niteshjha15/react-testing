import React, { useState } from "react";

function User({ userList}) {
  const [show, setShow] = useState(false);
  const [activeUser, setActiveUser] = useState("Nitesh");
  const [query, setQuery] = useState("");
  return (
    <div>
      <h1>Hello User</h1>
      {show ? (
        <ul>
          {userList?.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      ) : null}
      <button onClick={() => setShow(true)}>Click</button>
      <h2>{activeUser}</h2>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setActiveUser(query)}>Add User</button>
    </div>
  );
}

export default User;
