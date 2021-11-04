import React from 'react';
import { useState } from 'react/cjs/react.development';
import Button from '../UI/Button';
import Card from '../UI/Card';
import DelatModal from '../UI/DelatModal';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
            <Button onClick={() => setModalActive(true)}>Delate</Button>
            <DelatModal active={modalActive} setActive={setModalActive}>
              <div>
                <div>
                  <h1>Удалить?</h1>
                  <Button
                    onClick={() => {
                      props.onFilter(user.id);
                      setModalActive(false);
                    }}
                  >
                    Dа
                  </Button>
                  <Button onClick={() => setModalActive(false)}>Net</Button>
                </div>
              </div>
            </DelatModal>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
