import ProductForm from '../components/product/ProductForm';
import useGetProduct from '../hooks/apis/product/useGetProduct';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
	const { productId } = useParams();
	const { data: product, isLoading } = useGetProduct(productId);
	if (isLoading) return <div> کمی صبر کنید ...</div>;
	return (
		<div className="grid gap-4 font-normal">
			<h1 className="text-2xl">ویرایش محصول</h1>
			<ProductForm
				mode="EDIT"
				data={product}
			/>
		</div>
	);
};

export default EditProduct;
