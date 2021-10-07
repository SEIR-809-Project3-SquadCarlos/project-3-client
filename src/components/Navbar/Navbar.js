import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
	return (
		<Nav>
			<Nav.Item>
				<Nav.Link href="/">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/create">Create</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default Navbar;
