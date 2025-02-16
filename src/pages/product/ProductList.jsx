import useGetProductList from '../../hooks/apis/product/useGetProductList';
import useDeleteProduct from '../../hooks/apis/product/useDeleteProduct';
import useGetCategoryList from '../../hooks/apis/category/useGetCategoryList';
import { useSearchParams } from 'react-router-dom';
import ListSkeleton from '../../skeleton/ListSkeleton';
import PropTypes from 'prop-types';
import EmptyBox from '../../components/EmptyBox';
import Button from '../../components/Button';
import Pagination from '../../components/Pagination';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { numberToCurrency } from '../../helpers/Number';
import { Link } from 'react-router-dom';
import { statusList } from '../../values';
const ProductList = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { data: products, isLoading: isProductLoading } = useGetProductList({
		params: {
			_page: searchParams.get('_page'),
			_per_page: searchParams.get('_per_page'),
		},
	});
	const { data: categories, isLoading: isCategoriesLosding } = useGetCategoryList();

	if (isProductLoading || isCategoriesLosding) return <ListSkeleton />;

	return (
		<div className="page">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl">لیست محصولات</h1>
				<Link
					className="btn blue"
					to="/product/add"
				>
					افزودن محصول
				</Link>
			</div>
			{products?.data?.length === 0 && (
				<EmptyBox
					title="هیچ محصولی وجود ندارد."
					text="لطفا یک محصول به لیست محصولات اضافه کنید."
				/>
			)}
			{products?.data?.length > 0 && (
				<>
					<div className="table-wrapper">
						<table>
							<thead>
								<tr>
									<th>ردیف</th>
									<th>عنوان محصول</th>
									<th>دسته بندی</th>
									<th>قیمت</th>
									<th>تخفیف</th>
									<th>تعداد</th>
									<th>وضعیت</th>
									<th className="row">عملیات</th>
								</tr>
							</thead>
							<tbody>
								{products?.data?.map((product, index) => (
									<TableRow
										key={product.id}
										row={index + 1}
										{...product}
										categories={categories}
										// id={product.id}
										// title={product.title}
										// price={product.price}
										// discount={product.discount}
										// count={product.count}
										// category={product.category}
										// status={product.status}
									/>
								))}
							</tbody>
						</table>
					</div>
					<Pagination
						totalPages={products?.pages}
						currentPage={!products?.prev ? 1 : products?.prev + 1}
					/>
				</>
			)}
		</div>
	);
};

const TableRow = ({ row, id, title, price, discount, count, status, category, categories }) => {
	const deleteProduct = useDeleteProduct({});
	return (
		<tr key={id}>
			<td>{row}</td>
			<td>{title}</td>
			<td>{categories.find((cat) => cat.id === category)?.title}</td>
			<td>{numberToCurrency(+price)}تومان</td>
			<td>{discount || 0}</td>
			<td>{count}</td>
			<td>{statusList.find((st) => st.value === status)?.label}</td>
			<td>
				<div className="btns flex items-center gap-4">
					<Button
						icon={<MdEdit size={18} />}
						color="green"
						to={`/product/edit/${id}`}
					/>
					<Button
						icon={<MdDelete size={18} />}
						color="red"
						loading={deleteProduct.isPending}
						onClick={() => {
							deleteProduct.mutate(id);
						}}
					/>
				</div>
			</td>
		</tr>
	);
};
TableRow.propTypes = {
	row: PropTypes.number,
	id: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.number,
	discount: PropTypes.number,
	count: PropTypes.number,
	status: PropTypes.string,
	category: PropTypes.string,
	categories: PropTypes.array,
};
export default ProductList;
