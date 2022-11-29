import './datatable.css';
import React, { useEffect, useState } from 'react';

import { DataGrid} from '@mui/x-data-grid';
import axios from 'axios';

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
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Users Name', width: 130 },
  { field: 'lastName', headerName: 'Childs Name', width: 130 },
  {
    field: 'ChildDOB',
    headerName: 'ChildDOB',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Registartion Date',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: (params) =>{
        return(
            <>
            
            <span>{params.row.lastName}</span>
            <p>{params.row.ChildDOB}</p>
            </>
        )
    }
 
  },
  {
    field: 'phone number',
    headerName: 'Phone Number',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params ) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'Appointment Date',
    headerName: 'Appointment Date',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params ) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', ChildDOB: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', ChildDOB: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', ChildDOB: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', ChildDOB: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', ChildDOB: null },
  { id: 6, lastName: 'Melisandre', firstName: null, ChildDOB: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', ChildDOB: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', ChildDOB: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', ChildDOB: 65 },
];

const Datatable = () => {
  return (
    <div className='datatable'>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable