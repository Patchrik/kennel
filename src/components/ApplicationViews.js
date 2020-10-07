import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalCard } from "./animal/AnimalCard";
import { EmployeeCard } from "./employee/Employee";
import { CustomerCard } from "./customer/Customer";
import { LocationCard } from "./location/Location";
import { AnimalList } from "./animal/AnimalList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalDetail } from "./animal/AnimalDetail";
import { CustomerList } from "./customer/CustomerList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerForm } from "./customer/CustomerForm";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeForm } from "./employee/EmployeeForm";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";
import { LocationForm } from "./location/LocationForm";

export const ApplicationViews = (props) => {
	return (
		<>
			{/* Render the location list when http://localhost:3000/ */}
			<Route exact path="/">
				<Home />
			</Route>

			{/* Render the animal list when http://localhost:3000/animals */}
			<AnimalProvider>
				<Route exact path="/animals">
					<AnimalList />
				</Route>
			</AnimalProvider>

			<AnimalProvider>
				<CustomerProvider>
					<LocationProvider>
						<Route exact path="/animals/create">
							<AnimalForm />
						</Route>
					</LocationProvider>
				</CustomerProvider>
			</AnimalProvider>

			<AnimalProvider>
				<Route exact path="/animals/detail/:animalId(\d+)">
					<AnimalDetail />
				</Route>
			</AnimalProvider>

			<EmployeeProvider>
				<Route exact path="/employees">
					<EmployeeList />
				</Route>
			</EmployeeProvider>

			<EmployeeProvider>
				<LocationProvider>
					<Route exact path="/employees/create">
						<EmployeeForm />
					</Route>
				</LocationProvider>
			</EmployeeProvider>

			<CustomerProvider>
				<Route exact path="/customers">
					<CustomerList />
				</Route>
			</CustomerProvider>

			<CustomerProvider>
				<Route exact path="/customers/create">
					<CustomerForm />
				</Route>
			</CustomerProvider>

			<LocationProvider>
				<Route exact path="/locations">
					<LocationList />
				</Route>
			</LocationProvider>

			<LocationProvider>
				<Route exact path="/locations/create">
					<LocationForm />
				</Route>
			</LocationProvider>
		</>
	);
};
