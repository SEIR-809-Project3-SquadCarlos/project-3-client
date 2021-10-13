import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config';
import './Create.css';
import '../Form.css';

const Create = () => {
 const history = useHistory();
 const [ newAttraction, setNewAttraction ] = useState({});
 const [problem,setProblem] = useState(false);

const handleChange = (event )=>{
    let name =event.target.name;
    let value =event.target.value;

    setNewAttraction({...newAttraction,[name]:value});

}

const handleSubmit = async(event) => {
    event.preventDefault();
    const verify = window.confirm(`Are you sure you want to create this?`)
    if (verify) {
        try {
           const Attraction = await axios.post(`${API_URL}/attractions`, newAttraction)
           
            Attraction.status === (200) && history.push('/')
        } catch (error) {
            setProblem(error)
        }
        
    }
    else{
        return
    }
}

return (
	<>
		{problem && <hh>{problem}</hh>}
		<form className='create-form' onSubmit={handleSubmit}>
			<h2>Please fill this form to add an Attraction</h2>
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
					required
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
					required
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
					value={newAttraction.city}
					placeholder='new city'
					required
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

			<button className='btn-create app-button' type='submit'>
				Submit
			</button>
		</form>
	</>
);
}


export default Create;