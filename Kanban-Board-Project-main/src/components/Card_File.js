import React from 'react'
import usr_pic from '../../public/usr-1.png';
import ProfileImage from './ProfileImage';

export default function Card({filterr , obj , user}) {

  const priority_map = [(<i className='bx bx-dots-vertical-rounded bx-rotate-90 stylep' ></i>) , (<i className='bx bx-signal-1 stylep' ></i>) , (<i className='bx bx-signal-2 stylep' ></i>) , (<i className='bx bx-signal-3 stylep' ></i>) , (<i style={{color : '#fc7840'}} className='bx bxs-message-alt-error stylep'></i>)];
  const status_map = {
    "Backlog" : (<i style={{color : '#ff5f56' }} className='bx bxs-error-circle' ></i>),
    "Todo" : (<i style={{color : '#e2e2e2' }} className='bx bx-circle'></i>),
    "In progress" : (<i style={{color : '#f1ca4b' }} className='bx bx-loader-circle'></i>),
    "Done" : (<i style={{color : '#5e6ad2' }} className='bx bxs-check-circle'></i>),
    "Canceled" : (<i style={{color : '#94a2b3' }} className='bx bxs-x-circle'></i>)
  }

  return (
    <div className='card-container box-shadow'>
            <div className='card-head'>
                <span>{obj.id}</span>
                <ProfileImage name={user[obj.userId].name} available={user[obj.userId].available}/>
            </div>
            <h3> {filterr?.grouping !== "status" &&  status_map[obj.status]} {obj.title}</h3>
            <div style={{display:'flex' , alignItems : 'center'}}>
                {filterr?.grouping !== "priority" && priority_map[obj.priority]}
                {
                  obj.tag.map((ele , i) => (<p key={i}><i style={{color : '#bec2c8' , marginRight : '4px'}} className='bx bxs-circle' ></i>{ele}</p>))
                }
                
            </div>
    </div>
  )
}
