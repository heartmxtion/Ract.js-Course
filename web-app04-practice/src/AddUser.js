import { useState } from "react";
import "./AddUser.module.css";

function AddUser(props) {
  const [userName, setUserName] = useState();
  const [userAge, setUserAge] = useState();

  function nameHandler(event) {
    setUserName(event.target.value);
  }

  function ageHandler(event) {
    setUserAge(event.target.value);
  }
  
  const userData = {
    name: userName,
    age: userAge,
  };

  function buttonHandler() {
    props.OnUserData(userData);
  }


  return (
    <div>
      <p>Username</p>
      <input type="text" onChange={nameHandler}></input>
      <p>Age (Years)</p>
      <input type="number" onChange={ageHandler}></input>
      <input type="button" onClick={buttonHandler} value="Add User"></input>
    </div>
  );
}

export default AddUser;
