import PropTypes from 'prop-types';
import Button from './Button';
import { IoCloseSharp } from 'react-icons/io5';

const Modal = ({ title = '' }) => {
	return (
		<div className="fixed flex items-center justify-center top-0 right-0 w-full h-full bg-black/80 backdrop-blur-sm z-50">
			<div className="grid grid-rows-[max-content_1fr_max-content] bg-white rounded-lg overflow-hidden ">
				<div className="flex items-center justify-between p-4 border-b ">
					<h3 className="text-xl font-semibold text-gray-900 ">{title}</h3>
					<Button
						color="outline-red"
						icon={<IoCloseSharp />}
					/>
				</div>
			</div>
		</div>
	);
};
Modal.propTypes = {
	title: PropTypes.string,
};

export default Modal;
