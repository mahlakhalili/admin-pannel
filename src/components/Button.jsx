import PropTypes from 'prop-types';
const Button = ({ text, onClick, color = '', type = 'button' }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`btn ${color}`}
		>
			{text}
		</button>
	);
};
Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	color: PropTypes.oneOf(['blue', 'green', 'red']),
	type: PropTypes.oneOf(['button', 'submit']),
};
export default Button;
