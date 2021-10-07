import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../config';
import './Create.css';

// const Create = () => {

// };

/*
IMPORT
useState, useHistory
some .css file
Links from react router dom
//we MIGHT useContext, not sure yet

STATE variables
newAttraction - an object modeled EXACTLY like our attractionSchema


useEffect - is used when a component MOUNTS 

FUNCTIONS

onSubmit
    Run a POST Request, passing in the newAttraction that the user created.
    Return our user to the Home page after submitting!

update


RETURN

Let's make a form that the user can fill out.
It should include INPUTS for:
      name
      genre
      address
      website
      description
Our inputs will update state variables onChange
onSubmit, we will run our POST request using the completed model!

export default Create

*/

export default Create;