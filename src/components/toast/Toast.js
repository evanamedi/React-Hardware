import React, { useEffect } from "react";

const Toast = ({ message, type, duration = 3000, onClose }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, duration);

		return () => clearTimeout(timer);
	}, [duration, onClose]);

	return (
		<div className={`toast ${type}`}>
			{message}
			<button className="close-button" onClick={onClose}>
				&times;
			</button>
		</div>
	);
};

const ToastContainer = ({ toasts, removeToast }) => {
	return (
		<div className="toast-container">
			{toasts.map((toast, index) => (
				<Toast
					key={index}
					{...toast}
					onClose={() => removeToast(index)}
				/>
			))}
		</div>
	);
};

export default ToastContainer;
