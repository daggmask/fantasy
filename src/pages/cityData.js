import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Input } from "reactstrap";
import ArmyHandler from "../classes/ArmyHandler";
import ArmyData from './armyData'
import ArmyPage from "./armyPage";

const CityData = ({city}) => {
      const [modal, setModal] = useState(false);
      const [army, setArmy] = useState({name: "", strength: 0, armies: 0})


        const toggle = () => setModal(!modal);

    return (
      <div className="text-center">
        <Button
          color="primary"
          onClick={() => setModal(true)}
          className="text-center"
        >
          <h6>{city.cityName}</h6>
        </Button>
        <Modal isOpen={modal} toggle={toggle} size="xl">
          <ModalHeader className="text-center" toggle={toggle}>
            City of {city.cityName}
          </ModalHeader>
          <ModalBody className="text-center">
            <ArmyPage city={city} army={army} setArmy={setArmy} />
            <Button color="primary">Add Citizen</Button>
            <br />
            citizens:{" "}
            <Row>
              {city.citizens.map((citizen, i) => {
                return <div className="mt-4 mx-auto">{citizen.entityName}</div>;
              })}
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => setModal(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
};
export default CityData;
