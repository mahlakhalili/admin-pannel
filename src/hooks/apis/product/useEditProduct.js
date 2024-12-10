import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const useEditProduct = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (data) =>
			axios.patch(`http://localhost:1000/product/${data.id}`).then((res) => res.data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['products'],
			});
			toast.success('محصول با موفقیت ویرایش شد');
		},
	});
};
export default useEditProduct;
