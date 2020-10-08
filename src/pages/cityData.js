import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Input } from "reactstrap";
import ArmyPage from "./armyPage";
import CitizenPage from './citizenPage'

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
          <h6> {city.cityName}</h6>
        </Button>
        <Modal isOpen={modal} toggle={toggle} size="xl">
          <ModalHeader className="text-center" toggle={toggle}>
            {city.isEvil ? "Evil city" : "city"} of {city.cityName}
          </ModalHeader>
          <ModalBody className="text-center">
            <ArmyPage city={city} army={army} setArmy={setArmy} />
            <CitizenPage city={city}/>
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
