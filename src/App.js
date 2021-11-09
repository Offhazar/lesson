import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import './App.css';
import UsersList from './components/Users/UsersLIst';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHundler = (uName, uAge) => {
    console.log(uName, uAge);
    // setUserList([
    //   ...userList,
    //   { name: uName, age: uAge, id: Math.random().toString() },
    // ]);

    setUserList((preveUsersList) => {
      return [
        ...preveUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  const AppFilter = (idSelect) => {
    setUserList((preveUsersList) => {
      const AppDelat = preveUsersList.filter((item) => item.id !== idSelect);
      return AppDelat;
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHundler} />
      <UsersList users={userList} onFilter={AppFilter} />
    </>
  );
}

export default App;
