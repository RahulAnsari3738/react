import axios from "axios";
import React, { useState } from "react";

function GetMenuItemsFromResturant() {
  //   let id = "";
  let baseURL = "https://localhost:7146/Restaurant/avalibale-menuItem?ID=";

  let menuItemUrl = "";

  const [data, setData] = useState([]);

  const [resID, setRestID] = useState("");

  let url = baseURL + resID;
  //   console.log("urldsadasdasd");
  console.log(url);

  let onChangeHandler = (event) => {
    let iddata = event.target.value;
    // console.log(iddata);
    setRestID(iddata);
  };

  let onClickHandler = () => {
    axios.get(url).then((res) => {
      // console.log(res);
      setData(res.data.data);
      //   console.log(res.data.data);
    });
  };

  return (
    <>
      <div className="d-flex my-3">
        <span className="input-group-text w-25">Enter RestaurantID</span>
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
      <br></br>

      {/* <p>firstName{data.firstName}</p> */}

      {data.map((info) => (
        //   <h1>itemName</h1>>

        <div className="display-item mx-2" style={{ display: "block" }}>
          {info.itemName}
        </div>
      ))}
    </>
  );
}

export default GetMenuItemsFromResturant;
