import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextUtil from "./components/TextUtil";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Axios } from "axios";
import AxiosFetch from "./components/AxiosFetch";
import FetchUseEffect from "./components/FetchUseEffect";
import RestaurantList from "./components/RestaurantList";
import { Fragment, useState } from "react";

import RegisterRestaurant from "./components/RegisterRestaurant";

import SignUp from "./components/SignUp"
import Login from "./components/Login"
import UpdateRestaurant from "./components/UpdateRestaurant";
import RestaurantDelete from "./components/RestaurantDelete";
import NavBar from "./components/NavBar/NavBar";



// import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert(
      {
        message:message,
        type:type
      }
    )
  }

  let toggleModel = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      document.title="enable dark mode";
      showAlert("enable dark mode","success")
      // setInterval(() => {
      //   document.title="TextUtil is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtil"
      // }, 1500);
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <BrowserRouter>
      {/* <NavBar Title="FoodSwing" /> */}
      {/* <div> */}
        <Navbar
          Title="FoodSwing"
          Contact="Contact"
          mode={mode}
          toggleMode={toggleModel}
        />

        {/* <Alert alert={alert} /> */}
      {/* </div> */}
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              {/* <TextUtil Heading="Enter Your Text here" showAlert={showAlert} /> */}
            </Fragment>
          }
        />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/login" element={<Login />} />
        <Route
          path="/restaurant"
          element={
            <Fragment>
              {/* <GetMenuItemsFromResturant /> */}
              <UpdateRestaurant />
              {/* <RestaurantList /> */}
              {/* <AddRestaurant/> */}
              {/* <RegisterRestaurant/> */}
              {/* <RestaurantUpdate/> */}
            </Fragment>
          }
        />

        <Route path="/restaurantdelete" element={<RestaurantDelete />} />
      </Routes>
      {/* <GetCustomerInfoById /> */}

      {/* <FetchData /> */}

      {/* <AxiosFetch/> */}
      {/* <FetchUseEffect /> */}
      {/* <AxiosGetData/> */}
      {/* <TableData/> */}
    </BrowserRouter>
  );
  
}

export default App;
