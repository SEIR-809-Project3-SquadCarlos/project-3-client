
// import useState and use effect
import { useState,  useEffect } from "react";
import React from 'react';

const Detail = ({props}) => {
/////function logic is here
    
// Use state here to represent the attactions 
 const [singleAttraction,setSingleAttraction]= useState([]);

// use effect to get the data and store it in our use state  variable
useEffect(() => {
   
}, [])

// show the proerties of the said attractions
// have buttons for updating and delete

// update function needs to have a cancel or confirm change option
const  handleUpdate= async ()=>{
    try {
        
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
            
        </div>
    );
};

// component export here 
export default Detail;