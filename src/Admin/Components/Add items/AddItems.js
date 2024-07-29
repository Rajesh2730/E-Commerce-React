import React from 'react'
import AdminNavBar from '../AdminNavbar/AdminNavbar'
import './additems.css'
const AddItems = () => {
  return (
    <div className='adminpannel'>
        <AdminNavBar/>
        <div className='additems'>
          <h1 className='text-light mb-5'>Add Items</h1>
          <form >
            <label className='lb-name'>Product  Categorey</label>
            <select className='options'>

            </select><br/>
            <label className='lb-name mt-4'>Gender</label>
            <select className='options' style={{position:"relative", left:"2.8rem"}}>
              <option value="" disabled selected>-Select Gender-</option>
              <option value="Male">Men</option>
              <option value="Female">Women</option>
              <option value="Kids">Kids</option>
            </select><br/>
            <label className='lb-name mt-4'>Material Type</label>
            <select className='options' style={{position:"relative", left:"1.3rem"}}>

            </select><br/>
          </form>
        </div>
    </div>
  )
}

export default AddItems