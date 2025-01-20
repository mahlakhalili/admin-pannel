import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../apiClient';

const useGetCategory = ({ categoryId }) => {
	return useQuery({
		queryKey: ['category', categoryId],
		queryFn: () => apiClient.get(`/product/${categoryId}`).then((res) => res.data),
	});
};

export default useGetCategory;
