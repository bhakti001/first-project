import React from "react";
import  password from "./Password.css"
import { userList } from "./App";
import { styled } from "styled-components";
// import {styled} from 'styled-components';
export default function ReactList() {
  return (
    <>
      <div style={{backgroundColor: "green",color: "white",padding: "20px",marginBottom: "10px",}}>
      {
        userList.map((user, idx) => (
            <div key={idx}>
            <label>Name:</label> <span>{user.name}</span> &nbsp;{" "}<label>Mobile No:</label><span>{user.mobileNo}</span>
          </div>
        ))}
      </div>
      <div className="list" >
      {
        userList.map((user, idx) => (
            <div key={idx}>
            <label>Name:</label> <span>{user.name}</span> &nbsp;{" "}<label>Mobile No:</label><span>{user.mobileNo}</span>
          </div>
        ))}
      </div>
      <div className="{styles.list2}">
      {
        userList.map((user, idx) => (
            <div key={idx}>
            <label>Name:</label> <span>{user.name}</span> &nbsp;{" "}<label>Mobile No:</label><span>{user.mobileNo}</span>
          </div>
        ))}
      </div>
      <Listdiv color="orange">
        {
          userList.map((user,idx)=> (
            <div key={idx}>
              <label>Name: </label><span>{user.name}</span> &nbsp; <label>Mobile No: </label> <span>{user.mobileNo}</span>
            </div>
          ))
        }
      </Listdiv>
      <Listdiv color="orange">
        {
          userList.map((user,idx)=> (
            <div key={idx}>
              <label>Name: </label><span>{user.name}</span> &nbsp; <label>Mobile No: </label> <span>{user.mobileNo}</span>
            </div>
          ))
        }
      </Listdiv>
      <Listdiv color="orange">
        {
          userList.map((user,idx)=> (
            <div key={idx}>
              <label>Name: </label><span>{user.name}</span> &nbsp; <label>Mobile No: </label> <span>{user.mobileNo}</span>
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