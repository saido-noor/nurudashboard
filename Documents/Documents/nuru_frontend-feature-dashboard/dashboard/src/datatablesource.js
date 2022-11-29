import './User.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
function Users() {
  const [, setIsLoading] = useState(false);
  const [, setError] = useState();
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    getUsers()
    console.log('users')
  },[]);
  const getUsers =() => {
    console.log('hhhhh')
    // setIsLoading(true);
    // try {
      // const response = await
      axios.get("https://still-oasis-20492.herokuapp.com/api/mother/")
      .then(res=>{
        console.log(res.data)
        setUsers(res.data)
      })
      // console.log(response.data)
      // if (response.status !== 200) {
      //   throw new Error(`Something went wrong!: ${response.status}`);
      // }
      // const data = await response.data.json();
      // if (data) setUsers(data);
    // } catch (error) {
    //   setError(error);
    // } finally {
    //   setIsLoading(false);
    // }
  };
return (
  <div className="app">
       <h1 className='user'>Users</h1>
 <div className='head'>
        </div>
         <button className='add' type="button">Add</button>
 <table id="users" className="table table-dark table-borderless">
        <tr>
          <th>User's Name</th>
          <th>Child's Name</th>
          <th>Child's Date of Birth</th>
          <th>Registration Date</th>
          <th>User's Phone Number</th>
          <th>Appointment Date</th>
          {/* <th>Action</th> */}
        </tr>
         {users.map(item => {
          return (
            <tr>
              <td>{item.full_name}</td>
              <td>{item.child_name}</td>
              <td>{item.child_date_of_birth}</td>
              <td>{item.registration_date}</td>
              <td>{item.phone_number}</td>
              <td>{item.appointment_date}</td>
              {/* <td>{item.action}</td> */}
            </tr>
          )
        })}
      </table>
      {/* <h2>Add</h2> */}
      {/* <form>
        <input
        type='text'
        name='full_name'
        required='required'
        placeholder='Enter a name'>
        </input>
        </form> */}
      <button className='del' type="button">Delete</button>
    </div>
  );
}
export default Users;