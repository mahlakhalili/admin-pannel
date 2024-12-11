import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BiLoaderAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Button = ({
	text,
	onClick,
	to,
	color = '',
	type = 'button',
	loading = false,
	disabled = false,
}) => {
	const Tag = to ? Link : 'button'
	return (
		<Tag
			type={type}
			onClick={onClick}
			disabled={loading || disabled}
			className={classNames({
				btn: true,
				[color]: color,
				disabled: loading || disabled,
			})}
			to={to}
		>
			{loading ? <BiLoaderAlt className="animate-spin" /> : text}
		</Tag>
	);
};
Button.propTypes = {
	text: PropTypes.string,
	to:PropTypes.string,
	onClick: PropTypes.func,
	loading: PropTypes.bool,
	disabled: PropTypes.bool,
	color: PropTypes.oneOf(['blue', 'green', 'red' ,'outline-red']),
	type: PropTypes.oneOf(['button', 'submit']),
};
export default Button;
