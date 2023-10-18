import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);


//need API endpoint
/*Make sure to replace the API endpoint in the axios.get() function with your actual API endpoint. This component will render a table of all the users in the system, displaying their ID, name, and email.*/

  useEffect(() => {
    axios.get('https://mnagugprj4.execute-api.us-east-1.amazonaws.com/JaysQuizMay5')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <p><th>ID</th></p>
            <p><th>Name</th></p>
            <p><th>Email</th></p>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
