import React, { useContext, useRef, useEffect } from "react";
import { EmployeeContext } from "../employee/EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import "./Employee.css";
import { useHistory } from "react-router-dom";

export const EmployeeForm = (props) => {
	const { addEmployee } = useContext(EmployeeContext);
	const { locations, getLocations } = useContext(LocationContext);
	/*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
	const name = useRef(null);
	const location = useRef(null);

	/*
        Get animal state and location state on initialization.
  */

	useEffect(() => {
		getLocations();
	}, []);

	const constructNewEmployee = () => {
		/*
            The `location` and `customer` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
		const locationId = parseInt(location.current.value);

		if (name == null && locationId === 0) {
			window.alert("Please fill in your name and pick a location");
		} else {
			addEmployee({
				name: name.current.value,
				locationId,
			}).then(() => history.push("/employees"));
		}
	};

	const history = useHistory();

	return (
		<form className="employeeForm">
			<h2 className="employeeForm__title">New Employee</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="employeeName">employee name: </label>
					<input
						type="text"
						id="EmployeeName"
						ref={name}
						required
						autoFocus
						className="form-control"
						placeholder="Employee name"
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select
						defaultValue=""
						name="location"
						ref={location}
						id="employeeLocation"
						className="form-control"
					>
						<option value="0">Select a location</option>
						{locations.map((locale) => (
							<option key={locale.id} value={locale.id}>
								{locale.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button
				type="submit"
				onClick={(evt) => {
					evt.preventDefault(); // Prevent browser from submitting the form
					constructNewEmployee();
				}}
				className="btn btn-primary"
			>
				Save Customer
			</button>
		</form>
	);
};
