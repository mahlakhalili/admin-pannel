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
			<Tag
				{...field}
				type={type === 'currency' ? 'number' : type}
				placeholder={placeholder}
				onChange={(e) => {
					onChange(e.target.value, e);
					if (field) return field.onChange(e);
				}}
			/>
			{type === 'currency' && (
				<span className="text-end text-gray-700 text-xs">
					{numberToCurrency(+watch(name))} تومان
				</span>
			)}

			{fieldState?.error && (
				<span className="text-red-600 text-sm">{fieldState.error.message}</span>
			)}
		</div>
	);
};

export default Select;
