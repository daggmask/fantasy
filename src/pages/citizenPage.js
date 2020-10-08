import React from 'react'
import {
  Button,
  Row,
} from "reactstrap";

const CitizenPage = ({ city }) => {
  const addPopulation = () => {};
  return (
    <div>
      <Button color="primary">Add Citizen</Button>
      <br />
      citizens:{" "}
      <Row>
        {city.citizens.map((citizen, i) => {
          return <div className="mt-4 mx-auto">{citizen.entityName}</div>;
        })}
      </Row>
    </div>
  );
};
export default CitizenPage