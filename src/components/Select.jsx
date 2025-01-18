import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';
const Select = (
	label,
	placeholder = '',
	name = '',
	defaultValue = '',
	className = '',
	rules = {},
	onChange = () => {}
) => {
	const { control } = useFormContext();
	const { field, fieldState } = useController({
		control,
		defaultValue,
		name,
		rules,
	});
	return (
		<div className={`form-input ${className}`}>
			<label>{label}</label>
			<select></select>

			{fieldState?.error && (
				<span className="text-red-600 text-sm">{fieldState.error.message}</span>
			)}
		</div>
	);
};

export default Select;
