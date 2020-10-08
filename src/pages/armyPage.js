import React, {useState} from 'react'
import ArmyData from "./armyData";
import {
  Button,
  Row,
  Input,
} from "reactstrap";
import ArmyHandler from '../classes/ArmyHandler'

const ArmyPage = ({ city, army, setArmy }) => {
  const [soldierName, setSoldierName] = useState("");
  const [armyName, setArmyName] = useState("");
  const [soldiers, setSoldiers] = useState([]);
  const [battalions, setBattalions] = useState([]);
  const [command, setCommand] = useState("");

  const registerArmy = (armyName) => {
    if (armyName) {
      let newArmy = { name: armyName };
      newArmy = city.createArmy(newArmy);
      battalions.push(newArmy);
      let armyUpdate = Object.assign({}, army);
      armyUpdate.armies += 1;
      armyUpdate.name = newArmy;
      setArmy(armyUpdate);
    }
  };

  const registerSoldier = (soldierName) => {
    if (soldierName && armyName) {
      city.addSoldierToArmy(soldierName, armyName);
      setSoldiers(ArmyHandler.army);
      let armyUpdate = Object.assign({}, army);
      armyUpdate.strength = ArmyHandler.army.length;
      setArmy(armyUpdate);
    }
  };

  const sendCommand = (army, command) => {
    battalions.map((battalion) => {
      if (battalion.name === army.name) {
        battalion.send(command);
      }
    });
  };
  return (
    <div>
      <h6>
        Army: {city.army.name}, Enlisted Battalions: {army.armies}, Enlisted
        Soldiers: {army.strength}
      </h6>
      <Row className="col-12 mx-auto" style={{ justifyContent: "center" }}>
        <p>
          <Input
            className="mt-4 mb-2"
            placeholder="Army name"
            value={armyName}
            onChange={(data) => setArmyName(data.target.value)}
          />
          <Button color="warning" onClick={() => registerArmy(armyName)}>
            Register Army
          </Button>
        </p>
        <p>
          <Input
            className="mt-4 ml-2 mb-2"
            placeholder="Soldier name"
            value={soldierName}
            onChange={(data) => setSoldierName(data.target.value)}
          />
          <Button color="warning" onClick={() => registerSoldier(soldierName)}>
            Add Soldier
          </Button>
        </p>
      </Row>
      <Row>
        <ArmyData army={soldiers} />
      </Row>
      <div className="mb-4">
        <Input
          className="mt-4 mx-auto mb-2 col-6"
          placeholder="Soldier name"
          value={command}
          onChange={(data) => setCommand(data.target.value)}
        />
        <Button color="danger" onClick={() => sendCommand(army.name, command)}>
          Send Command
        </Button>
      </div>
    </div>
  );
};
export default ArmyPage