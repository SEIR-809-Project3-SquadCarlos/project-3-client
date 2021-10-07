import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
	return (
		<Nav>
			<Nav.Item>
				<Nav.Link>Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link>Create</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default Navbar;
