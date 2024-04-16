import './Rating.css'
import React from 'react';
import Star from './Star';

function Rating(props) {
	return (
		<>
			<div className="content-rating">
				{[...Array(5)].map((star, index) => {
					return (
						<Star key={index + 1}></Star>
					);
				})}
			</div>
		</>
	);
}

export default Rating;