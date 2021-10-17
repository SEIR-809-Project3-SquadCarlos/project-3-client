import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API_URL from '../../config';
import './Category.css';

const Category = () => {
    const [attractions,setAttractions]=useState([]);
    const [input, setInput ]=useState({});
    const [filter,setFilter]=useState([...attractions]);
    const [problem,setProblem] = useState(false);

const getAttractions = async () => {
		try {
			const res = await axios.get(`${API_URL}/attractions`);
			setAttractions(res.data);
            setFilter(res.data);
		} catch (error) {
			setProblem(error);
		}
	};
  useEffect(() => {
		getAttractions();
	}, []);
    
    const inputIsClose = (value, string)  => {
		let mySnippet = '';
		let distance = 0; 
		if (!value) return false;
		if (value.length < 3) return false;
       
		mySnippet = string.substring(0, value.length);

       
		for (let i = 0; i < mySnippet.length; i++) {
			if (mySnippet[i] !== value[i].toLowerCase()) distance++;
		}
		if (distance > 2) return false;
		return true;
	}
    
    const handleFilter = (event) => {
        let result = attractions.filter(attraction => {

        if( input.city === attraction.city
            || inputIsClose(input.name, attraction.name)
            || inputIsClose(input.genre, attraction.genre)
            ) 
            return attraction;
        }) 
        
        setFilter(result);
    }

    const handleChange = (event) =>{
		let key = event.target.name;
		let value = event.target.value;
        setInput({...input, [key]: value});
		console.log(event.target.name);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        handleFilter(event);
		console.log(input);
        setInput({});
    }
        
    return (
			<>
				{problem && <hh>{problem}</hh>}
				<form
					className='search-form'
					action='/'
					method='get'
					onSubmit={handleSubmit}>

					{/* <label for='citySearch'>Pick a city: </label> */}
					<select name='city' id='citySearch' onChange={handleChange} selected={null} >
						<option value="" disabled>choose a city</option>
						<option value='New York City'>New York City</option>
						<option value='Los Angeles'>Los Angeles</option>
						<option value='New Jersey'>New Jersey</option>
					</select>

					{/* <label for='genre'>Search by genre: </label> */}
					<input
						id=''
						type='text'
						name='genre'
						placeholder='search by genre'
						onChange={handleChange}
						value={input.genre}
					/>

					{/* <label for='name'>Search by name: </label> */}
					<input
						id=''
						type='text'
						name='name'
						placeholder='search by name'
						onChange={handleChange}
						value={input.name}
					/>
					<button type='submit'>Submit</button>
				</form>

				<div className='attraction-list'>
					{filter.map((itemAttraction) => {
						return (
							<div className='attraction'>
								<Link to={`/attractions/${itemAttraction._id}`}>
									<h2>{itemAttraction.name}</h2>
									<h4>{itemAttraction.city}</h4>
								</Link>
							</div>
						);
					})}
				</div>
			</>
		);
}

export default Category;