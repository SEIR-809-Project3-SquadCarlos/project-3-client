import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API_URL from '../../config';
import './Category.css';

const Category = () => {
    const [attractions,setAttractions]=useState([]);
    const [input, setInput ]=useState('');
    const [filter,setFilter]=useState([...attractions]);

const getAttractions = async () => {
		try {
			const res = await axios.get(`${API_URL}/attractions`);
			setAttractions(res.data);
            setFilter(res.data);
		} catch (error) {
			console.log(error);
		}
	};
  useEffect(() => {
		getAttractions();
	}, []);
    // provided by Ben, first developed during project 2
    const inputIsClose = (event, string)  => {
		let mySnippet = '';
		let distance = 0; // the difference between our two strings. In other words, how different are they?
        //How many characters are different?
		if (!string) return false;
		if (event.target.value.length < 3) return false;
        // substring creates a new string starting at a given location, and extending to a given length.
		mySnippet = string.substring(0, event.target.value.length);

        // we need to compare strings that are the exact same length. That allows us to run something like a simple for loop.
		for (let i = 0; i < mySnippet.length; i++) {
			if (mySnippet[i] !== event.target.value[i].toLowerCase()) distance++;
		}
		if (distance > 3) return false;
		return true;
	}
    
    const handleFilter = (event) => {
        let result = attractions.filter(attraction => {

            // an if statement measures either true or false
            // inputIsClose() returns... true or false
            //rather than a strict equals, what if we run inputIsClose, comparing our input to each of these values?
            console.log(attraction.name);
        if( inputIsClose(event, attraction.city)
            || inputIsClose(event, attraction.name)
            || inputIsClose(event, attraction.genre)
            ) 
            return attraction;
        }) 
        console.log(result);
        return setFilter(result);
    }

    const handleChange = (event) =>{
        setInput(event.target.value);
        handleFilter(event);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        setInput('');
    }
        
    return (
        <div className="category-parent">
       
            <form  className="search-form"action="/" method="get" onSubmit={handleSubmit}>
                <h4 className="search-label">Search by city, name, or type!</h4>

                <input id="cati-id"type="text" name="search" placeholder="Search" onChange={handleChange} value={input} />
            </form>
     
        <div className='result'>
                {filter.map((itemAttraction)=>{
                    return(
                        <card className="category-link" >

                        <Link to={`/attractions/${itemAttraction._id}`}>
                        <h2>{itemAttraction.name}</h2>
                        <h4>{itemAttraction.genre}</h4>
                        </Link>
                        </card>
                    )   
                })}
        </div>
        </div>
);
}

export default Category;

// {
    //    attractions.filter((elem) =>{ 
        
        //     // IF this elem matches our search criteria, then return its details
        //     // if(elem === inpu)
        //           return(
            //              <div>
            //                 <h2>{elem.name}</h2> 
            //              </div>
            //     )
            
            // })
            
            // }       
            /* 
            we might need another STATE VARIABLE to hold the filtered result.
            we need a function that FILTERS our attractions according to the input.
            we need a handleChange to update our input as the user changes it.
            we may need a handleSubmit to fire our FILTER logic.
             we need to RETURN the filtered result
             we need to TAKE our user input.
            
                const params = new URLSearchParams([['answer', 42]]);
                
                const res = await axios.get('https://httpbin.org/get', { params });
                res.data.args; // { answer: 42 }
            // THis is where the function for inputing the user text will reside 
            */