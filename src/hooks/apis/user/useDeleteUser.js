import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../../apiClient';
import { toast } from 'react-toastify';

const useDeleteUser = ({ onDelete = () => {} }) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id) => apiClient.delete(`/user/${id}`).then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['users'],
			});
			onDelete();
			toast.success('کاربر با موفقیت حذف شد');
		},
	});
};

export default useDeleteUser;
