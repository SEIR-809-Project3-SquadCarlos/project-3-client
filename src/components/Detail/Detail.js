
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import API_URL from '../../config.js';
import "./Detail.css";
import "../Form.css"

const Detail = ({ props }) => {
	
	const [singleAttraction, setSingleAttraction] = useState([]);
	const [edit, setEdit] = useState(false);
	const { id } = useParams();
	const [newObject, setNewObject] = useState({});
	const [problem,setProblem] = useState(false);
	let history = useHistory();
	
	useEffect(() => {
		axios
			.get(`${API_URL}/attractions/${id}`)
			.then((item) => setSingleAttraction(item.data))
			.catch((error) => setProblem(error));
	}, []);

	
	const handleChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		setNewObject({ ...newObject, [name]: value });
	};
	const handleEdit = () => {
		setEdit(!edit);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();		
		try {
			const newAttraction = await axios.put(
				`${API_URL}/attractions/${id}`,
				newObject
			);
			newAttraction.status === 201 && history.push('/');
		} catch (error) {
			setProblem(error);
		}
	};
		const handleDelete = async (event) => {
		const verify = window.confirm('Are you sure you want to delete?');
		if (verify) {
			try {
				const deleteOne = await axios.delete(`${API_URL}/attractions/${id}`);

				deleteOne.status === 204 && history.push('/');
			} catch (error) {
			setProblem(error);
			}
		} else {
			return;
		}
	};
	if (!singleAttraction) {
		<h1>loading</h1>;
	}
	
	return (
		<>
			{!edit ? (
				<>
					{problem && <hh>{problem}</hh>}
					<div className='detail-attraction'>
						<h1 id='detail-item-name'>{singleAttraction.name}</h1>
						<section className='details'>
							<p className='detail-item' id='detail-item-description'>
								{singleAttraction.description}
							</p>
							<li className='detail-item' id='detail-item-address'>
								Address: {singleAttraction.address}
							</li>
							<a
								href={`${singleAttraction.url}`}
								alt='website link'
								className='detail-item'
								id='detail-item-link'>
								Website: {singleAttraction.url}
							</a>
						</section>
						<aside className='buttons-flex'>
							<button className='app-button' onClick={handleEdit}>
								Edit
							</button>
							<button className='app-button' onClick={handleDelete}>
								Delete
							</button>
						</aside>
					</div>
				</>
			) : (
				<div className='detail-modal'>
					<form className='edit-form' name='update' onSubmit={handleSubmit}>
						<div className='label-text'>
							<label htmlFor='name'>Name:</label>
							<input
								id='name'
								onChange={handleChange}
								name='name'
								type='text'
								value={newObject.name}
								placeholder='edit name'
							/>
						</div>
						<div className='label-text'>
							<label htmlFor='genre'>Genre: </label>
							<input
								
								id='genre'
								onChange={handleChange}
								name='genre'
								type='text'
								value={newObject.genre}
								placeholder='edit genre'
							/>
						</div>
						<div className='label-text'>
							<label htmlFor='city'>City: </label>
							<input
							
								id='city'
								onChange={handleChange}
								name='city'
								type='text'
								value={newObject.city}
								placeholder='edit city'
							/>
						</div>
						<div className='label-text'>
							<label htmlFor='address'>Address:</label>
							<input
								id='address'
								onChange={handleChange}
								name='address'
								type='text'
								value={newObject.address}
								placeholder='edit address'
							/>
						</div>
						<div className='label-text'>
							<label htmlFor='url'>Website:</label>
							<input
								id='url'
								onChange={handleChange}
								name='url'
								type='text'
								value={newObject.url}
								placeholder='edit website'
							/>
						</div>
						<div className='label-text'>
							<label htmlFor='description'>Description:</label>
							<input
								id='description'
								onChange={handleChange}
								name='description'
								type='text'
								value={newObject.description}
								placeholder='edit description'
								width='100'
								height='100'
							/>
						</div>
						<aside className='form-buttons-flex'>
							<button className='app-button' type='submit'>
								Submit
							</button>
							<button className='app-button' onclick={handleEdit}>
								Cancel
							</button>
						</aside>
					</form>
				</div>
			)}
		</>
	);
};
export default Detail;
