import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const useAddProduct = ({ onAdd = () => {} }) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data) =>
			axios.post('http://localhost:1000/product', data).then((res) => res.data),
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
