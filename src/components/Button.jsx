import PropTypes from 'prop-types';
import { BiLoaderAlt } from 'react-icons/bi';
const Button = ({
	text,
	onClick,
	color = '',
	type = 'button',
	loading = false,
	disable = false,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={loading || disable}
			className={`btn ${color}`}
		>
			{loading ? <BiLoaderAlt className="animate-spin" /> : text}
		</button>
	);
};
Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	loading: PropTypes.bool,
	disable: PropTypes.bool,
	color: PropTypes.oneOf(['blue', 'green', 'red']),
	type: PropTypes.oneOf(['button', 'submit']),
};
export default Button;
