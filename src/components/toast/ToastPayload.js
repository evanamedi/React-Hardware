import React from "react";
import LiveEditorComponent from "../liveEditor/LiveEditorComponent";

const ToastPayload = () => {
	const initialCode = `
const Toast = ({ message, type, duration = 3000, onClose }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, duration);

		return () => clearTimeout(timer);
	}, [duration, onClose]);

	return (
		<div className={\`toast \${type}\`}>
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

const ToastDeploy = () => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type) => {
        setToasts([...toasts, { message, type }]);
        };

    const removeToast = (index) => {
        setToasts(toasts.filter((_, i) => i !== index));
        };

    return (
        <div className="toast-deploy">
            <button className="button" onClick={() => addToast('Success message', 'success')}>
                Show Success Toast
            </button>
            <button className="button" onClick={() => addToast('Error message', 'error')}>
                Show Error Toast
            </button>
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </div>
    );
};

render(<ToastDeploy />)
    `;

	const initialCSS = `.toast-container {
	position: fixed;
	top: 20px;
	right: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	z-index: 9999;
}

.toast {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	border-radius: 5px;
	color: white;
	background-color: #333;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	animation: slide-in 0.5s ease;
}

.toast.success {
	background-color: #4caf50;
}

.toast.error {
	background-color: #f44336;
}

.toast .close-button {
	background: none;
	border: none;
	color: white;
	font-size: 1.2rem;
	cursor: pointer;
}

@keyframes slide-in {
	from {
		opacity: 0;
		transform: translateX(100%);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}`;

	return (
		<div className="width">
			<div className="sectionDiv">
				<LiveEditorComponent
					initialCode={initialCode}
					initialCSS={initialCSS}
				/>
			</div>
		</div>
	);
};

export default ToastPayload;
