import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Input } from "reactstrap";
import RaceGenerator from "../classes/Entity/RaceGenerator";
import PopulationCreator from "../classes/PopulationCreator";

const CitizenCreationModal = ({ entities, setEntities, city }) => {
    const raceOptions = () => {
    let races = [];
    for (let race in RaceGenerator.chooseRace(city.isEvil)) {
        races.push(RaceGenerator.chooseRace(city.isEvil)[race]);
    }
    return races;
    };
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [race, setRace] = useState(raceOptions()[0]);
  const [entityClass, setEntityClass] = useState("");
  const [level, setLevel] = useState(0);
  const [hasMagicka, setHasMagicka] = useState(false);

  const toggle = () => setModal(!modal);

  const createEntity = () => {
    let newEntity = PopulationCreator.createEntity(
      name,
      age,
      city.isEvil,
      race,
      entityClass,
      level,
      hasMagicka
    );
    setEntities(entities.concat(newEntity))
    city.citizens.push(newEntity);
    toggle();
    console.log(city.citizens);
  };

  useEffect(() => {
      setHasMagicka(false)
  },[])

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Add Entity to city
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Entity creation</ModalHeader>
        <ModalBody>
          <Row className="col-12 mx-auto" style={{ justifyContent: "center" }}>
            <Input
              className="col-4 mt-4 mb-2"
              placeholder="Name"
              value={name}
              onChange={(data) => setName(data.target.value)}
            />
            <p className="mt-4 col-2 ">Age: </p>
            <Input
              className="mt-4 col-2  ml-2 mb-2"
              type="number"
              placeholder="Age"
              value={age}
              onChange={(data) => setAge(data.target.value)}
            />
            <Input
              type="select"
              value={race}
              onChange={(data) => setRace(data.target.value)}
            >
              {raceOptions().map((race, i) => {
                return <option key={race + i}>{race}</option>;
              })}
            </Input>
          </Row>
          <Row>
            <Input
              className="mt-4 col-4 ml-2 mb-2"
              placeholder="Class name"
              value={entityClass}
              onChange={(data) => setEntityClass(data.target.value)}
            />
            <p className="col-2 mt-4">Level:</p>
            <Input
              className="mt-4 col-2 mb-2"
              type="number"
              placeholder="Level"
              value={level}
              onChange={(data) => setLevel(data.target.value)}
            />
          </Row>
          <Row>
            <p className="col-4 mt-4">Has magicka:</p>
            <Input
              className="col-4 mt-4"
              type="select"
              value={hasMagicka}
              onChange={(data) => setHasMagicka(data.target.value)}
            >
              <option>true</option>
              <option>false</option>
            </Input>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => createEntity()}>
            Create Entity
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default CitizenCreationModal