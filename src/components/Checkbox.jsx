import { useController, useFormContext } from 'react-hook-form';
const Checkbox = ({label ,name , defaultValue , rules}) => {
	const { control, watch } = useFormContext();
	const { field, fieldState } = useController({
		control,
		defaultValue,
		name,
		rules,
	});
	return <div></div>;
};

export default Checkbox;
