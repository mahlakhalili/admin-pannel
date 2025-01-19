import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../../apiClient';

import { toast } from 'react-toastify';

const useAddCategory = ({ onAdd = () => {} }) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data) => apiClient.post('/category', data).then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['category'],
			});
			onAdd();
			toast.success('دسته بندی با موفقیت افزوده شد');
		},
	});
};

export default useAddCategory;
