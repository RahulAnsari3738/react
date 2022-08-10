import axios from 'axios';
import React, { useState } from 'react'

function GetCustomerInfoById() {
  //   let id = "";
  let baseURL = "https://localhost:7146/Customer/get/";

  const [data, setData] = useState({});

  const [custID, setCustID] = useState("");

  let url = baseURL + custID;

  let onChangeHandler = (event) => {
    let iddata = event.target.value;
    console.log(iddata);
    setCustID(iddata);
  };

  let onClickHandler = () => {
    axios.get(url).then((res) => {
      // console.log(res);
      setData(res.data.data);
      console.log(res.data.data);
    });
  };

  return (
    <>
      <div className="d-flex my-3">
        <span className="input-group-text w-25">Enter customerId</span>{" "}
        <textarea
          className="form-control w-50"
          aria-label="With textarea"
          onChange={onChangeHandler}
        ></textarea>
      </div>
      <button
        type="button"
        className=" btn btn-outline-primary mb-4 "
        onClick={onClickHandler}
      >
        Get Data
      </button>

      {/* <p>firstName{data.firstName}</p> */}

      <div className="card my-3 mx-2">
        <div className="card-body">
          <div>
            {/* ID:{data.id} <br></br> */}
            firstName:{data.firstName} <br></br>
            lastName:{data.lastName} <br></br>
            {/* icone:{data.icone} <br></br> */}
            email:{data.email} <br></br>
            mobile:{data.mobile} <br></br>
            {/* password:{data.password} <br></br> */}
            {/* confirmPassword:{data.confirmPassword} <br></br> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default GetCustomerInfoById;