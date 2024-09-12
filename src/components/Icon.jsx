import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

const Icon = ({ children, color = 'inherit', className = '', size = 24 }) => {
	return (
		<IconContext.Provider value={{ size }}>
			<div className={`flex ${color} ${className} `}>{children}</div>
		</IconContext.Provider>
	);
};
Icon.propTypes = {
	children: PropTypes.node,
	color: PropTypes.string,
	className: PropTypes.string,
	size: PropTypes.number,
};
export default Icon;
