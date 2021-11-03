import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModule from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setAgeUserName] = useState('');
  const [error, setError] = useState();

  const userNameChangeHundler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHundler = (event) => {
    setAgeUserName(event.target.value);
  };

  const addUserHundler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age(non-emty value)',
      });
      return;
    }

    if (enteredAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age( > 0)',
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setAgeUserName('');
    setEnteredUserName('');
  };

  const errorHundler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHundler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHundler}>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHundler}
            value={enteredUserName}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHundler}
            value={enteredAge}
          />
          <Button type="sumbit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
