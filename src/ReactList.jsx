import React from "react";
import { styled } from "styled-components";
import { userLis } from "./utils/Common";
export default function ReactList() {
  return (
    <>
      <div style={{backgroundColor: "green",color: "white",padding: "20px",marginBottom: "10px",}}>
      {
        userLis.map((user, idx) => (
            <div key={idx}>
            <label>Name:</label> <span>{user.name}</span> &nbsp;{" "}<label>Mobile No:</label><span>{user.mobileno}</span>
          </div>
        ))}
      </div>
      <div className="list" >
      {
        userLis.map((user, idx) => (
            <div key={idx}>
            <label>Name:</label> <span>{user.name}</span> &nbsp;{" "}<label>Mobile No:</label><span>{user.mobileno}</span>
          </div>
        ))}
      </div> 
      <div className="{styles.list2}">
      {
        userLis.map((user, idx) => (
            <div key={idx}>
            <label>Name:</label> <span>{user.name}</span> &nbsp;{" "}<label>Mobile No:</label><span>{user.mobileno}</span>
          </div>
        ))}
      </div>
      <Listdiv color="orange">
        {
          userLis.map((user,idx)=> (
            <div key={idx}>
              <label>Name: </label><span>{user.name}</span> &nbsp; <label>Mobile No: </label> <span>{user.mobileno}</span>
            </div>
          ))
        }
      </Listdiv>
      <Listdiv color="orange">
        {
          userLis.map((user,idx)=> (
            <div key={idx}>
              <label>Name: </label><span>{user.name}</span> &nbsp; <label>Mobile No: </label> <span>{user.mobileno}</span>
            </div>
          ))
        }
      </Listdiv>
      <Listdiv color="orange">
        {
          userLis.map((user,idx)=> (
            <div key={idx}>
              <label>Name: </label><span>{user.name}</span> &nbsp; <label>Mobile No: </label> <span>{user.mobileno}</span>
            </div>
          ))
        }
      </Listdiv>
    </>
  );
}

const Listdiv = styled.div`
background-color:${(pops) => pops.color };
padding : 20px ;
color:${(pops) => pops.textColor ? pops.textColor :'white'};
margin-bottom:10px;
`