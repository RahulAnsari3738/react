import React, { useState } from "react";
import axios from "axios";

function AddRestaurant() {
  const [restaurants, setRestaurants] = useState({
    restaurantName: "",
    icon: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    landmark: "",
    street1: "",
    street2:"",
  });



  const url = "https://localhost:7146/Restaurant/create";

  function handleOnChange(e) {
    const newData = { ...restaurants };
    newData[e.target.id] = e.target.value;
    setRestaurants(newData);
    console.log(newData);
  }

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(restaurants);
  // };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(url, {
        restaurantName: restaurants.restaurantName,
        icon:restaurants.icon,
        phone: restaurants.phone,
        email: restaurants.email,
        state: restaurants.state,
        city: restaurants.city,
        landmark: restaurants.landmark,
        street1: restaurants.street1,
        street2: restaurants.street2,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <center>

    <div>
      <form
        className="restaurant-form my-3 mx-3"
        onSubmit={(event) => handleSubmit(event)}
      >
        <input
          className="inp-primary mx-5"
          type="Text"
          id="restaurantName"
          value={restaurants.restaurantName}
          onChange={(e) => handleOnChange(e)}
          placeholder="Restaurant Name"
        />

        <input
          className="inp-primary mx-5"
          type="Text"
          id="icon"
          value={restaurants.icon}
          onChange={(e) => handleOnChange(e)}
          placeholder="icon"
        />
        <input
          className="inp-primary mx-5"
          type="Text"
          id="phone"
          value={restaurants.phone}
          onChange={(e) => handleOnChange(e)}
          placeholder="Restaurant mobile Number"
          />
        <input
          className="inp-primary mx-5"
          type="Text"
          id="email"
          value={restaurants.email}
          onChange={(e) => handleOnChange(e)}
          placeholder="Restaurant E-mail"
          />
        <input
          className="inp-primary mx-5"
          type="Text"
          id="state"
          value={restaurants.state}
          onChange={(e) => handleOnChange(e)}
          placeholder="State"
        />
        <input
          className="inp-primary mx-5"
          type="Text"
          id="city"
          value={restaurants.city}
          onChange={(e) => handleOnChange(e)}
          placeholder="city"
        />

        <input
          className="inp-primary mx-5"
          type="Text"
          id="landmark"
          value={restaurants.landmark}
          onChange={(e) => handleOnChange(e)}
          placeholder="Landmark"
        />
        <input
          className="inp-primary mx-5"
          type="Text"
          id="street1"
          value={restaurants.street1}
          onChange={(e) => handleOnChange(e)}
          placeholder="street1"
        />

        <input
          className="inp-primary mx-5"
          type="Text"
          id="street2"
          value={restaurants.street2}
          onChange={(e) => handleOnChange(e)}
          placeholder="street2"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
          </center>
  );
}

export default AddRestaurant;
