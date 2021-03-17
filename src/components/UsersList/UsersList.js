import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => (
  <ul>
    {users.map((userData) => (
      <UsersListItem userData={userData} />
    ))}
  </ul>
);

export default UsersList;
