import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const useAddProduct = () => {
	return useMutation({
		mutationFn: (data) =>
			axios.post('http://localhost:1000/product', data).then((res) => res.data),
		onSuccess: () => {
			toast.success('محصول با موفقیت افزوده شد');
		},
	});
};

export default useAddProduct;
