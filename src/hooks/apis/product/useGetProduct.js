import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetProduct = ({ productId }) => {
	return useQuery({
		queryKey: ['product', productId],
		queryFn: () =>
			axios.get(`http://localhost:1000/product/${productId}`).then((res) => res.data),
	});
};

export default useGetProduct;
