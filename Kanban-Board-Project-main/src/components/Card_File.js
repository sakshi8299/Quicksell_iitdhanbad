
import React from 'react';
import ProfileImage from './Image';

export default function Card({ filterr, obj, user }) {
  const priority_set = [
    <i style={{ color: '#fc7840' }} className='bx bxs-message-alt-error stylep'></i>,
  ];

  const status_set = {
    BACKLOG: <i style={{ color: '#a31010' }} className='bx bxs-error-circle'></i>,
    TODO: <i style={{ color: '#5e5c5c' }} className='bx bx-circle'></i>,
    'IN PROGRESS': <i style={{ color: '#dbab0d' }} className='bx bx-loader-circle'></i>,
    DONE: <i style={{ color: '#5e6ad2' }} className='bx bxs-check-circle'></i>,
    CANCELLED: <i style={{ color: '#ff5f56' }} className='bx bxs-x-circle'></i>,
  };

  return (
    <div className='card-container'>
      <div className='card-set'>
        <span>{obj.id}</span>
        <ProfileImage name={user[obj.userId].name} available={user[obj.userId].available} />
      </div>
      <h3>
        {filterr?.grouping !== 'status' && status_set[obj.status]} {obj.title}
      </h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {filterr?.grouping !== 'priority' && priority_set[obj.priority]}
        {obj.tag.map((ele, i) => (
          <p key={i}>
            <i style={{ color: '#bec2c8', marginRight: '8px' }} className='bx bxs-circle'></i>
            {ele}
          </p>
        ))}
      </div>
    </div>
  );
}
