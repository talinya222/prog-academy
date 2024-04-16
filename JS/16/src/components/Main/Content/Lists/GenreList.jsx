import React from 'react';

function GenreList({ arr, style }) {
	function createListItems(arr) {
		return arr.map((text, index) => <li key={index} className={style.item}>{text}</li>);
	}

	return (
		<>
			<ul className={style.list}>
				{createListItems(arr)}
			</ul>
		</>
	);
}

export default GenreList;