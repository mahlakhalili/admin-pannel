const FormSkeleton = () => {
	return (
		<div className="page">
			<div className="skeleton w-40 h-8"></div>
			<div className="grid gap-4">
				<InputSkeleton />
				<InputSkeleton />
				<InputSkeleton />
				<InputSkeleton />
			</div>
		</div>
	);
};

const InputSkeleton = () => {
	return (
		<div className="grid gap-2">
			<div className="skeleton h-3 w-10"></div>
			<div className="skeleton h-6"></div>
		</div>
	);
};

export default FormSkeleton;
