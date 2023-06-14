import React, { useState } from "react";
const label="Enter Password:"
const lower=' At least one lowercase letter' 
const upper="At least one uppercase letter" 
const number="  At least one number"
const special=" At least one special character"
const at=" At least 8 characters"
const click="click"
export default function Password() {
  const [type, setType] = useState("password");
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("");
      if ("Password") {
        setType("password");
      }
    }
};

const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
  const handleChange = (value) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");

if (lower.test(value)) {
    setLowerValidated(true);
  } else {
    setLowerValidated(false);
  }
  if (upper.test(value)) {
    setUpperValidated(true);
  } else {
    setUpperValidated(false);
  }
  if (number.test(value)) {
    setNumberValidated(true);
  } else {
    setNumberValidated(false);
  }
  if (special.test(value)) {
    setSpecialValidated(true);
  } else {
    setSpecialValidated(false);
  }
  if (length.test(value)) {
    setLengthValidated(true);
  } else {
    setLengthValidated(false);
  }
}
  return (
    <>
      <div className="main-box">
        <div className="box">
          <label className="inbox lab"> {label}</label>
          <div className="inbox">
            <input className="input" type={type} onClick={() => setType("password")} onChange={(e)=>handleChange(e.target.value)} />
            <button className="btn" onClick={handleToggle}>{click}</button>
          </div>
          <main className="box2">
    
          <div className= {lowerValidated ? "validated" : "not-validated"}> 
           {lower}</div>
            <div className={upperValidated ? "validated" : "not-validated"}>
           {upper}
          </div>
          <div className={numberValidated ? "validated" : "not-validated"}>
           {number}
          </div>
          <div className={specialValidated ? "validated" : "not-validated"}>
           {special}
          </div>
          <div className={lengthValidated ? "validated" : "not-validated"}>
         {at}
          </div>
          </main>
        </div>
      </div>
    </>
  );
}
