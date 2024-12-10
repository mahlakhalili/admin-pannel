import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const useEditProduct = ({ onEdit = () => {} }) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data) =>
			axios.patch(`http://localhost:1000/product/${data.id}`).then((res) => res.data),
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
