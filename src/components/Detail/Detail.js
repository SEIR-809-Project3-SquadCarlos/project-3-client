// import useState and use effect
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import API_URL from '../../config.js';
import "./Detail.css";
import "../Form.css"

const Detail = ({ props }) => {
	/////function logic is here

	// Use state here to represent the attactions
	const [singleAttraction, setSingleAttraction] = useState([]);
	const [edit, setEdit] = useState(false);
	const { id } = useParams();
	const [newObject, setNewObject] = useState({});
	let history = useHistory();
	//  const [name,setName] = useState("");
	//  const [genre,setGenre]=useState("");
	//  const [address, setAddress] = useState("");
	//  const [description, setDescription]= useState("");
	//  const [url, setUrl] = useState("");
	// use effect to get the data and store it in our use state  variable
	useEffect(() => {
		axios
			.get(`${API_URL}/attractions/${id}`)
			.then((item) => setSingleAttraction(item.data))
			.catch((error) => console.error(error));
	}, []);

	// show the proerties of the said attractions
	// have buttons for updating and delete
	const handleChange = (event) => {
		console.log(singleAttraction);
		let name = event.target.name;
		let value = event.target.value;
		//It would be so great if we could update the entire object all at once.
		//In other words, if, when we update the name, the whole singleAttraction object gets passed in.
		setNewObject({ ...newObject, [name]: value });

		// input values and have those saved to the singleAttraction variable
		// name, genre, description, url, address

		//HOWEVER, I don't know how to do that yet, so... why don't we update one piece of singleAttraction at a time?
	};
	// update function needs to have a cancel or confirm change option
	const handleEdit = () => {
		setEdit(!edit);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(newObject);
		// const verify = window.confirm('Do you want to update ?');
		//    if (verify){
		try {
			const newAttraction = await axios.put(
				`${API_URL}/attractions/${id}`,
				newObject
			);

			console.log(newAttraction.status);
			newAttraction.status === 201 && history.push('/');
		} catch (error) {
			console.log(error);
			// }
		}
		// else {
		// 	return;
		// }
	};
	// for the delete function we need to make sure that we have a are you sure option

	const handleDelete = async (event) => {
		const verify = window.confirm('Are you sure you want to delete?');
		if (verify) {
			try {
				const deleteOne = await axios.delete(`${API_URL}/attractions/${id}`);

				deleteOne.status === 204 && history.push('/');
			} catch (error) {
				console.log(error);
			}
		} else {
			return;
		}
	};
	if (!singleAttraction) {
		<h1>loading</h1>;
	}
	return (
		<div className='detail-attraction'>
			<h1>{singleAttraction.name}</h1>
			<ul>
				<li>{singleAttraction.description}</li>
				<li>{singleAttraction.address}</li>
				<li>{singleAttraction.url}</li>
				<li>{singleAttraction.genre}</li>
			</ul>
			<aside className='buttons-flex'>
				<button onClick={handleEdit}>Edit</button>
				<button onClick={handleDelete}>Delete</button>
			</aside>
			{!edit ? (null) : (
			<div className='edit-form'>
				<label htmlFor='update'>Attraction</label>
				<form name='update' onSubmit={handleSubmit}>
					<label htmlFor='name'>Name: </label>
					<input
						onChange={handleChange}
						name='name'
						type='text'
						value={newObject.name}
						placeholder='edit name'
					/>

					<label htmlFor='genre'>Genre: </label>
					<input
						onChange={handleChange}
						name='genre'
						type='text'
						value={newObject.genre}
						placeholder='edit genre'
					/>

					<label htmlFor='address'>Address: </label>
					<input
						onChange={handleChange}
						name='address'
						type='text'
						value={newObject.address}
						placeholder='edit address'
					/>

					<label htmlFor='url'>Website: </label>
					<input
						onChange={handleChange}
						name='url'
						type='text'
						value={newObject.url}
						placeholder='edit website'
					/>

					<label htmlFor='description'>Description: </label>
					<input
						onChange={handleChange}
						name='description'
						type='text'
						value={newObject.description}
						placeholder='edit description'
					/>

					<button type='submit'>Submit</button>
				</form>
			</div>
			)}
		</div>
	);
};
export default Detail;
