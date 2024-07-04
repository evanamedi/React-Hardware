import React from "react";
import Button from "./Button";

export default function ButtonPayload() {
	return (
		<div className="sectionDiv">
			<p className="SectionTitle">Buttons</p>
			<div className="buttonLayout">
				<div className="buttonSelf">
					<Button
						styleType="primary"
						size="large"
						onClick={() => alert("Button Clicked!")}>
						Primary Button
					</Button>
				</div>
				<div className="buttonSelf">
					<Button
						styleType="secondary"
						size="medium"
						onClick={() => alert("Button Clicked!")}>
						Secondary Button
					</Button>
				</div>
				<div className="buttonSelf">
					<Button
						styleType="danger"
						size="small"
						onClick={() => alert("Button Clicked")}>
						Danger Button
					</Button>
				</div>
			</div>
		</div>
	);
}
