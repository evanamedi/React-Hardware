import React from "react";
import SlidingMenu from "../slidingMenu/SlidingMenu";

export default function Components() {
	return (
		<div className="mainBody">
			<div className="para">
				<p>
					Choose a component to view its code (and CSS if applicable)
				</p>
			</div>
			<div className="slidingBody">
				<SlidingMenu />
			</div>
		</div>
	);
}
