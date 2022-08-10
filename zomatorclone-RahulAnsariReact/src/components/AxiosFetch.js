import React, { useState } from "react";
import axios from "axios";

function AxiosFetch() {
  const [user, setUser] = useState([]);
  // console.log(user.firstName);
  let getData = () => {
    axios
      .get("https://localhost:7146/Customer/get-all")
      .then((res) => {
        // console.log(res.data.data);
        setUser(res.data.data);

        // console.log(user.firstName);
        // console.log(res?.data?.data.confirmPassword);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div>
        {user.map((info) => {
          console.log(info);
          <div>
            <p>{info.id}</p>
          </div>;
        })}
      </div>

      <div>
        <button onClick={getData}>Click</button>
      </div>
    </>
  );
}

export default AxiosFetch;
