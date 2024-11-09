import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetProductList = () => {
	return useQuery({
		queryKey: ['products'],
		queryFn: (data) => axios.get('http://localhost:1000/product', data).then((res) => res.data),
	});
};

export default useGetProductList;
