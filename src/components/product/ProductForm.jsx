import { FormProvider, useForm } from 'react-hook-form';
import Input from '../Input';
import Button from '../Button';

const ProductForm = () => {
	const formMethods = useForm();
	return (
		<FormProvider {...formMethods}>
			<form className="form grid grid-cols-3 gap-4">
				<Input
					name="title"
					label="عنوان"
					rules={{
						required: 'عنوان را وارد کنید',
					}}
					className="col-span-3"
				/>
				<Input
					mode="TEXTAREA"
					name="description"
					label="توضیحات"
					className="col-span-3"
				/>
				<Input
					name="price"
					label="قیمت"
					type="number"
				/>
				<Input
					name="discount"
					label="تخفیف"
					type="number"
				/>
				<Input
					name="count"
					label="تعداد"
					type="number"
				/>
				<div className="btn blue flex justify-center items-center col-span-3 mt-4 text-lg">
					<Button
						type="submit"
						text="ذخیره"
						onClick={formMethods.handleSubmit((formData) => {
							console.log(formData);
						})}
					/>
				</div>
			</form>
		</FormProvider>
	);
};

export default ProductForm;

