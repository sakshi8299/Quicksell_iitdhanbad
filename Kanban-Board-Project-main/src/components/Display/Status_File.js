import React from 'react'
import Card from '../Card_File'

export default function Status({filterr , tickets , users}) {
  let Ticket_Sorted;
  let  Tempo_Sorted= [...tickets];

  if(filterr?.ordering === "priority"){
      Ticket_Sorted = Tempo_Sorted.sort((u, v) => { return (v.priority - u.priority)});
  }else if(filterr?.ordering === "title"){
      Ticket_Sorted =  Tempo_Sorted.sort((u , v) => {
          return (u.title.localeCompare(v.title));
      });
  }

  const DONE = Ticket_Sorted?.filter((obj) => {
    return obj.status === "DONE";
});
const CANCELLED = Ticket_Sorted?.filter((obj) => {
    return obj.status === "CANCELLED";
});
  const INPROGRESS = Ticket_Sorted?.filter((obj) => {
    return obj.status === "In progress";
});
    const BACKLOG = Ticket_Sorted?.filter((obj) => {
        return obj.status === "BACKLOG";
    })
    const TODO = Ticket_Sorted?.filter((obj) => {
        return obj.status === "TODO";
    });
    
  return (
    <>
        <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i style={{color : '#ff5f56'}} className='bx bxs-error-circle' ></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>BACKLOG</span>
            <span>{BACKLOG?.length}</span>
          </div>
          <div>
         
          </div>
        </div>
        { BACKLOG?.length !== 0 ? 
            BACKLOG?.map((ele , i) => {
                return (<Card key={i} filterr={filterr} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>Nothing is in BACKLOG</span>)
        }
      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i style={{color : '#e2e2e2'}} className='bx bx-circle'></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>TODO</span>
            <span>{TODO?.length}</span>
          </div>
          <div>
           
          </div>
        </div>
        { TODO?.length !== 0 ? 
            TODO?.map((ele , i) => {
                return (<Card key={i} filterr={filterr} obj={ele} user={users}  />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>Nothing TODO</span>)
        }
        
      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i style={{color : '#f1ca4b'}} className='bx bx-loader-circle'></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>In Progress</span>
            <span>{INPROGRESS?.length}</span>
          </div>
          <div>
           
          </div>
        </div>
        { INPROGRESS?.length !== 0 ? 
            INPROGRESS?.map((ele , i) => {
                return (<Card key={i} filterr={filterr} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>Nothing is in progress</span>)
        }

      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i style={{color : '#5e6ad2'}} className='bx bxs-check-circle'></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>DONE</span>
            <span>{DONE?.length}</span>
          </div>
          <div>
      
          </div>
        </div>
        { DONE?.length !== 0 ? 
            DONE?.map((ele , i) => {
                return (<Card key={i} filterr={filterr} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>NOTHING IS DONE</span>)
        }

      </div>  

       <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i style={{color : '#5e6ad2'}} className='bx bxs-error-circle'></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>CANCELLED</span>
            <span>{DONE?.length}</span>
          </div>
          <div>
      
          </div>
        </div>
        { DONE?.length !== 0 ? 
            DONE?.map((ele , i) => {
                return (<Card key={i} filterr={filterr} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>all cancel</span>)
        }

      </div>  
    </>
  )
}
