import React from 'react';
import { useState } from 'react/cjs/react.development';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

import RenderUser from './RenderUser';

const UsersList = (props) => {
  const [modalActive, setModalActive] = useState(false);
  console.log(modalActive);
  return (
    <Card className={classes.users}>
      {props.users.map((user) => {
        return (
          <RenderUser
            key={user.id}
            id={user.id}
            onCancel={() => setModalActive(false)}
            onDelete={props.onFilter}
            modalActive={modalActive}
          >
            <li>
              {user.name} ({user.age} years old)
              <Button onClick={() => setModalActive(true)}>Delate</Button>
            </li>
          </RenderUser>
        );
      })}
    </Card>
  );
};

export default UsersList;
