import React from 'react';
import './Header.css';
import LogoAndDate from './LogoAndDate/LogoAndDate';
import UserAccAndSearch from './UserAccAndSearch/UserAccAndSearch';


function Header(props) {
	return (
		<>
			<header className="header">
				<div className="header__container">
					<LogoAndDate></LogoAndDate>
					<UserAccAndSearch></UserAccAndSearch>
				</div>
			</header>
		</>
	);
}

export default Header;