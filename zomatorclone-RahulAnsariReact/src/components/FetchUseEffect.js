import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchUseEffect = () => {
  let id = "";
  let url = "https://localhost:7146/Customer/get/";

  const [user, setUser] = useState({});
  const [customerId, setcustomerId] = useState(
    "e71d75d3-a659-43c0-bc4c-63d6ccb887d2"
  );
  useEffect(() => {
    getData();
    console.log("sfd");
  },{});

  let getData = () => {
    let finalUrl = url + customerId;
    axios.get(finalUrl).then((json) => setUser(json.data.data));
  };

  const renderTable = () => {
    console.log("login");
    console.log(user);
    if (user != null) {
      return (
        <tr>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
        </tr>
      );
    }
  };

  let getUserbyId = () => {
    setcustomerId(id);
  };
  return (
    <div>
      <h1 id="title">API Table</h1>
      <input value={id} />
      <button onClick={getUserbyId}></button>
      <table id="users">
        <thead>
          <tr>
            <th>firstName</th>
            <th>Last Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
};

export default FetchUseEffect;
