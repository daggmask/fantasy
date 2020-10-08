import React, { useState } from 'react'
import {
  Button,
  Row,
} from "reactstrap";
import CitizenCreationModal from './citizenCreationModal'
import CitizenData from './citizenData';

const CitizenPage = ({ city }) => {
    const [entities, setEntities] = useState([])
  return (
    <div>
      <CitizenCreationModal
        entities={entities}
        setEntities={setEntities}
        city={city}
      />
      <br />
      <p onClick={() => console.log(city.citizens)}>citizens: </p>
      <Row>
        <CitizenData citizen={city.citizens}/>
      </Row>
    </div>
  );
};
export default CitizenPage