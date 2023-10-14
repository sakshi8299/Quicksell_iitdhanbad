import React , {useReducer , useEffect, useState} from "react";
import './App.css';
import Header from "./components/HeaderFile";
import Board from "./components/MainBoard";


export default function App() {
    const [tickets , setTickets] = useState([]);
    const [users , setUsers] = useState([]);
    const [filter , setFilter] = useState({"grouping":"status","ordering":"title"});
    const [loading , setLoading] = useState(false);

    const changeFilter = (element , val) => {
        if(element === 'grouping'){
            setFilter( Filterpr => {
                return {...Filterpr,grouping : val,}
            } )
        }else if(element === 'ordering'){
            setFilter( Filterpr => {
                return {...Filterpr, ordering : val,
                }
            } )
        }
    }
    useEffect(() => {
        const Filter_retain = JSON.parse(localStorage.getItem('filter'));
        if (Filter_retain) {
            setFilter(Filter_retain);
        }}, []);
    
    useEffect(() => {localStorage.setItem('filter' , JSON.stringify(filter));
    } , [filter]);

    useEffect(() => {const fetchData = async () => {
          try {
            const _data = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            const obj = await _data.json();
            setTickets(obj.tickets);
            setUsers(obj.users);
          } catch (err) {
            console.log(err);
          }
        };      
        fetchData();
      }, []);
    return (
        <>
            <Header filter={filter} changeFilter={changeFilter}/>
            {loading ? (
                <div>
                </div>
            ) : (
                <Board filter={filter} tickets={tickets} users={users}/>
            )}
            
        </>
    )
}