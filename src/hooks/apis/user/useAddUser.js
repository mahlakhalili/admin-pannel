import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../../apiClient';

import { toast } from 'react-toastify';

const useAddUser = ({ onAdd = () => {} }) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data) => apiClient.post('/users', data).then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['users'],
			});
			onAdd();
			toast.success('کاربر با موفقیت افزوده شد');
		},
	});
};

export default useAddUser;
