import React, { createContext, useState } from 'react';

export const UserDataContext = createContext({
  fullName: {
    firstName: '',
    lastName: ''
  },
  email: '',
  password: ''
});

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullName: {
      firstName: '',
      lastName: ''
    },
    email: '',
    password: ''
  });

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;