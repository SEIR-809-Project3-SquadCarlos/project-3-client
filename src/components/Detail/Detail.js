
// import useState and use effect
import { useState,  useEffect } from "react";
import React from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = ({props}) => {
/////function logic is here
    
// Use state here to represent the attactions 
 const [singleAttraction,setSingleAttraction]= useState([]);
 const id= useParams
// use effect to get the data and store it in our use state  variable
useEffect(() => {
   axios.get(`http://localhost:3050/attractions/${id}`)
   .then((item)=>setSingleAttraction(item))
   .catch(error=>console.error(error))
}, [])

// show the proerties of the said attractions
// have buttons for updating and delete

// update function needs to have a cancel or confirm change option
const  handleUpdate= async ()=>{
    // let's UPDATE our singleAttraction with the input created by the user. This MAY need to be its own function.
    try {
        axios.put(`http://localhost:3050/attractions/${id}`, singleAttraction);

    } catch (error) {
        
    }
}
// for the delete function we need to make sure that we have a are you sure option

const handleDelete = async  ()=>{

    const verify = window.confirm('Are you sure you want to delete?');
    if(verify){
try {
      
    } catch (error) {
        
    }
}
    }

    return (
        <div>
            <h1>{singleAttraction.name}</h1>
            <ul>
                <li>{singleAttraction.description}</li>
                <li>{singleAttraction.address}</li>
                <li>{singleAttraction.url}</li>
                <li>{singleAttraction.genre}</li>
            </ul>
            <button onClick={handleUpdate}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

// component export here 
export default Detail;