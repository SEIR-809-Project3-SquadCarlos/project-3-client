import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config';
import '../../App.css';
import './Home.css';

const Home = () => {
	const [attractions, setAttractions] = useState([]);
	const [problem, setProblem] = useState(false);

	const getAttractions = async () => {
		try {
			const res = await axios.get(`${API_URL}/attractions`);
			setAttractions(res.data);
		} catch (error) {
			setProblem(error);
		}
	};
	useEffect(() => {
		getAttractions();
	}, []);

	return (
		<>
		{ problem && <hh>{problem}</hh> }
		<h1 className="headline">Welcome to Tou:Ring!</h1>
			<div className='attraction-list'>
			
				{attractions.map((attraction) => {
					return (
						<Link className="attraction" to={`/attractions/${attraction._id}`}>
							<div  key={attraction.id}>
								<h2>{attraction.name}</h2>
								<h4>{attraction.city}</h4>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Home;
