import React from 'react';
import Content from './Content/Content';
import Popular from './Popular/Popular';
import show1 from 'assets/img/popular/popular-tv-show-1.jpg'
import show2 from 'assets/img/popular/popular-tv-show-2.jpg'
import show3 from 'assets/img/popular/popular-tv-show-3.jpg'
import show4 from 'assets/img/popular/popular-tv-show-4.jpg'
import show5 from 'assets/img/popular/popular-tv-show-5.jpg'

function Main() {
	const genres = ['Drama', 'Thriller', 'Supernatural'];
	const tvShowInfo = ['2019', 'Shawn Levy', '3 (5 Episodes)'];
	const spans = ['dIRECTOR:', 'seasons:'];
	const popularShows = [show1, show2, show3, show4, show5]

	return (
		<>
			<Content genres={genres} info={tvShowInfo} spans={spans}></Content>
			<Popular show={popularShows}></Popular>
		</>
	);
}

export default Main;