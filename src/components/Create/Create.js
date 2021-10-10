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
return(
    <div className="container-form">
		<h3>Please fill this form for create new Attraction</h3>
        <form  className="create-form" onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
				<input className="input-create"
					onChange={handleChange}
					name='name'
					type='text'
					value={newAttraction.name}
					placeholder='new name'
				/>

				<label htmlFor='genre'>Genre: </label>
				<input className="input-create"
					onChange={handleChange}
					name='genre'
					type='text'
					value={newAttraction.genre}
					placeholder='new genre'
				/>

				<label htmlFor='address'>Address: </label>
				<input className="input-create"
					onChange={handleChange}
					name='address'
					type='text'
					value={newAttraction.address}
					placeholder='new address'
				/>

				<label htmlFor='url'>Website: </label>
				<input className="input-create"
					onChange={handleChange}
					name='url'
					type='text'
					value={newAttraction.url}
                    placeholder = 'new website'
				/>

				<label htmlFor='description'>Description: </label>
				<input className="input-create"
					onChange={handleChange}
					name='description'
					type='text'
					value={newAttraction.description}
					placeholder='new description'
				/>
                <button className="btn-create" type='submit'>Submit</button>
        </form>
    </div>
)
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