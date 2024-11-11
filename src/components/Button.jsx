import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BiLoaderAlt } from 'react-icons/bi';
const Button = ({
	text,
	onClick,
	color = '',
	type = 'button',
	loading = false,
	disabled = false,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={loading || disabled}
			className={classNames({
				btn: true,
				[color]: color,
				disabled: loading || disabled,
			})}
		>
			{loading ? <BiLoaderAlt className="animate-spin" /> : text}
		</button>
	);
};
Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	loading: PropTypes.bool,
	disabled: PropTypes.bool,
	color: PropTypes.oneOf(['blue', 'green', 'red']),
	type: PropTypes.oneOf(['button', 'submit']),
};
export default Button;
