import ProductForm from '../components/product/ProductForm';
import useAddProduct from '../hooks/apis/product/useAddProduct';
const AddProduct = () => {
	const addProduct = useAddProduct();

	return (
		<div className="grid gap-4 font-normal">
			<h1 className="text-2xl">افزودن محصول</h1>
			<ProductForm
				onAdd={(formData) => {
					addProduct.mutate(formData);
				}}
			/>
		</div>
	);
};

export default AddProduct;
