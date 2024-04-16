import SliderButtonsStyle from './SliderControlsStyle.module.css'
import Button from 'components/Common/Button/Button';
import { useSwiper } from 'swiper/react';
import React from 'react';

function SliderControls(props) {
	const swiper = useSwiper();
	return (
		<>
			<div className={SliderButtonsStyle.controls}>
				<Button
					children={''}
					style={SliderButtonsStyle}
					className={SliderButtonsStyle.prev}
					onClick={() => swiper.slidePrev()}
				></Button>
				<Button
					children={''}
					style={SliderButtonsStyle}
					className={SliderButtonsStyle.next}
					onClick={() => swiper.slideNext()}
				></Button>
			</div>
		</>
	);
}

export default SliderControls;