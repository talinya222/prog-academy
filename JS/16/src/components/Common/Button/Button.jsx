import React from 'react';
import PropTypes from 'prop-types'
import mainStyle from './Button.module.css'

const Button = ({
	children, style, onClick, className, disabled, active, icon, ...attrs
}) => {
	const classes = style == '' ? mainStyle.btn : style.btn + ' ' + mainStyle.btn;
	const isAtive = !active ? '' : style == '' ? mainStyle.active : style.active
	const Tag = attrs.href ? 'a' : 'button';

	const onClickAction = e => {
		if (disabled) {
			e.preventDefault();
		} else {
			return onClick(e);
		}
	}

	return (
		<Tag
			{...attrs}
			className={classes + ' ' + className + ' ' + isAtive}
			onClick={onClickAction}
			disabled={disabled}
		>{children}{icon}</Tag>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	active: PropTypes.bool,
};
Button.defaultProps = {
	children: "Default button",
	onClick: () => { },
	className: '',
	disabled: false,
	active: false,
};

export default Button;