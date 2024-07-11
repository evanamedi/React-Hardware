import React from "react";
import LiveEditorComponent from "../liveEditor/LiveEditorComponent";

export default function TypingEffectPayload() {
	const initialCode = `
const useTypingEffect = (text, speed, startTyping) => {
	const [displayedText, setDisplayedText] = useState("");
	const index = useRef(0);

	useEffect(() => {
		if (!startTyping) return;

		const interval = setInterval(() => {
			setDisplayedText((prev) => prev + text.charAt(index.current));
			index.current += 1;
			if (index.current === text.length) {
				clearInterval(interval);
			}
		}, speed);

		return () => clearInterval(interval);
	}, [text, speed, startTyping]);

	return [displayedText, setDisplayedText, index];
};

const TypingEffect = ({ text, speed }) => {
	const [startTyping, setStartTyping] = useState(false);
	const textRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setStartTyping(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		const currentRef = textRef.current;

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	const [displayedText, setDisplayedText, index] = useTypingEffect(
		text,
		speed,
		startTyping
	);

	const rerunTypingEffect = () => {
		setStartTyping(false);
		setDisplayedText("");
		index.current = 0;
		setTimeout(() => {
			setStartTyping(true);
		}, 100);
	};

	return (
		<div>
			<div className="restartDiv">
				<button onClick={rerunTypingEffect} className="button">
					Restart
				</button>
			</div>
			<div ref={textRef} className="display-text">
				{displayedText}
			</div>
		</div>
	);
};

const TypingEffectDeploy = () => {
	return (
		<div>
			<TypingEffect
				text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				speed={30}
			/>
		</div>
	);
}

render(<TypingEffectDeploy />);
	`;

	const initialCSS = `.css`;

	return (
		<div className="width">
			<p className="SectionTitle">Typing Effect</p>
			<div className="sectionDiv">
				<LiveEditorComponent
					initialCode={initialCode}
					initialCSS={initialCSS}
				/>
			</div>
		</div>
	);
}
