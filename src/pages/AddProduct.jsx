import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/product/ProductForm';
import useAddProduct from '../hooks/apis/product/useAddProduct';
const AddProduct = () => {
	const navigate = useNavigate();
	const addProduct = useAddProduct({
		onAdd: () => navigate('/product/list'),
	});

	return (
		<div className="grid gap-4 font-normal">
			<h1 className="text-2xl">افزودن محصول</h1>
			<ProductForm
				mode="ADD"
				isAdding={addProduct.isPending}
				onAdd={(formData) => {
					addProduct.mutate(formData);
				}}
			/>
		</div>
	);
};

export default AddProduct;
