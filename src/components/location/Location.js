import React from "react";
import "./Location.css";

export const LocationCard = ({ location }) => (
	<section className="location">
		<h3 className="Location__name">{location.name}</h3>
		<div className="Location__address">{location.address}</div>
	</section>
);
