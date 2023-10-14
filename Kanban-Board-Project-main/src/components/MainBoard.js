import React , {useReducer} from 'react'
import Priority from './Display/Priority_File'
import Users from './Display/User_File';
import Status from './Display/Status_File'



export default function Board({filter , tickets , users}) {
  const select_user = {};
  const select_tickets = tickets;
  users.forEach((element, index) => {
    select_user[element.id] = element;
  });

  return (
    <div className='board'>
      {filter?.grouping === "status" && (<Status filterr={filter} tickets = {select_tickets} users={select_user}/>)}
      {filter?.grouping === "priority" && (<Priority filterr={filter} tickets = {select_tickets} users = {select_user} />)}
      {filter?.grouping === "user" && (<Users filterr={filter} tickets = {select_tickets} users = {select_user} />)}
    </div>
  )
}
