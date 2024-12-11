import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../../apiClient';
import { toast } from 'react-toastify';

const useEditProduct = ({ onEdit = () => {} }) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data) => apiClient.patch(`/product/${data.id}`).then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['products'],
			});
			onEdit();
			toast.success('محصول با موفقیت ویرایش شد');
		},
	});
};
export default useEditProduct;
