import axios from "axios";
import React, { useState ,useEffect} from "react";
import FetchUseEffect from "./FetchUseEffect";



function TextUtil(props) {

  const [get, setGet] = useState([]);
  
  let onChangeHaldler = (event) => {
    console.log("on change");
    console.log(event.target.value);
    setText(event.target.value);
  };

  let clickHandlerUppper = () => {
    console.log("changer Occure");
    let newText = text.toUpperCase();
    setText(newText);
    {props.showAlert("convert uppercase","success")}

  };

  let clickHandlerlower = () => {
    console.log("changer");
    let newText = text.toLowerCase();
    setText(newText);
    {props.showAlert("converted to LowerCase","success")}
  };

  let clickHandlerCleare=()=>{
    let newTxet="";
    setText(newTxet)
    {props.showAlert("cleare text","success")}

  }
 
  
  const [text, setText] = useState("");
  return (
    <div className="container">
      <div className="form-floating">
        <h1>{props.Heading}</h1>
        <textarea
          className="form-control"
          onChange={onChangeHaldler}
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
      </div>
      <br></br>
      <div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={clickHandlerUppper}
        >
          Convert to toUpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={clickHandlerlower}
        >
          Convert to toLowerCase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={clickHandlerCleare}
        >
          Clear
        </button>
        {/* <button type="button" className="btn btn-primary mx-2 " onClick={ClickHandle}>
          getData
        </button> */}
      </div>

    
    </div>
  );
}

export default TextUtil;
