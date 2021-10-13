import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API_URL from '../../config';
import './Category.css';

const Category = () => {
    const [attractions,setAttractions]=useState([]);
    const [input, setInput ]=useState('');
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
    
    const inputIsClose = (event, string)  => {
		let mySnippet = '';
		let distance = 0; 
		if (!string) return false;
		if (event.target.value.length < 3) return false;
       
		mySnippet = string.substring(0, event.target.value.length);

       
		for (let i = 0; i < mySnippet.length; i++) {
			if (mySnippet[i] !== event.target.value[i].toLowerCase()) distance++;
		}
		if (distance > 3) return false;
		return true;
	}
    
    const handleFilter = (event) => {
        let result = attractions.filter(attraction => {

            
        if( inputIsClose(event, attraction.city)
            || inputIsClose(event, attraction.name)
            || inputIsClose(event, attraction.genre)
            ) 
            return attraction;
        }) 
        
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
			<div className='category-parent'>
				{problem && <hh>{problem}</hh>}
				<form
					className='search-form'
					action='/'
					method='get'
					onSubmit={handleSubmit}>
					<h4 className='search-label'>Search by city, name, or type!</h4>

					<input
						id='cati-id'
						type='text'
						name='search'
						placeholder='Search'
						onChange={handleChange}
						value={input}
					/>
				</form>

				<div className='result'>
					{filter.map((itemAttraction) => {
						return (
							<card className='category-link'>
								<Link to={`/attractions/${itemAttraction._id}`}>
									<h2>{itemAttraction.name}</h2>
									<h4>{itemAttraction.genre}</h4>
								</Link>
							</card>
						);
					})}
				</div>
			</div>
		);
}

export default Category;