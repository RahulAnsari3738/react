import axios from "axios";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

var golbal;
function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const[getid,setGetID]=useState({})
  const[id,setID]=useState("")
  let url = "https://localhost:7146/Restaurant/get-all";

  let getData = () => {
    axios
      .get(url)
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

  // const [restaurantId, setRestaurantId] = useState({
  //   id1 : restaurant.
  // });

  let onClickEvent=(id)=>{
    setID(id)
    axios.get("https://localhost:7146/Restaurant/get/" + id).then((res) => {
      setGetID(res.data);
      console.log(res.data);
    });
    

  }

  let myStyle={
 width:"400px"
  }


  function handleOnChange(e) {
    const newData = { ...getid };
    newData[e.target.id] = e.target.value;
    setGetID(newData);
   
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(getid);
  //   axios
     
  // }

  let updateres=()=>{
 axios
   .put("https://localhost:7146/Restaurant/update/" + id, {
     restaurantName: getid.restaurantName,
     icon: getid.icon,
     phone: getid.phone,
     email: getid.email,
     state: getid.state,
     city: getid.city,
     landmark: getid.landmark,
     street1: getid.street1street1,
     street1street1: restaurants.street2,
   })
   .then((res) => {
     console.log(res.data);
   });
  }
  return (
    <div>
      <center>
        <h1>Restaurant_list</h1>
        console.log(restaurants);
        <table className="table">
          <thead>
            <tr>
              <th>restaurantName</th>
              <th>icone</th>
              <th>email</th>
              <th>state</th>
              <th>city</th>
              <th>landmark</th>
              <th>street1</th>
              <th>street2</th>
              <th>Operatin</th>
            </tr>
          </thead>

          <tbody>
            {restaurants.map((resData) => (
              <tr>
                <td>{resData.restaurantName}</td>
                <td>{resData.icone}</td>
                <td>{resData.email}</td>
                <td>{resData.state}</td>
                <td>{resData.city}</td>
                <td>{resData.landmark}</td>
                <td>{resData.street1}</td>
                <td>{resData.street2}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => onClickEvent(resData.id)}
                    className="btn btn-primary my-1"
                  >
                    {/* <Link to={`/update/${resData.id}`}> */}
                    edit
                    {/* </Link> */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form className="form-inp my-4">
        
          <input
            className="inp-primary my-1"
            value={getid.restaurantName}
            id="restaurantName"
            placeholder="Restaurant Name"
            type="text"
            style={myStyle}
            onChange={(e) => handleOnChange(e)}
          ></input>
          <br />{" "}
          <input
            className="inp-primary my-1"
            value={getid.icone}
            id="icone"
            onChange={(e) => handleOnChange(e)}
            placeholder="icon"
            type="text"
            style={myStyle}
          ></input>
          <br />{" "}
          <input
            className="inp-primary my-1"
            value={getid.email}
            id="email"
            placeholder="Email"
            type="text"
            style={myStyle}
            onChange={(e) => handleOnChange(e)}
          ></input>
          <br />{" "}
          <input
            className="inp-primary my-1"
            value={getid.state}
            id="state"
            placeholder="State"
            type="text"
            style={myStyle}
            onChange={(e) => handleOnChange(e)}
          ></input>
          <br />{" "}
          <input
            className="inp-primary my-1"
            value={getid.city}
            id="city"
            placeholder="City"
            type="text"
            style={myStyle}
            onChange={(e) => handleOnChange(e)}
          ></input>
          <br />{" "}
          <input
            className="inp-primary my-1"
            value={getid.landmark}
            id="landmark"
            placeholder="landmark"
            type="text"
            style={myStyle}
            onChange={(e) => handleOnChange(e)}
          ></input>
          <br />{" "}
          <input
            className="inp-primary my-1"
            value={getid.street1}
            id="street1"
            placeholder="street1"
            type="text"
            style={myStyle}
            onChange={(e) => handleOnChange(e)}
          ></input>
          <br />{" "}
          <input
            className="inp-primary my-1"
            value={getid.street2}
            id="street2"
            placeholder="street2"
            type="text"
            style={myStyle}
            onChange={(e) => handleOnChange(e)}
          ></input>
          <br />{" "}
          <button type="submit" className="btn btn-dark my-1" onClick={updateres} >
            Update
          </button>{" "}
        </form>
      </center>
    </div>
  );
}

export default RestaurantList;
