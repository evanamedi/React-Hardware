import React, { useState, useEffect, useRef } from "react";

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

	return displayedText;
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

		if (textRef.current) {
			observer.observe(textRef.current);
		}

		return () => {
			if (textRef.current) {
				observer.unobserve(textRef.current);
			}
		};
	}, []);

	const displayedText = useTypingEffect(text, speed, startTyping);

	return <div ref={textRef}>{displayedText}</div>;
};

export default TypingEffect;
