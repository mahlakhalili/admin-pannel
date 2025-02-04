import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';
import classNames from 'classnames';
const Checkbox = ({ label, name, defaultValue, className = '', onChange = () => {} }) => {
	const { control } = useFormContext();
	const { field } = useController({
		control,
		defaultValue,
		name,
	});
	return (
		<label
			className={classNames({
				'flex items-center  gap-2 h-max': true,
				[className]: className,
			})}
		>
			<input
				type="checkbox"
				className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  focus:ring-2 "
				{...field}
				checked={field.value}
				onChange={(e) => {
					const isChecked = e.currentTarget.checked;
					onChange(isChecked);
					field.onChange(e);
				}}
			/>
			<span className=" text-sm font-medium text-gray-900 ">{label}</span>
		</label>
	);
};
Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	defaultValue: PropTypes.bool,
	className: PropTypes.string,
	onChange: PropTypes.func,
};

export default Checkbox;
