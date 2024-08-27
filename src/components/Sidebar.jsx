import { RiDashboardFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
const Sidebar = () => {
	return (
		<div>
			<aside
				id="default-sidebar"
				className="sticky top-0  z-40 w-64  transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
					<ul className="space-y-2 font-medium">
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 "
							>
								<IconContext.Provider
									value={{ color: 'black', className: 'global-class-name' }}
								>
									<div>
										<RiDashboardFill />
									</div>
								</IconContext.Provider>
								<span className="ms-3">Dashboard</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;
