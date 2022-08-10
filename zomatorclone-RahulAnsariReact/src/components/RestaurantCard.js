import axios from "axios";
import { useState } from "react";
import "../App.css";

function RestaurantCard(props) {
  // const mystyle = {
  //   width: "500px",
  //   display: "inline-block",
  // };
  return (
    
    <>
      <div>
        <table class="table">
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
            </tr>
          </thead>

          <tbody>
            {/* <div className="resDiv"> */}
            {/* ID:{props.id} <br></br> */}
            {/* <span> {props.restaurantName}</span>
              <span> {props.icone}</span>
              <span>{props.email}</span>
              <span>{props.state}</span>
              <span>{props.city}</span>
              <span>{props.landmark}</span>
              <span>{props.street1}</span>
              <span>{props.street2}</span>
            </div> */}
            <tr>
              <td>{props.restaurantName}</td>
              <td>{props.icone}</td>
              <td>{props.email}</td>
              <td>{props.state}</td>
              <td>{props.city}</td>
              <td>{props.landmark}</td>
              <td>{props.street1}</td>
              <td>{props.street2}</td>
              {/* <td>{props.restaurantName}</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RestaurantCard;
