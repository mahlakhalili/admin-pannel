import PropTypes from 'prop-types';
const Input = ({ label, type = 'text', placeholder = '' }) => {
	return (
		<div className="form-input">
			<label>{label}</label>
			<input
				type={type}
				placeholder={placeholder}
			/>
		</div>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	type: PropTypes.oneOf(['text' , 'email' , 'password' , 'number' ]),
	placeholder: PropTypes.string,
};
export default Input;
