import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../apiClient';

const useGetProduct = (productId) => {
	return useQuery({
		queryKey: ['products', productId],
		queryFn: () => apiClient.get(`/product/${productId}`).then((res) => res.data),
	});
};

export default useGetProduct;
