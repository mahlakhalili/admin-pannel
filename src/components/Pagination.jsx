import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { numListArray } from '../helpers/Array';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const Pagination = ({ totalPages, currentPage }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<div className="flex items-center -space-x-px h-10 text-base mx-auto">
			<PaginationBtn
				icon={<IoIosArrowForward />}
				className="rounded-s-lg"
				onClick={() =>
					setSearchParams({
						_page: currentPage - 1,
					})
				}
				disabled={currentPage === 1}
			/>
			{numListArray(totalPages).map((page) => (
				<PaginationBtn
					key={page}
					text={page}
					isActive={page === currentPage}
					onClick={() =>
						setSearchParams({
							_page: page,
						})
					}
					disabled={currentPage === totalPages}
				/>
			))}
			<PaginationBtn
				icon={<IoIosArrowBack />}
				className="rounded-e-lg"
				onClick={() =>
					setSearchParams({
						_page: currentPage + 1,
					})
				}
			/>
		</div>
	);
};
const PaginationBtn = ({
	text,
	icon,
	isActive = false,
	disabled = false,
	className = '',
	onClick = () => {},
}) => {
	return (
		<button
			className={classNames({
				'flex items-center justify-center px-4 h-10 leading-tight border': true,
				'z-10  text-blue-600  border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ':
					isActive,
				' text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700':
					!isActive,
				'opacity-70': disabled,
				[className]: className,
			})}
			onClick={onClick}
			disabled={disabled}
		>
			{text ?? icon}
		</button>
	);
};

export default Pagination;
