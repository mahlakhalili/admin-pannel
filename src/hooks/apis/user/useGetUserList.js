import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../apiClient';

const useGetUserList = ({ params }) => {
	return useQuery({
		queryKey: params ? ['users', params] : ['users'],
		queryFn: () =>
			apiClient
				.get(
					'/users',
					{ params: { _page: params._page ?? 1, _per_page: params._per_page ?? 5 } },
					
				)
				.then((res) => res.data),
	});
};

export default useGetUserList;
