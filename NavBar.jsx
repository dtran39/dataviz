import React from 'react'
import navStyles from './mainStyles'

class NavBar extends React.Component {
	render() {
		return (
			<ul className='NavBar'>
				<li>
					<h3>Welcome</h3>
				</li>
				<li>
					<a href='#'>Test</a>
				</li>
			</ul>
		);
	}
}

export default NavBar