import React from 'react';
import {useLocation} from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
	let location = useLocation();
	console.log('location: ',location);
	return (
		<Nav variant="pills" activeKey={location.pathname === "/" ? "/" : '/create'}>
			<Nav.Item>
				<Nav.Link href="/">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/create" eventKey="/create">Create</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default Navbar;
