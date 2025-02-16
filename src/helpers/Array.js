export const numListArray = (num) => {
	return [...Array(num).keys()].map((i) => i + 1);
};
