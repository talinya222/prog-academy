import React from 'react';

function InfoList({ info, style, spans }) {

	function createListItems(arr1, arr2) {
		return arr1.map((el1, index1) => {
			return arr2.map((el2, index2) => {
				if (index1 === (index2 + 1)) {
					return <li key={index1} className={style.item}><span key={index2} className={style.text}>{el2}</span>{el1}</li>
				} else if (index1 === 0 && index2 !== 0) {
					return <li key={index1} className={style.item}>{el1}</li>
				}
			})
		})
	}
	return (
		<>
			<ul className={style.list}>
				{createListItems(info, spans)}
			</ul>
		</>
	);
}

export default InfoList;