import React, { useState } from "react";
import "./layout.css";
import icony from "./icony.png";
import Output from "./output";

const Layout = (props) => {
  let [input, setInput] = useState(" ");
  let [result, setResult] = useState(" ");

  const handleClick = (event) => {
    const value = event.target.value;
    if (value === "=") {
      if (input !== "") {
        let res = "";
        try {
          res = eval(input);
        } catch (err) {
          setResult("Math Error");
        }
        if (res === undefined) {
          setResult("Math Error");
        } else {
          setResult(input + "=");
          setInput(res);
        }
      }
    } else if (value === "C") {
      setInput("0");
      setResult("");
    } else if (value === "DEL") {
      let str = input;
      str = str.substr(0, str.length - 1);
      setInput(str);
    } else if (input === "0") {
      setInput(value);
    } else {
      setInput((input += value));
    }
  };
  return (
    <div className="frame">
      <div className="calculator">
        <br/>
        <Output user={input} answer={result} />
        <div className="brand"> M @ TR!X </div>
        <div className="key">
          <input type="button"value={"C"}className="btnclear"onClick={handleClick}/>
          <input type="button"  value={"DEL"} className="btnclear" onClick={handleClick}/>
          <input type="button" value={"%"} className="btnoperator" onClick={handleClick} />
          <input type="button" value={"/"} className="btnoperator" onClick={handleClick} />

          <input type="button" value={"7"}  className="button" onClick={handleClick}/>
          <input type="button" value={"8"} className="button" onClick={handleClick}/>
          <input type="button" value={"9"}  className="button" onClick={handleClick}/>
          <input  type="button"  value={"*"}  className="btnoperator"  onClick={handleClick}/>

          <input  type="button" value={"4"}  className="button"  onClick={handleClick}/>
          <input type="button" value={"5"} className="button"  onClick={handleClick}/>
          <input  type="button" value={"6"} className="button" onClick={handleClick}/>
          <input  type="button" value={"-"} className="btnoperator"  onClick={handleClick}/>

          <input type="button" value={"1"} className="button" onClick={handleClick}/>
          <input  type="button" value={"2"} className="button" onClick={handleClick}/>
          <input type="button" value={"3"} className="button" onClick={handleClick}/>
          <input type="button" value={"+"} className="btnoperator" onClick={handleClick}/>

          <input type="button" value={"0"} className="button" onClick={handleClick}/>
          <input type="button" value={"."} className="button" onClick={handleClick}/>
          <input type="button" value={"="} className="btnequal" onClick={handleClick}/>
          <img src={icony} width="70px" height="55px" alt="img logo" style={{display: "block",marginLeft: "auto",marginRight: "auto", }}/>
        </div>
        </div>
    </div>
  );
};

export default Layout;
