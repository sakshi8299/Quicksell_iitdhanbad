import React from 'react'
import { useState } from 'react'
import DropdownMenu from './DropdownMenu';

export default function Header({filter , changeFilter}) {

  const [open , setOpen] = useState(false);

  return (
    <nav className='box-shadow header-main'>
      <div className='header-nav'>
        <div className='displaybx box-shadow' onClick={() => setOpen(!open)}>
          
          <i style={{color:'white'}} className='bx bx-filter-alt' ></i> 
          <p style={{margin:'0 5px',color:'white'}}>Display</p>
          {open ? (<i style={{color:'white'}} className='bx bx-x'></i>) : (<i style={{color:'white'}} className='bx bx-chevron-down'></i>)}
          
        </div>

        {open && <DropdownMenu filter = {filter} changeFilter = {changeFilter}/>}

      </div>
    </nav>
  )
}
