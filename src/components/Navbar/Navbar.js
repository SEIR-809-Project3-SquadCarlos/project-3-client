import React from 'react';
import {useLocation} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import "./Navbar.css"

const Navbar = () => {
	let location = useLocation();
	console.log('location: ',location);
	return (
		<Nav className="nav" variant="tabs" activeKey={location.pathname}>
			<Nav.Item>
				<Nav.Link className="class" href="/">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/create" eventKey="/create">Create</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/categories">Categories</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default Navbar;
