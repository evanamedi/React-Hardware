import React, { useEffect, useState, useRef } from "react";

const ScatterText = ({ text }) => {
	const [positions, setPositions] = useState([]);
	const [assembled, setAssembled] = useState(false);
	const containerRef = useRef(null);
	const letterRefs = useRef([]);

	const scatterText = () => {
		const container = containerRef.current;
		const containerRect = container.getBoundingClientRect();
		const positions = [];

		for (let i = 0; i < text.length; i++) {
			const randomX = Math.random() * (containerRect.width - 20);
			const randomY = Math.random() * (containerRect.height - 20);
			positions.push({ x: randomX, y: randomY });
		}

		setPositions(positions);

		setTimeout(() => {
			setAssembled(true);
		}, 1000);
	};

	useEffect(() => {
		const handleScroll = () => {
			const container = containerRef.current;
			if (container) {
				const rect = container.getBoundingClientRect();
				if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
					scatterText();
					window.removeEventListener("scroll", handleScroll);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		scatterText();

		return () => window.removeEventListener("scroll", handleScroll);
	}, [text]);

	useEffect(() => {
		if (assembled) {
			const container = containerRef.current;
			const containerRect = container.getBoundingClientRect();
			let currentX = 0;
			let currentY = 0;
			const newPositions = text.split("").map((char, index) => {
				const charWidth = letterRefs.current[index].offsetWidth;
				if (currentX + charWidth > containerRect.width) {
					currentX = 0;
					currentY += 24;
				}
				const position = { x: currentX, y: currentY };
				currentX += charWidth;
				return position;
			});
			setPositions(newPositions);
		}
	}, [assembled, text]);

	const restartEffect = () => {
		setAssembled(false);
		setPositions([]);
		setTimeout(() => {
			scatterText();
		}, 100);
	};

	return (
		<div>
			<div className="restartDiv">
				<button onClick={restartEffect} className="restart">
					Restart
				</button>
			</div>
			<div ref={containerRef} className="scatter-container">
				{text.split("").map((char, index) => (
					<span
						key={index}
						ref={(el) => (letterRefs.current[index] = el)}
						className={`scatter-char ${
							assembled ? "assembled" : ""
						}`}
						style={{
							left: `${positions[index]?.x}px`,
							top: `${positions[index]?.y}px`,
						}}>
						{char}
					</span>
				))}
			</div>
		</div>
	);
};

export default ScatterText;
