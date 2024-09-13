import ProductForm from '../components/product/ProductForm';
const AddProduct = () => {
	return (
		<div className='grid gap-4 font-normal'>
      <h1 className='text-2xl'>افزودن محصول</h1>
			<ProductForm />
		</div>
	);
};

export default AddProduct;
