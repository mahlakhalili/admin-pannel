import useGetCategoryList from '../../hooks/apis/category/useGetCategoryList';
import ListSkeleton from '../../skeleton/ListSkeleton';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import EmptyBox from '../../components/EmptyBox';
import { Link } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
const CategoryList = () => {
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
		</div>
	);
};

export default CategoryList;
