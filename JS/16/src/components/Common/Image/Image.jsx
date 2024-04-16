import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const Image = ({
	src, alt, className, circle
}) => {

	return (
		<img
			src={src}
			alt={alt}
			className={circle ? className + ' ' + 'circle' : className}
		/>
	);
}

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	className: PropTypes.string,
	circle: PropTypes.bool,
};
Image.defaultProps = {
	src: 'vite.svg',
	alt: 'image name',
	className: '',
	circle: false,
};

export default Image;