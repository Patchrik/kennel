import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useParams, useHistory } from "react-router-dom";

export const AnimalDetail = () => {
	const { releaseAnimal, getAnimalById } = useContext(AnimalContext);

	const [animal, setAnimal] = useState({});
	const [location, setLocation] = useState({});
	const [customer, setCustomer] = useState({});

	const { animalId } = useParams();
	const history = useHistory();

	useEffect(() => {
		console.log("useEffect", animalId);
		getAnimalById(animalId).then((response) => {
			setAnimal(response);
			setLocation(response.location);
			setCustomer(response.customer);
		});
	}, []);

	return (
		<section className="animal">
			<h3 className="animal__name">Hi! My Name is {animal.name}</h3>
			<div className="animal__breed">
				<b>Breed: </b>
				{animal.breed}
			</div>
			<div className="animal__location">
				<b>Location: </b> {location.name}
			</div>
			<div className="animal__owner">
				<b>Customer: </b> {customer.name}
			</div>

			<button
				onClick={() => {
					history.push(`/animals/edit/${animal.id}`);
				}}
			>
				Edit
			</button>

			<button
				onClick={() => {
					releaseAnimal(animal.id).then(() => {
						history.push("/animals");
					});
				}}
			>
				Release Animal
			</button>
		</section>
	);
};
