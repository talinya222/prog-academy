import './Content.css'
import GenreList from './Lists/GenreList'
import GenreListStyle from './Lists/GenreList.module.css';
import InfoList from './Lists/InfoList'
import InfoListStyle from './Lists/InfoList.module.css';
import Rating from './Rating/Rating';
import Button from 'components/Common/Button/Button';
import ButtonStyle from './Button.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'


function Content(props) {
	const genres = props.genres;
	const info = props.info;
	const spans = props.spans;
	let icon = <FontAwesomeIcon icon={faCirclePlay} />;

	return (
		<>
			<section className="content">
				<div className="content__container">
					<div className="content-genre">
						<GenreList arr={genres} style={GenreListStyle}></GenreList>
					</div>
					<div className="content-main-title">Stranger Things</div>
					<div className="content-info">
						<InfoList info={info} style={InfoListStyle} spans={spans}></InfoList>
					</div>
					<p className="content-text">
						In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
					</p>
					<Rating></Rating>
					<div className="content-actions">
						<Button
							children={'sTREAM NOW'}
							icon={icon}
							className={'stream-now-btn'}
							style={ButtonStyle}
						></Button>
						<Button
							children={'aLL EPISODES'}
							style={ButtonStyle}
						></Button>
					</div>
				</div>
			</section>
		</>
	);
}

export default Content;