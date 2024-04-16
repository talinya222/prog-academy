import './Popular.css'
import Image from 'components/Common/Image/Image';
import Button from 'components/Common/Button/Button';
import SliderControls from './Slider/SliderControls/SliderControls';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

function Popular({ show }) {
	const array = show.concat(show);
	return (
		<>
			<section className="popular">
				<div className="popular__container">
					<Swiper
						slidesPerView={5}
						spaceBetween={40}
						loop={true}
						modules={[Navigation, Pagination]}
						className='swiper-custom'
					>
						{array.map((picture, pictureIndex) => {
							return (
								<SwiperSlide key={pictureIndex + 1}>
									<Button
										href="#"
										className="slider-item"
										style=""
									>
										<Image
											src={picture}
											alt={"tv-show-" + (pictureIndex + 1)}
											className="slider-picture"
										></Image>
									</Button>
								</SwiperSlide>
							);
						})}
						<div className="popular-header">
							<div className="popular-title">pOPULAR THIS WEEK</div>
							<SliderControls></SliderControls>
						</div>
					</Swiper>
				</div>
			</section>
		</>
	);
}

export default Popular;