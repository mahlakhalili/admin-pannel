import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';
const Input = ({
	label,
	type = 'text',
	placeholder = '',
	name = '',
	defaultValue = '',
	rules={},
}) => {
	const { control } = useFormContext();
	const { field, fieldState } = useController({
		control,
		defaultValue,
		name,
		rules
	});
	return (
		<div className="form-input">
			<label>{label}</label>
			<input
				{...field}
				type={type}
				placeholder={placeholder}
			/>

			{fieldState?.error && (
				<span className="text-red-600 text-sm">{fieldState.error.message}</span>
			)}
		</div>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
	placeholder: PropTypes.string,
	name: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
	rules: PropTypes.object,
};
export default Input;
