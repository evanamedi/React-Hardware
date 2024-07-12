import React, { useEffect, useState } from "react";

const validateEmail = (email) => {
	const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return re.test(String(email).toLowerCase());
};

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [showTooltip, setShowToolTip] = useState({
		name: false,
		email: false,
		message: false,
	});

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowToolTip({
				name: false,
				email: false,
				message: false,
			});
		}, 3000);
		return () => clearTimeout(timer);
	}, [showTooltip]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});

		if (name === "email") {
			if (!validateEmail(value)) {
				setErrors((prevErrors) => ({
					...prevErrors,
					email: "Invalid email",
				}));
			} else {
				setErrors((prevErrors) => ({
					...prevErrors,
					email: "",
				}));
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let formValid = true;
		let newErrors = { ...errors };
		let newTooltip = { name: false, email: false, message: false };

		if (!formData.name) {
			formValid = false;
			newErrors.name = "Name is required";
			newTooltip.name = true;
		} else {
			newErrors.name = "";
		}

		if (!formData.email) {
			formValid = false;
			newErrors.email = "Email is required";
			newTooltip.email = true;
		} else if (!validateEmail(formData.email)) {
			formValid = false;
			newErrors.email = "Invalid email format";
			newTooltip.email = true;
		} else {
			newErrors.email = "";
		}

		if (!formData.message) {
			formValid = false;
			newErrors.message = "Message is required";
			newTooltip.message = true;
		} else {
			newErrors.message = "";
		}

		setErrors(newErrors);
		setShowToolTip(newTooltip);

		if (formValid) {
			console.log("Form data:", formData);
			setFormData({
				name: "",
				email: "",
				message: "",
			});
			alert("Form Submitted successfully");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="custom-form">
			<div className="form-group">
				<label>
					Name <span className="required">*</span>
				</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					className={errors.name ? "input-error" : ""}
					onFocus={() =>
						setShowToolTip({ ...showTooltip, name: false })
					}
				/>
				{showTooltip.name && (
					<div className="tooltip">{errors.name}</div>
				)}
			</div>
			<div className="form-group">
				<label>
					Email <span className="required">*</span>
				</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					className={errors.email ? "input-error" : ""}
					onFocus={() =>
						setShowToolTip({ ...showTooltip, email: false })
					}
				/>
				{showTooltip.email && (
					<div className="tooltip">{errors.email}</div>
				)}
			</div>
			<div className="form-group">
				<label>
					Message <span className="required">*</span>
				</label>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					className={errors.message ? "input-error" : ""}
					onFocus={() =>
						setShowToolTip({ ...showTooltip, message: false })
					}></textarea>
				{showTooltip.message && (
					<div className="tooltip">{errors.message}</div>
				)}
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Form;
