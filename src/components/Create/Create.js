import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config';
import './Create.css';
import '../Form.css';

const Create = () => {
 const history = useHistory();
//  const {id}= useParams();

// STATE variables
// newAttraction - an object modeled EXACTLY like our attractionSchema
 const [ newAttraction, setNewAttraction ] = useState({});
//  const [newValue, setNewValue]= userState([])

const handleChange = (event )=>{
    let name =event.target.name;
    let value =event.target.value;

    setNewAttraction({...newAttraction,[name]:value});

}

// useEffect - is used when a component MOUNTS 

// FUNCTIONS

// onSubmit
    // Run a POST Request, passing in the newAttraction that the user created.
    // Return our user to the Home page after submitting!
const handleSubmit = async(event) => {
    event.preventDefault();
    console.log('hi')
    const verify = window.confirm(`Are you sure you want to create this?`)
    if (verify) {
        try {
           const Attraction = await axios.post(`${API_URL}/attractions`, newAttraction)
           console.log(Attraction.status)
           
            Attraction.status === (200) && history.push('/')
        } catch (error) {
            console.error(error)
        }
        
    }
    else{
        return
    }
}
// update


// RETURN
return (
	< >
		<form className='create-form' onSubmit={handleSubmit}>
		<h2>Please fill this form for create new Attraction</h2>
			<div className='label-input'>
				<label htmlFor='id'>Name :</label>
				<input
					id='id'
					className='input-create'
					onChange={handleChange}
					name='name'
					type='text'
					value={newAttraction.name}
					placeholder='new name'
				/>
			</div>
			<div className='label-input'>
			<label htmlFor='genre'>Genre :</label>
			<input
				id='genre'
				className='input-create'
				onChange={handleChange}
				name='genre'
				type='text'
				value={newAttraction.genre}
				placeholder='new genre'
			/>
			</div>

			<div className='label-input'>
			<label htmlFor='city'>City: </label>
			<input
				id='city'
				className='input-create'
				onChange={handleChange}
				name='city'
				type='text'
				value={newAttraction.genre}
				placeholder='new genre'
			/>
			</div>

			<div className='label-input'>
			<label htmlFor='address'>Address :</label>
			<input
				id='address'
				className='input-create'
				onChange={handleChange}
				name='address'
				type='text'
				value={newAttraction.address}
				placeholder='new address'
			/>
			</div>
			<div className='label-input'>
			<label htmlFor='url'>Website :</label>
			<input
				id='url'
				className='input-create'
				onChange={handleChange}
				name='url'
				type='text'
				value={newAttraction.url}
				placeholder='new website'
			/>
			</div>

			<div className='label-input'>
			<label htmlFor='description'>Description :</label>
			<input
				id='description'
				className='input-create'
				onChange={handleChange}
				name='description'
				type='text'
				value={newAttraction.description}
				placeholder='new description'
			/>
			</div>

			<button className='btn-create' type='submit'>
				Submit
			</button>
		</form>
	</>
);
}
// Let's make a form that the user can fill out.
// It should include INPUTS for:
// name
// genre
    //   address
    //   website
    //   description
// Our inputs will update state variables onChange
// onSubmit, we will run our POST request using the completed model!

// export default Create

export default Create;