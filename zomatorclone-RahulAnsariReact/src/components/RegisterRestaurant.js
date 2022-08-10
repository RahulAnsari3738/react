import React, { useState } from "react";
import axios from "axios";
function RegisterRestaurant() {
  const [data, setData] = useState("");
  const [restaurantName, setrestaurantName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const[icon,seticon]=useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [landmark, setlandmark] = useState("");
  const [street1, setstreet1] = useState("");
  const [street2, setstreet2] = useState("");

  let ChangeHandlerRestaurantName = (e) => {
    let Restaurant_Name = e.target.value;
    setrestaurantName(Restaurant_Name);
  };

  let ChangeHandlerPhone = (e) => {
    let Phone = e.target.value;
    setphone(Phone);
  };
    let ChangeHandlerIcon = (e) => {
      let Icon = e.target.value;
      setphone(Icon);
    };

  let ChangeHandlerEmail = (e) => {
    let Email = e.target.value;
    setemail(Email);
  };

  let ChangeHandlerState = (e) => {
    let State = e.target.value;
    setstate(State);
  };

  let ChangeHandlerCity = (e) => {
    let City = e.target.value;
    setcity(City);
  };

  let ChangeHandlerLandmark = (e) => {
    let Landmark = e.target.value;
    setlandmark(Landmark);
  };

  let ChangeHandlerStreer1 = (e) => {
    let Streer1 = e.target.value;
    setstreet1(Streer1);
  };

  let ChangeHandlerstreet2 = (e) => {
    let Street2 = e.target.value;
    setstreet2(Street2);
  };

  let submitRes = async (e) => {
    e.preventDefault();
    const restData = {
      restaurantName: restaurantName,
      phone: phone,
      icon:icon,
      email: email,
      state: state,
      city: city,
      landmark: landmark,
      street1: street1,
      street2: street2,
    };

    console.log(restData)

    // console.log(restData);
    //       let newFormet = JSON.stringify(restData);
    //       console.log(newFormet);

    axios
      .post("https://localhost:7146/Restaurant/create", restData, {

      headers: {

          'Content-Type': 'application/json'}})
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <>
      <center>
        <h1>RegisterRestaurant </h1>
        <form onSubmit={submitRes}>
          <input
            type="text"
            placeholder="restaurantName"
            style={{ textAlign: "center", borderRadius: "4px " }}
            onChange={ChangeHandlerRestaurantName}
          ></input>
          <br></br>
          {/* <input type="text" placeholder="icone"></input>
        <br></br> */}
          <input
            type="text"
            placeholder="phone"
            style={{ textAlign: "center", borderRadius: "4px " }}
            onChange={ChangeHandlerPhone}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="icon"
            style={{ textAlign: "center", borderRadius: "4px " }}
            onChange={ChangeHandlerIcon}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="email"
            style={{ textAlign: "center", borderRadius: "4px " }}
            onChange={ChangeHandlerEmail}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="state"
            style={{ textAlign: "center", borderRadius: "4px " }}
            onChange={ChangeHandlerState}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="city"
            style={{ textAlign: "center", borderRadius: "4px " }}
            onChange={ChangeHandlerCity}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="landmark"
            style={{ textAlign: "center", borderRadius: "4px " }}
            onChange={ChangeHandlerLandmark}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="street1"
            style={{ textAlign: "center", borderRadius: "4px " }}
            onChange={ChangeHandlerStreer1}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="street2"
            style={{ textAlign: "center", borderRadius: "4px " }}
            onChange={ChangeHandlerstreet2}
          ></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </center>
    </>
  );
}

export default RegisterRestaurant;
