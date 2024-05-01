import React from 'react';

import UsersList from '../components/UsersList.jsx';

const Users = () => {
  const USERS = [
    {
      id: 'user1',
      name: 'Tony Jones',
      location: 'Gold Coast'
     }
  ];

  return <UsersList users={ USERS } />
}

export default Users;