import React from 'react'
import Card from '../Card_File'
import ProfileImage from '../Image'

export default function Users({filterr , tickets , users}) {

  let Ticket_Sorted;
  let Tempo_Sorted = [...tickets];

  if(filterr.ordering === "priority"){
      Ticket_Sorted = Tempo_Sorted.sort((u, v) => { return (v.priority - u.priority)});
  }else if(filterr.ordering === "title"){
      Ticket_Sorted =  Tempo_Sorted.sort((u , v) => {
          return (u.title.localeCompare(v.title));
      });
  }

  const search_user = Object.values(users);
  const mapping = {};
  search_user?.forEach((ele , i) => {
    let temp = [];

    for(let i in Ticket_Sorted){
      if(Ticket_Sorted[i].userId == ele.id){
        temp.push(Ticket_Sorted[i]);
      }
    }
    
    mapping[ele.id] = temp;
  })

  return (
    <>
      {search_user?.map((ele , i) => {
        return (
          <div key={i} className='grid-col'>
            <div className='grid-col-head'>
              <div style={{display:'flex' , alignItems : 'center'}}>
                <ProfileImage key={i} name={ele.name} available={true} />
                <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>{ele.name}</span>
                <span>{mapping[ele.id]?.length}</span>
              </div>
              <div>
              </div>
            </div>
            {mapping[ele.id]?.map((ele , it)=>{
              return (<Card key={it} filterr={filterr} obj={ele} user={users}/>);
            })}
            
          </div>
        );
      })}
      
    </>  
  )
}
