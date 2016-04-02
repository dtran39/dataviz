import React from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import GoogleMap from 'react-google-maps';
import SimpleMap from './SimpleMap';

var state = {
  markers: [{
    position: {
      lat: 25.0112183,
      lng: 121.52067570000001,
    },
    key: 'Vietnam',
    defaultAnimation: 2
	}]
};


class Hello extends React.Component {
	render() {
		return (
			<div className='Hello'>
				<NavBar />
				<div className='Main'>
				<SimpleMap  markers={state.markers} />
					<Sidebar />
				</div>
			</div>
		);
	}
}
export default Hello