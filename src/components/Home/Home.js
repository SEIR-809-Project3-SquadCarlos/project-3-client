import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// importing url from config.js made in src folder
import API_URL from '../config';
//trying to check whether API_URL is working or not buut having errors while compiling
console.log(API_URL);

const Home = () => {
    const [attractions, setAttractions] = useState([]);

    const getAttractions = async ()=>{
        try{
                    const res = await axios.get(`${API_URL}/attractions`);
                setAttractions(res.data);
                } catch (error) {
                    console.log(error);
                }
        }
useEffect(()=>{
    getAttractions();
  }, []);
    

    return (
        <div className="attraction-list">
            {attractions.map(attraction => {
                return(
                    <Link to={`${attraction._id}`}>
                    <div>
                        <h3>{attraction.name}</h3>
                        <p>{attraction.description}</p>
                        <a href={`${attraction.url}`} alt="webiste for this attraction">Check out the website</a>
                    </div>
                    </Link>
                );
            })}
        </div>   
    );
};

export default Home;
/*
import React, and React Hooks:
useState, useHistory, useEffect, 

import Links from react router dom

State: variables that update as the user makes changes
an array called attractions
Props: variables that are immutable (they don't change);


when Home mounts, we'll run our useEffect to:
    FETCH our attractions from the api!
    STORE the attractions in a an array.

Our useEffect won't need to update.

functions:
   onClick function that handles the logic for any buttons being clicked.

we're going to RETURN:
list of attractions
maping thru the attractions array, and showing each attraction 
we want to see each attractions detail by clicking on a attraction - we'll use Links to do it.

we want to be able to add/delete attractions by clicking on a button, or perhaps a Link. 
    
STRETCH -- 
we want to be able to search for attractions from the attractions array by different properties

export default Home
*/