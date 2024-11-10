import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const useDeleteProduct = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id) =>
			axios.delete(`http://localhost:1000/product/${id}`).then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['products'],
			});
			toast.success('محصول با موفقیت حذف شد');
		},
	});
};

export default useDeleteProduct;
