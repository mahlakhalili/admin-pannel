import { useController, useFormContext } from 'react-hook-form';
import Input from './Input';
const Checkbox = ({ label, name, defaultValue, rules, className = '' }) => {
	const { control, watch } = useFormContext();
	const { field, fieldState } = useController({
		control,
		defaultValue,
		name,
		rules,
	});
	return (
		<div className="flex items-center gap-2">
			<Input
				type="checkbox"
				class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
			/>
			<label className=" text-sm font-medium text-gray-900 dark:text-gray-300">
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
