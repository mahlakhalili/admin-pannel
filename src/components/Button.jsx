import PropTypes from 'prop-types';
const Button = ({ text, onClick, type = 'button' }) => {
	return <button onClick={onClick}>{text}</button>;
};
Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'submit']),
};
export default Button;
