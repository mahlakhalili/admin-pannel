import PropTypes from 'prop-types';
import Icon from './Icon'
import { FaMagnifyingGlass } from "react-icons/fa6";

const EmptyBox = ({ title, text }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-6 py-10 bg-blue-100 rounded-lg">
			<h2 className="text-gray-900 text-xl">{title}</h2>
			<p className="text-gray-700 text-lg">{text}</p>
		</div>
	);
};
EmptyBox.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
};

export default EmptyBox;
