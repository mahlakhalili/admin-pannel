import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../../apiClient';
import { toast } from 'react-toastify';

const useDeleteProduct = ({ onDelete = () => {} }) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id) => apiClient.delete(`/product/${id}`).then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['products'],
			});
			onDelete();
			toast.success('محصول با موفقیت حذف شد');
		},
	});
};

export default useDeleteProduct;
