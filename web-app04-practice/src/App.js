import React, { useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";
import Card from "./Card";

function App() {
  const [userData, setUserData] = useState("");

  const [dataStatus, setDataStatus] = useState(false);

  function userDataHandler(props) {
    setUserData(props);
    setDataStatus(true);
  }

  return (
    <div>
      <Card>
        <AddUser
          OnUserData={userDataHandler}
        />
      </Card>
      {dataStatus ? (
        <Card>
          <UserList OnUserData={userData} />
        </Card>
      ) : null}
    </div>
  );
}

export default App;
