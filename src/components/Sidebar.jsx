import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { CiBoxList } from 'react-icons/ci';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BiCategory } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';

const Sidebar = () => {
	const navBar = [
		{
			label: 'محصول',
			icon: <MdOutlineProductionQuantityLimits />,
			subMenu: [
				{
					label: 'لیست محصولات',
					icon: <CiBoxList />,
					href: '/product/list',
				},
				{
					label: 'افزودن محصولات',
					icon: <IoIosAddCircleOutline />,
					href: '/product/add',
				},
			],
		},
		{
			label: 'دسته بندی',
			icon: <BiCategory />,
			subMenu: [
				{
					label: 'لیست دسته بندی',
					icon: <CiBoxList />,
					href: '/category/list',
				},
				{
					label: 'افزودن دسته بندی',
					icon: <IoIosAddCircleOutline />,
					href: '/category/add',
				},
			],
		},
	];
	// const navbar = [
	// 	{
	// 		icon: <FaList />,
	// 		text: 'لیست محصولات',
	// 		link: '/product/list',
	// 	},
	// 	{
	// 		icon: <MdOutlineAddCircleOutline />,
	// 		text: 'افزودن محصول',
	// 		link: '/product/add',
	// 	},
	// ];
	return (
		<div>
			<aside
				id="default-sidebar"
				className="sticky top-0 h-full  z-40 w-64  transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full w-full px-3 py-4 overflow-y-auto bg-gray-50">
					<ul className="space-y-2 font-medium text-lg">
						{navBar.map((nav, index) => (
							<NavBarItem
								key={index}
								label={nav.label}
								icon={nav.icon}
								subMenu={nav.subMenu}
							/>
							// <li key={index}>
							// 	<NavLink
							// 		to={nav.link}
							// 		className="flex  items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 group "
							// 	>
							// 		<Icon
							// 			size={20}
							// 			color="text-gray-600 group-hover:text-gray-900"
							// 		>
							// 			{nav.icon}
							// 		</Icon>
							// 		<span className="ms-3 text-xl group-hover:text-gray-900">
							// 			{nav.text}
							// 		</span>
							// 	</NavLink>
							// </li>
						))}
					</ul>
				</div>
			</aside>
		</div>
	);
};
const NavBarItem = ({ label, icon, subMenu }) => {
	const [subMenuDisplay, setSubMenuDisplay] = useState(false);
	return (
		<li>
			<button
				onClick={() => setSubMenuDisplay(!subMenuDisplay)}
				className="flex items-center gap-1 w-full p-2 text-gray-900 rounded-lg hover:bg-gray-200"
			>
				<Icon>{icon}</Icon>
				<span className="me-auto">{label}</span>
				<Icon size={16}>
					<IoIosArrowDown />
				</Icon>
			</button>
			{subMenuDisplay && (
				<ul className="py-2 space-y-0.5">
					{subMenu.map((subMenu, index) => (
						<li
							key={index}
							className="w-full"
						>
							<NavLink
								to={subMenu.href}
								className="flex w-full p-2 ps-10 text-gray-900 rounded-lg hover:bg-gray-200"
							>
								{subMenu.label}
							</NavLink>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};
NavBarItem.propTypes = {
	label: PropTypes.string,
	icon: PropTypes.string,
};

export default Sidebar;
