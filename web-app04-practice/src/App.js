import React from 'react';
import AddUser from './AddUser';
import UserList from './UserList';

function App() {
  return (
    <div>
      <AddUser />
      <UserList userText="{value here}"/>
    </div>
  );
}

export default App;
