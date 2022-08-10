import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantDelete from "./RestaurantDelete";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

function UpdateRestaurant(props) {
  // getting all restaurants data
  const [restaurants, setRestaurants] = useState([]);
  const[render,setRender]=useState(false)

  const [restId, setRestId] = useState("");

  const getUrl = "https://localhost:7146/Restaurant/get-all";

  let getData = () => {
    axios
      .get(getUrl)
      .then((response) => {
        setRestaurants(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const myStyle = {
    width: "400px",
     color:'white'
  };

  
  const [restaurantById, setRestaurantById] = useState({});

  function handleUpdate(id) {
    let restUrl = "https://localhost:7146/Restaurant/get/";
    let restFinalUrl = restUrl + id;
   setRender(true)
    axios.get(restFinalUrl).then((res) => {
      setRestaurantById(res.data);
      console.log(res.data);
    });
    
    setRestId(id);
    
    // console.log("state", restaurantById);
  }

  function handleOnChange(e) {
    let newData = { ...restaurantById };
    newData[e.target.id] = e.target.value;
    setRestaurantById(newData);
  }

  /////////////////////////////
  function updateRestaurant() {
    let putUrl = "https://localhost:7146/Restaurant/update?ID=" + restId;
 setRestaurantById("");
    axios
      .put(putUrl, {
        restaurantName: restaurantById.restaurantName,
        icon: restaurantById.icon,
        phone: restaurantById.phone,
        email: restaurantById.email,
        state: restaurantById.state,
        city: restaurantById.city,
        landmark: restaurantById.landmark,
        street1: restaurantById.street1,
        street2: restaurantById.street2,
      })
      .then((res) => {
        console.log(res.data);
      });

     
  }

  /////////////////////////////////////

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            
            <th scope="col" style={{ texttransform: "uppercase"}}>Restaurant Name</th>
            <th scope="col">icon</th>
            <th scope="col">Phone</th>
            <th scope="col">E-Mail</th>
            <th scope="col">State</th>
            <th scope="col">City</th>
            <th scope="col">landmark</th>
            <th scope="col">Street1</th>
            <th scope="col">Street1</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>

        {restaurants.map((restData) => (
          <tbody>
            <tr>
              <td style={{ color: "white" }}>{restData.restaurantName}</td>
              <td style={{ color: "white" }}>{restData.icon}</td>
              <td >{restData.phone}</td>
              <td style={{ color: "white" }}>{restData.email}</td>
              <td style={{ color: "white" }}>{restData.state}</td>
              <td style={{ color: "white" }}>{restData.city}</td>
              <td style={{ color: "white" }}>{restData.landmark}</td>
              <td style={{ color: "white" }}>{restData.street1}</td>
              <td style={{ color: "white" }}>{restData.street2}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={() => handleUpdate(restData.id, true)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleUpdate(restData.id)}
                >
                  <Link to="/restaurantdelete"> Delete</Link>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <div>
        <center>
          {render ? (
            <form className="form-inp my-4">
              <div>
                <input
                  className="inp-primary my-1"
                  value={restaurantById.restaurantName}
                  onChange={(e) => handleOnChange(e)}
                  id="restaurantName"
                  placeholder="Restaurant Name"
                  type="text"
                  style={myStyle}
                ></input>
              </div>
              <div>
                <input
                  className="inp-primary my-1"
                  value={restaurantById.icon}
                  onChange={(e) => handleOnChange(e)}
                  id="icon"
                  placeholder="icon"
                  type="text"
                  style={myStyle}
                ></input>
              </div>

              <div>
                <input
                  className="inp-primary my-1"
                  value={restaurantById.phone}
                  onChange={(e) => handleOnChange(e)}
                  id="phone"
                  placeholder="phone"
                  type="text"
                  style={myStyle}
                ></input>
              </div>
              <div>
                <input
                  className="inp-primary my-1"
                  value={restaurantById.email}
                  onChange={(e) => handleOnChange(e)}
                  id="email"
                  placeholder="email"
                  type="text"
                  style={myStyle}
                ></input>
              </div>
              <div>
                <input
                  className="inp-primary my-1"
                  value={restaurantById.state}
                  onChange={(e) => handleOnChange(e)}
                  id="state"
                  placeholder="state"
                  type="text"
                  style={myStyle}
                ></input>
              </div>
              <div>
                <input
                  className="inp-primary my-1"
                  value={restaurantById.city}
                  onChange={(e) => handleOnChange(e)}
                  id="city"
                  placeholder="city"
                  type="text"
                  style={myStyle}
                ></input>
              </div>
              <div>
                <input
                  className="inp-primary my-1"
                  value={restaurantById.landmark}
                  onChange={(e) => handleOnChange(e)}
                  id="landmark"
                  placeholder="landmark"
                  type="text"
                  style={myStyle}
                ></input>
              </div>
              <div>
                <input
                  className="inp-primary my-1"
                  value={restaurantById.street1}
                  onChange={(e) => handleOnChange(e)}
                  id="street1"
                  placeholder="street1"
                  type="text"
                  style={myStyle}
                ></input>
              </div>
              <div>
                <input
                  className="inp-primary my-1"
                  value={restaurantById.street2}
                  onChange={(e) => handleOnChange(e)}
                  id="street2"
                  placeholder="street2"
                  type="text"
                  style={myStyle}
                ></input>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-dark my-1"
                  onClick={updateRestaurant}
                >
                  Update
                </button>
              </div>
            </form>
          ) : null}
        </center>
      </div>
    </div>
  );
}

export default UpdateRestaurant;
