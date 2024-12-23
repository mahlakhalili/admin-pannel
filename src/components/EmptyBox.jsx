import PropTypes from 'prop-types';

const EmptyBox = ({ title, text }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-6 py-10">
			<h2>{title}</h2>
			<p>{text}</p>
		</div>
	);
};
EmptyBox.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
};

export default EmptyBox;
