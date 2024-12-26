import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './Icon';
import { BiLoaderAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Button = ({
	text,
	onClick,
	to,
	icon,
	className = '',
	color = '',
	type = 'button',
	loading = false,
	disabled = false,
}) => {
	const Tag = to ? Link : 'button';
	return (
		<Tag
			type={type}
			onClick={onClick}
			disabled={loading || disabled}
			className={classNames({
				btn: true,
				[color]: color,
				[className]: className,
				disabled: loading || disabled,
			})}
			to={to}
		>
			{loading ? (
				<Icon>
					{' '}
					<BiLoaderAlt />{' '}
				</Icon>
			) : (
				<div className="flex items-center justify-center gap-2">
					{Icon && <Icon>{icon}</Icon>}
					{text && <span>{text}</span>}
				</div>
			)}
		</Tag>
	);
};
Button.propTypes = {
	text: PropTypes.string,
	to: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	loading: PropTypes.bool,
	disabled: PropTypes.bool,
	icon: PropTypes.node,
	color: PropTypes.oneOf(['blue', 'green', 'red', 'outline-red']),
	type: PropTypes.oneOf(['button', 'submit']),
};
export default Button;
