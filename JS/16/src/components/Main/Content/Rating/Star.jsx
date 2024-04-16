import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'

function Star(props) {
	const [isActive, setIsActive] = useState(false)
	const toggleClass = () => {
		setIsActive(!isActive)
	}
	return (
		<div>
			<FontAwesomeIcon icon={faStar} className={!isActive ? 'rating-item' : 'rating-item' + ' ' + '_filled'} onClick={(e) => toggleClass()} />
		</div>
	);
}

export default Star;