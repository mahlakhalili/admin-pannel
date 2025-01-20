import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../../apiClient';
import { toast } from 'react-toastify';

const useDeleteCategory = ({ onDelete = () => {} }) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id) => apiClient.delete(`/category/${id}`).then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['category'],
			});
			onDelete();
			toast.success('دست بندی با موفقیت حذف شد');
		},
	});
};

export default useDeleteCategory;
