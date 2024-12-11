import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../apiClient';

const useGetProductList = () => {
	return useQuery({
		queryKey: ['products'],
		queryFn: (data) => apiClient.get('/product', data).then((res) => res.data),
	});
};

export default useGetProductList;
