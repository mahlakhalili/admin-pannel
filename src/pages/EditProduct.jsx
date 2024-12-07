import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/product/ProductForm';
import useAddProduct from '../hooks/apis/product/useAddProduct';
const EditProduct = () => {
	const navigate = useNavigate();
	const addProduct = useAddProduct({
		onAdd: () => navigate('/product/list'),
	});

	return (
		<div className="grid gap-4 font-normal">
			<h1 className="text-2xl">ویرایش محصول</h1>
			<ProductForm
				isAdding={addProduct.isPending}
				onAdd={(formData) => {
					addProduct.mutate(formData);
				}}
			/>
		</div>
	);
};

export default EditProduct;

