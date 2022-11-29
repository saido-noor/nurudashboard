import React from 'react'
import Datatable from '../datatable/Datatable'
import Sidebar from '../Sidebar'
import './list.css'


const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Datatable/>

      </div>


    </div>
  )
}

export default List