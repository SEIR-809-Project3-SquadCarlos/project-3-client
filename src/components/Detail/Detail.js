// import useState and use effect
import { useState,  useEffect} from "react";
import React from 'react';
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const Detail = ({props}) => {
/////function logic is here
    
// Use state here to represent the attactions 
 const [singleAttraction,setSingleAttraction]= useState([]);
 const {id}= useParams();
 //const [newObject, setNewObject] = useState({}); 
//  const [name,setName] = useState("");
//  const [genre,setGenre]=useState("");
//  const [address, setAddress] = useState("");
//  const [description, setDescription]= useState("");
//  const [url, setUrl] = useState("");
// use effect to get the data and store it in our use state  variable
useEffect(() => {
   axios.get(`http://localhost:3050/attractions/${id}`)
   .then((item)=>setSingleAttraction(item))
   .catch(error=>console.error(error))
}, []);

// show the proerties of the said attractions
// have buttons for updating and delete
const handleChange =(event)=>{

    let name = event.target.name;
    let value = event.target.value;
    //It would be so great if we could update the entire object all at once. 
    //In other words, if, when we update the name, the whole singleAttraction object gets passed in.
    setSingleAttraction(
        {
            [name] : value
        }
    )
    
    // input values and have those saved to the singleAttraction variable  
    // name, genre, description, url, address
    // if(event.target.name === 'name' ) setName(event.target.value);
    // else if(event.target.name === 'genre')setGenre(event.target.value);

    //  else if(event.target.name==='address')setAddress(event.target.value);
    //  else if(event.target.name==='description')setDescription(event.target.value);
    // else setUrl(event.target.value);


    setSingleAttraction()
    //HOWEVER, I don't know how to do that yet, so... why don't we update one piece of singleAttraction at a time?
}
// update function needs to have a cancel or confirm change option
const  handleUpdate= async ()=>{
    // let's UPDATE our singleAttraction with the input created by the user. This MAY need to be its own function.
    try {
       const newAttraction = await axios.put(`http://localhost:3050/attractions/${id}`, singleAttraction);
       console.log(newAttraction);
    } catch (error) {
        console.log(error);
    }
}

const HandleSubmit = (event) => {
    event.preventDefault()
    alert('Are you sure you want to submit this change?')
    useHistory('/')
}
// for the delete function we need to make sure that we have a are you sure option

const handleDelete = async  ()=>{

    const verify = window.confirm('Are you sure you want to delete?');
    if(verify){
try {
     const deleteOne = await axios.delete(`http:localhost:3000/attraction/${id}`)
     console.log(deleteOne);
    } catch (error) {
        console.log(error);   
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
            <aside>
                <button onClick={handleUpdate}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </aside>
            {/* <label for="update" */}
            <form name="update" onSubmit={HandleSubmit}>
                <label>
                    Attraction
                    <input onChange={handleChange} name="name" type="text" value="submit" />
                    <input onChange={handleChange} name="genre"type="text" value="submit" />
                    <input onChange={handleChange} name="address" type="text" value="submit" />
                    <input onChange={handleChange} name="description" type="text" value="submit" />
                    <input onChange={handleChange} name="url" type="text" value="submit" />
                </label>
