import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './Home';
import { AnimalCard } from './animal/AnimalCard';
import { EmployeeCard } from './employee/Employee';
import { CustomerCard } from './customer/Customer';
import { LocationCard } from './location/Location';
import { AnimalList } from './animal/AnimalList';
import { AnimalProvider } from './animal/AnimalProvider';
import { CustomerList } from './customer/CustomerList';
import { CustomerProvider } from './customer/CustomerProvider';
import { EmployeeList } from './employee/EmployeeList';
import { EmployeeProvider } from './employee/EmployeeProvider';

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

      <EmployeeProvider>
        <Route exact path="/employess">
          <EmployeeList />
        </Route>
      </EmployeeProvider>

      <CustomerProvider>
        <Route exact path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <Route path="/locations">
        <LocationCard />
      </Route>
    </>
  );
};
