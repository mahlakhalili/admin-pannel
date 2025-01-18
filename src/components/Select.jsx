import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';
const Select = (
	label,
	name = '',
	defaultValue = '',
	className = '',
	options = [],
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
			<select
				{...field}
				onChange={(e) => {
					onChange(e.target.value, e);
					if (field) return field.onChange(e);
				}}
			>
				{options.map((option, index) => (
					<option
						key={index}
						value={option.value}
					>
						{option.label}
					</option>
				))}
			</select>

			{fieldState?.error && (
				<span className="text-red-600 text-sm">{fieldState.error.message}</span>
			)}
		</div>
	);
};

export default Select;
