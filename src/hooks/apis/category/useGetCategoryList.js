import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../apiClient';

const useGetCategoryList = () => {
	return useQuery({
		queryKey: ['category'],
		queryFn: (data) => apiClient.get('/category', data).then((res) => res.data),
	});
};

export default useGetCategoryList;