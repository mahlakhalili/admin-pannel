import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../../apiClient';
import { toast } from 'react-toastify';

const useEditCategory = ({ onEdit = () => {} }) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data) => apiClient.patch(`/category/${data.id}`, data).then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['category'],
			});
			onEdit();
			toast.success('دسته بندی با موفقیت ویرایش شد');
		},
	});
};
export default useEditCategory;
