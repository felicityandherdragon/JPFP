import React from 'react';
import img from '../../public/images/S4_Artboard Copy 6.jpg';

const Home = () => {
	return (
		<div id='display'>
			<div id='home-slider'>
				<h2>Welcome home!</h2>
				<p>
					Best resolution: <b>1200 - 1400px</b> <br /> AKA "I did not manage to
					fix styling issues when screens get bigger or smaller"
				</p>
				<img src={img} />
				<p>
					I added the homepage but then didn't know what extra stuff i can add
					here. So here is one single random image for the homepage.
				</p>
			</div>
		</div>
	);
};

export default Home;
