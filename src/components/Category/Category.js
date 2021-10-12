import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API_URL from '../../config';

const Category = () => {
    const [attractions,setAttractions]=useState([]);
    const [input, setInput ]=useState('');
    const [filter,setFilter]=useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/attractions`)
        // .then(res=>console.log('result: ', res))
        .then(res=>setAttractions(res.data))
        .then(console.log('attractions: ', attractions))
        .catch(console.error)
    }, []);

    
    const handleFilter = () => {
        let result = attractions.filter(attraction => {
            if(attraction.city === input 
                || attraction.genre === input 
                || attraction.name === input
                ) 
                return attraction;
            })
            console.log(result);
        return setFilter(result);
    }

    const handleChange = (event) =>{
        setInput(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        handleFilter();
        setInput('');
    }
        
    return (
        <>
        <div>
            <form action="/" method="get" onSubmit={handleSubmit}>
                {/* <select name="key" id="key">
                    <option value="city">city</option>
                    <option value="genre">genre</option>
                    <option value="name">Name</option>
                </select> */}

                <input type="text" placeholder="Search" onChange={handleChange} value={input} />
                <button type="submit">Submit</button>
            </form>
        </div>
        <div>
                {filter.map((itemAttraction)=>{
                    return(
                        <card>

                        <Link className="category-link" to={`/attractions/${itemAttraction._id}`}>
                        <h2>{itemAttraction.name}</h2>
                        <h4>{itemAttraction.genre}</h4>
                        </Link>
                        </card>
                    )
                    
                })}
        </div>
        </>
        
            

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