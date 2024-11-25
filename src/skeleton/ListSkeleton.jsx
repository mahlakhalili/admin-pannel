const ListSkeleton = () => {
	return (
		<div className="page">
			<div className="flex items-center justify-between">
				<div className="skeleton w-40 h-8"></div>
				<div className="skeleton w-36 h-7"></div>
			</div>

			{
				<div className="table-wrapper">
					<table>
						<thead>
							<tr>
								<th>
									<div className="skeleton h-2"></div>
								</th>
								<th>
									{' '}
									<div className="skeleton h-2"></div>
								</th>
								<th>
									<div className="skeleton h-2"></div>
								</th>
								<th>
									<div className="skeleton h-2"></div>
								</th>
								<th>
									<div className="skeleton h-2"></div>
								</th>
								<th className="row">
									<div className="skeleton h-2"></div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
                                <td>
									<div className="skeleton h-2"></div>
								</td>
							</tr>
                            <tr>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
                                <td>
									<div className="skeleton h-2"></div>
								</td>
							</tr>
                            <tr>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
                                <td>
									<div className="skeleton h-2"></div>
								</td>
							</tr>
                            <tr>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
                                <td>
									<div className="skeleton h-2"></div>
								</td>
							</tr>
                            <tr>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
                                <td>
									<div className="skeleton h-2"></div>
								</td>
							</tr>
                            <tr>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
								<td>
									<div className="skeleton h-2"></div>
								</td>
                                <td>
									<div className="skeleton h-2"></div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			}
		</div>
	);
};

export default ListSkeleton;
