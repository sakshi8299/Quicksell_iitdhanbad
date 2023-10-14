import React from 'react'
import Card from '../Card_File'

export default function Priority({filterr , tickets , users}) {

    let Ticket_Sorted;
    let Tempo_Sorted = [...tickets];

    if(filterr?.ordering === "priority"){
        Ticket_Sorted = Tempo_Sorted.sort((u, v) => { return (v.priority - u.priority)});
    }else if(filterr?.ordering === "title"){
        Ticket_Sorted =  Tempo_Sorted.sort((u , v) => {
            return (u.title.localeCompare(v.title));
        });
    }

const priorityless = Ticket_Sorted?.filter((obj) =>{
      return obj.priority === 0;
});
const LOW = Ticket_Sorted?.filter((obj) => {
    return obj.priority === 1;
});
const MEDIUM = Ticket_Sorted?.filter((obj) => {
  return obj.priority === 2;
});
const HIGH = Ticket_Sorted?.filter((obj) => {
  return obj.priority === 3;
});
const URGENT = Ticket_Sorted?.filter((obj) => {
        return obj.priority === 4;
});
   
  return (
    <>
        <div className='grid_col'>
        <div className='grid-col-head'>
          <div >        
            <span style={{margin:'0 5px' , fontSize:'1.6rem'}}>No priority</span>
            <span>{priorityless?.length}</span>
          </div>
          <div>
          
          </div>
        </div>
        { priorityless?.length !== 0 ? 
            priorityless?.map((ele , i) => {
                return (<Card key={i} filterr={filterr} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545464' , fontSize : '0.6rem'}}>No one with no priority</span>)
        }
      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i style={{color : '#fc7840'}} className='bx bxs-message-alt-error'></i>
            <span style={{margin:'0 6px' , fontSize:'1.5rem'}}>URGENT</span>
            <span>{URGENT?.length}</span>
          </div>
          <div>
            
          </div>
        </div>
        { URGENT?.length !== 0 ? 
            URGENT?.map((ele , i) => {
                return (<Card key={i} filterr={filterr} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>No one with URGENT priority</span>)
        }
      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>HIGH</span>
            <span>{HIGH?.length}</span>
          </div>
          <div>
           
          </div>
        </div>
        { HIGH?.length !== 0 ? 
            HIGH?.map((ele , i) => {
                return (<Card key={i} filterr={filterr} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>No one with HIGH priority</span>)
        }
      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i className='bx bx-signal-2' ></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>MEDIUM</span>
            <span>{MEDIUM?.length}</span>
          </div>
          <div>
          </div>
        </div>
        { MEDIUM?.length !== 0 ? 
            MEDIUM?.map((ele , i) => {
                return (<Card key={i} filterr={filterr} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>No one with MEDIUM priority</span>)
        }
      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i className='bx bx-signal' ></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>LOW</span>
            <span>{LOW?.length}</span>
          </div>
          <div>
          </div>
        </div>
        { LOW?.length !== 0 ? 
            LOW?.map((ele , i) => {
                return (<Card key={i} filterr={filterr} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>No one with LOW priority</span>)
        }
      </div>
    </>
  )
}
