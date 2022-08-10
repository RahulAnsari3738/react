import React from 'react'
import "./NavBar.css";
import{Link} from 'react-router-dom'
function NavBar(props) {
  return (
    <>
      {/* <div className="hero"> */}
        <div className="banner">
          <div className="logo">
           
              {props.Title}
         
          </div>

          <nav>
            <ul>
              <li>
                <Link className="linkclass" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="linkclass" to="/restaurant">
                  Restaurant
                </Link>
              </li>
              <li>
                <Link className="linkclass" to="/signup">
                  SignUp
                </Link>
              </li>
              <li>
                <Link className="linkclass" to="/login">
                  login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* content */}
        {/* <div className="content">
          <h1>FoodSwing</h1> */}
          {/* <p>
                Welcom to FoodSwing
            </p> */}
          {/* <button className='btn'>Explore</button> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default NavBar