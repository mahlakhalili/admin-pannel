import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../apiClient';

const useGetProductList = ({ params }) => {
	return useQuery({
		queryKey: params ? ['products', params] : ['products'],
		queryFn: (data) =>
			apiClient
				.get(
					'/product',
					{ params: { _page: params._page ?? 1, _per_page: params._per_page ?? 5 } },
					data
				)
				.then((res) => res.data),
	});
};

export default useGetProductList;
