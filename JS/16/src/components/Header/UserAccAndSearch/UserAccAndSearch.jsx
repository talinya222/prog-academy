import './UserAccAndSearch.css'
import React from 'react';
import Image from 'components/Common/Image/Image';
import acc from 'assets/img/acc-icon.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function UserAccAndSearch(props) {
	return (
		<>
			<div className="header-wrap-acc-and-search">
				<div className="header-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
				<a className="header-acc" href="#">
					<Image
						src={acc}
						alt="user profile photo"
						className="header-acc-icon"
						circle={true}
					></Image>
				</a>
			</div>
		</>
	);
}

export default UserAccAndSearch;