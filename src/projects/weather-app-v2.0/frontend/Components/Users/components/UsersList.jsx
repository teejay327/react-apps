import React from 'react';
import UserItem from './UserItem';
import './UsersList.css';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className='centre'>
        <h2>No users found.</h2>
      </div>
    )
  };

  return <ul className="users-list">
    { props.items.map((user) => {
      return <UserItem 
        key={ user.id } 
        id={ user.id } 
        name={ user.name } 
        location={ user.location }/>
    })}
  </ul>
}

export default UsersList;