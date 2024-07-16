import React, { useEffect, useState, useRef, useCallback } from "react";

const Transition = ({ beforeImage, afterImage }) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [transitionStarted, setTransitionStarted] = useState(false);
	const [transitionCompleted, setTransitionCompleted] = useState(false);
	const containerRef = useRef(null);

	const handleScroll = useCallback(() => {
		if (!containerRef.current) return;

		const containerTop = containerRef.current.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;
		const scrollTop = window.scrollY;

		if (containerTop <= windowHeight / 2 && !transitionStarted) {
			setTransitionStarted(true);
			document.body.style.overflow = "hidden";
			window.scrollTo({ top: scrollTop });
		}

		if (transitionStarted && !transitionCompleted) {
			const maxScrollDistance = windowHeight;
			const transitionScrollDistance =
				scrollTop - (containerRef.current.offsetTop - windowHeight / 8);
			const transitionProgress = Math.min(
				transitionScrollDistance / maxScrollDistance,
				1
			);
			setScrollPosition(transitionProgress * 700);

			if (transitionProgress >= 1) {
				setTransitionCompleted(true);
				document.body.style.overflow = "auto";
			}
		}
	}, [transitionStarted, transitionCompleted]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.body.style.overflow = "auto";
		};
	}, [handleScroll]);

	return (
		<div ref={containerRef} className="transition-container">
			<img
				src={beforeImage}
				alt="Before"
				className="transition-image before"
				style={{ opacity: 1 - scrollPosition / 100 }}
			/>
			<img
				src={afterImage}
				alt="After"
				className="transition-image after"
				style={{ opacity: scrollPosition / 100 }}
			/>
		</div>
	);
};

export default Transition;
