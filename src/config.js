const API_URL =
	window.location.hostname === 'localhost'
		? 'http://localhost:3050'
		: 'https://project3-attractions.herokuapp.com';

export default API_URL;
