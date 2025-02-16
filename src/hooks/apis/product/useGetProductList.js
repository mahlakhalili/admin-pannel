import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../apiClient';

const useGetProductList = ({ params }) => {
	return useQuery({
		queryKey: ['products'],
		queryFn: (data) =>
			apiClient
				.get(
					'/product',
					{ params: { _page: params._pages ?? 1, _per_page: params._per_page ?? 5 } },
					data
				)
				.then((res) => res.data),
	});
};

export default useGetProductList;
