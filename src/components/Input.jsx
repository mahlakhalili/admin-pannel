import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';
import { numberToCurrency } from '../helpers/Number';
const Input = ({
	label,
	type = 'text',
	placeholder = '',
	name = '',
	defaultValue = '',
	mode = 'INPUT',
	className = '',
	rules = {},
}) => {
	const { control, watch } = useFormContext();
	const { field, fieldState } = useController({
		control,
		defaultValue,
		name,
		rules,
	});
	const Tag = mode === 'INPUT' ? 'input' : 'textarea';
	return (
		<div className={`form-input ${className}`}>
			<label>{label}</label>
			<Tag
				{...field}
				type={type === 'currency' ? 'number' : type}
				placeholder={placeholder}
			/>
			{type === 'currency' && (
				<span className="text-end text-gray-700 text-xs">
					{numberToCurrency(watch(name))} تومان
				</span>
			)}

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
	mode: PropTypes.oneOf(['INPUT', 'TEXTAREA']),
	className: PropTypes.string,
};
export default Input;
