import React from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';

class Hello extends React.Component {
	render() {
		return (
			<div className='Hello'>
				<NavBar />
				<div className='Main'>
					<Sidebar />
				</div>
			</div>
		);
	}
}

export default Hello