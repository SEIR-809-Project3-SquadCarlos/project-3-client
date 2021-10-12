import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import API_URL from '../../config';

const Category = () => {
    const [filter,setFilter]=useState([]);
    

    useEffect(() => {
        //how we make it dinamic?
        axios.get(`${API_URL}/attractions`,{params: {city: 'Los Angeles'}})// how we make our params dinamic?
        .then(res=>console.log(res.data))
        .then(res=>setFilter(res.data))
        .then(console.log(filter))
        .catch(console.error)
    }, []);
        
        /*
        const params = new URLSearchParams([['answer', 42]]);
        
        const res = await axios.get('https://httpbin.org/get', { params });
        res.data.args; // { answer: 42 }
        */ 
    
    return (
        <div>  
            {
                filter.map((elem) =>{ 
                      return(
                         <div>
                            <h2>{filter.name}</h2> 
                         </div>
                )
               
            })
            
            }       
        </div>
   
    );
        }

export default Category;
