import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./Location";
import { useHistory } from "react-router-dom";
import "./Location.css";

export const LocationList = () => {
	// This state changes when `getAnimals()` is invoked below
	const { locations, getLocations } = useContext(LocationContext);

	//useEffect - reach out to the world for something
	useEffect(() => {
		console.log("LocationList: useEffect - getLocations");
		getLocations();
	}, []);

	const history = useHistory();

	return (
		<>
			<h2>locations</h2>
			<button
				onClick={() => {
					history.push("/locations/create");
				}}
			>
				Add Location
			</button>

			<div className="locations">
				{console.log("LocationList: Render")}
				{locations.map((location) => {
					return <LocationCard key={location.id} location={location} />;
				})}
			</div>
		</>
	);
};
