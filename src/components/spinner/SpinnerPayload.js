import React from "react";
import LiveEditorComponent from "../liveEditor/LiveEditorComponent";

const SpinnerPayload = () => {
	const initialCode = `
const Spinner = () => {
	return (
		<div className="spinner-overlay">
			<div className="spinner"></div>
		</div>
	);
};

const SpinnerDeploy = () => {
    
	const [loading, setLoading] = useState(false);

    const handleButtonClick = () => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
            }, 3000);

            return () => clearTimeout(timer)
        }

    return (
        <div>
            <button onClick={handleButtonClick} className="button">Run Spinner</button>
            {loading && <Spinner />}
            <div className={\`content \${loading ? 'blur' : ""}\`}>
            </div>
        </div>
    );
};

render(<SpinnerDeploy />);
`;

	const initialCSS = `.spinner-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
	backdrop-filter: blur(10px);
}

.spinner {
	border-top: 16px dotted #008686;
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: spin 1.5s linear infinite;
}

.content.blur {
	filter: blur(5px);
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
}
`;
	return (
		<div className="width">
			<p className="SectionTitle">Spinner</p>
			<div className="sectionDiv">
				<LiveEditorComponent
					initialCode={initialCode}
					initialCSS={initialCSS}
				/>
			</div>
		</div>
	);
};

export default SpinnerPayload;
