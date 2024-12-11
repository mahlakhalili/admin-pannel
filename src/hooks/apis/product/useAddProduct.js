import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../../apiClient';

import { toast } from 'react-toastify';

const useAddProduct = ({ onAdd = () => {} }) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data) => apiClient.post('/product', data).then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['products'],
			});
			onAdd();
			toast.success('محصول با موفقیت افزوده شد');
		},
	});
};

export default useAddProduct;
