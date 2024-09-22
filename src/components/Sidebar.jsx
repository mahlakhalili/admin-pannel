import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import { FaList } from 'react-icons/fa6';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

const Sidebar = () => {
	const navbar = [
		{
			icon: <FaList />,
			text: 'لیست کاربران',
			link: '/product/list',
		},
		{
			icon: <MdOutlineAddCircleOutline />,
			text: 'افزودن کاربر',
			link: '/product/add',
		},
	];
	return (
		<div>
			<aside
				id="default-sidebar"
				className="sticky top-0  z-40 w-64  transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
					<ul className="space-y-2 font-medium">
						{navbar.map((nav, index) => (
							<li key={index}>
								<NavLink
									to={nav.link}
									className="flex  items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 group "
								>
									<Icon
										size={20}
										color="text-gray-600 group-hover:text-gray-900"
									>
										{nav.icon}
									</Icon>
									<span className="ms-3 text-xl group-hover:text-gray-900">
										{nav.text}
									</span>
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;
