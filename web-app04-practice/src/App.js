import React, {useState} from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";
import Card from "./Card"

function App() {

  const [userName, setUserName] = useState();
  const [userAge, setUserAge] = useState();

  function userDataHandler(props) {
    setUserName(props.name); 
    setUserAge(props.age);
  }

  return (
    <div>
      <Card>
        <AddUser OnUserData = {userDataHandler}/>
      </Card>
      <Card>
        <UserList OnUserName={userName} OnUserAge={userAge} />
      </Card>
    </div>
  );
}

export default App;
