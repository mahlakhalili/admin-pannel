import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const useDeleteProduct = () => {
	return useMutation({
		mutationFn: (id) =>
			axios.delete(`http://localhost:1000/product/${id}`).then((res) => res.data),
		onSuccess: () => {
			toast.success('محصول با موفقیت حذف شد');
		},
	});
};

export default useDeleteProduct;
