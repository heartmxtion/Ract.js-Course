import { useState } from "react";
import "./AddUser.module.css";

function AddUser(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const [userData, setUserData] = useState([]);

  function nameHandler(event) {
    setUserName(event.target.value);
  }

  function ageHandler(event) {
    setUserAge(event.target.value);
  }

  function buttonHandler() {
    if (userName.length > 0 && userAge.length > 0) {
      const newUserData = {
        key: Math.random(0.1, 9999),
        name: userName,
        age: userAge
      }
      setUserData(prevUserData => [...prevUserData, newUserData]);
      props.OnUserData([...userData, newUserData]);
    }
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
