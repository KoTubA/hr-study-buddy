import React, { useState, useEffect } from 'react';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/students')
      .then((res) => res.json())
      .then(({ data }) => {
        setUsers(data.students);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };
    setUsers([newUser, ...users]);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
