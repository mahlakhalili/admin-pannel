import useGetCategoryList from '../../hooks/apis/category/useGetCategoryList';
import ListSkeleton from '../../skeleton/ListSkeleton';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import EmptyBox from '../../components/EmptyBox';
import { Link } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
const CategoryList = () => {
	const { data: categories, isLoading } = useGetCategoryList();
	if (isLoading) return <ListSkeleton />;
	return (
		<div className="page">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl">لیست دسته بندی ها</h1>
				<Link
					className="btn blue"
					to="/category/add"
				>
					افزودن دسته بندی
				</Link>
			</div>
			{categories?.length === 0 && (
				<EmptyBox
					title="هیچ دسته بندی وجود ندارد."
					text="لطفا یک دسته بندی به لیست اضافه کنید."
				/>
			)}
			{categories?.length > 0 && (
				<div className="table-wrapper">
					<table>
						<thead>
							<tr>
								<th>ردیف</th>
								<th>عنوان دسته بندی</th>
								<th className="row">عملیات</th>
							</tr>
						</thead>
						<tbody>
							{categories?.map((category, index) => (
								<TableRow
									key={category.id}
									row={index + 1}
									// {...product}
									id={category.id}
									title={category.title}
								/>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};
const TableRow = ({ row, id, title }) => {
	return (
		<tr key={id}>
			<td>{row}</td>
			<td>{title}</td>
			<td>
				<div className="btns flex items-center gap-4">
					<Button
						icon={<MdEdit size={18} />}
						color="green"
						to={`/category/edit/${id}`}
					/>
					<Button
						icon={<MdDelete size={18} />}
						color="red"
						// loading={deleteProduct.isPending}
						// onClick={() => {
						// 	deleteProduct.mutate(id);
						// }}
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
};

export default CategoryList;
