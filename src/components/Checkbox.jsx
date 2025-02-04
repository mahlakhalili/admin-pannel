import { useController, useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import Input from './Input';
const Checkbox = ({ label, name, defaultValue, rules, className = '', onChange = () => {} }) => {
	const { control, watch } = useFormContext();
	const { field, fieldState } = useController({
		control,
		defaultValue,
		name,
		rules,
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

export default Checkbox;
