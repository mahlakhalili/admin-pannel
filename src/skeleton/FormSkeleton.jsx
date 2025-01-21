import PropTypes from 'prop-types';
const FormSkeleton = () => {
	return (
		<div className="page">
			<div className="skeleton w-40 h-8"></div>
			<div className="grid grid-cols-2 gap-4">
				<InputSkeleton />
				<InputSkeleton />
				<InputSkeleton className="col-span-2" />
				<InputSkeleton />
				<InputSkeleton />
				<InputSkeleton />
				<InputSkeleton />
				<InputSkeleton />
				<InputSkeleton />
			</div>
		</div>
	);
};

export const InputSkeleton = ({ className = '' }) => {
	return (
		<div className={`grid gap-2 ${className}`}>
			<div className="skeleton h-3 w-20"></div>
			<div className="skeleton h-10"></div>
		</div>
	);
};
const TeaxtareaSkeleton = ({ className = '' }) => {
	return (
		<div className={`grid gap-2 ${className}`}>
			<div className="skeleton h-3 w-20"></div>
			<div className="skeleton h-10"></div>
		</div>
	);
};

InputSkeleton.propTypes = {
	className: PropTypes.string,
};
TeaxtareaSkeleton.propTypes = {
	className: PropTypes.string,
};

export default FormSkeleton;
