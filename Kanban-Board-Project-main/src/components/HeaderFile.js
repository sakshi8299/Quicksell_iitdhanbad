import React from 'react'
import { useState } from 'react'
import DropdownMenu from './DropDown';

export default function Header({filter , changeFilter}) {

  const [open , setOpen] = useState(false);

  return (
    <nav className=' header-main'>
      <div className='header-navigation'>
        <div className='displaybx' onClick={() => setOpen(!open)}>
          <p style={{margin:'2 15px'}}>Display</p>            
        </div>
        {open && <DropdownMenu filter = {filter} changeFilter = {changeFilter}/>}
      </div>
    </nav>
  )
}