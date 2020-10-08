import React, { useState } from "react";
import {
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem,
  Input,
  Label, 
  Row,
} from "reactstrap";

const CitizenEditor = ({civilian}) => {
    const [skillName,setSkillName] = useState("")
    const [skillDescription,setSkillDescription] = useState("")
    const [skills, setSkills] = useState([])
    const [modal, setModal] = useState(false);
    const [gear,setGear] = useState({weapon: {}, armour: {}, trinket: {}, cape: {}})
    const [hasWeapon, setHasWeapon] = useState(false)
    const [hasArmour, setHasArmour] = useState(false)
    const [hasTrinket, setHasTrinket] = useState(false)
    const [hasCape, setHasCape] = useState(false)

    const toggle = () => setModal(!modal);

    const learnSkill = () => {
        if(skillName && skillDescription){
            let skill = { name: skillName, description: skillDescription };
            civilian.class.role.learnSpell(skill)
            setSkills(skills.concat(skill))
        }

    }

    const getSoldierGear = () => {
        setGear(
          civilian.class.role.gear.wear(
            hasWeapon,
            hasArmour,
            hasTrinket,
            hasCape
          )
        );
    }

    return (
      <div>
        <Jumbotron
          className="mt-2 mr-2"
          style={{ cursor: "pointer" }}
          onClick={toggle}
        >
          <h6>
            Name: {civilian.entityName}, Age: {civilian.entityAge}, Race:{" "}
            {civilian.race}
          </h6>
          <p className="col-12">
            Class: {civilian.class.entityClass}, Magicka:{" "}
            {civilian.class.hasMagicka === "true" ? "Yes" : "No"}, role:{" "}
            {civilian.class.role.constructor.name}
          </p>
        </Jumbotron>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            {civilian.entityName} the {civilian.class.role.constructor.name}
          </ModalHeader>
          <ModalBody>
            <ListGroup>
              <ListGroupItem>Class: {civilian.class.entityClass}</ListGroupItem>
              <ListGroupItem>Race: {civilian.race}</ListGroupItem>
              <ListGroupItem>Level: {civilian.class.level}</ListGroupItem>
              <ListGroupItem>
                Role: {civilian.class.role.constructor.name}
              </ListGroupItem>
              {civilian.class.role.constructor.name === "SpellCaster" ||
              civilian.class.role.constructor.name === "Soldier" ? (
                <div>
                  <ListGroupItem className="col-12">
                    Learn spells:
                    <Input
                      className="col-6 ml-2"
                      placeholder="Ability Name"
                      value={skillName}
                      onChange={(data) => setSkillName(data.target.value)}
                    />
                    <Input
                      className="col-6 ml-2"
                      placeholder="Ability Description"
                      value={skillDescription}
                      onChange={(data) =>
                        setSkillDescription(data.target.value)
                      }
                    />
                    <Button
                      className="mt-2"
                      type="submit"
                      color="primary"
                      onClick={() => learnSkill()}
                    >
                      Learn Ability
                    </Button>
                  </ListGroupItem>
                  {civilian.class.role.spells.map((spell, i) => {
                    return (
                      <ListGroupItem key={spell + i}>
                        Skill {i + 1}: Name: {spell.abilityName} Description:{" "}
                        {spell.abilityDescription}
                      </ListGroupItem>
                    );
                  })}
                </div>
              ) : null}
              {civilian.class.role.constructor.name === "Soldier" ? (
                <ListGroupItem>
                  <h6>Wear gear: </h6>
                  <Row>
                    <Label check className="mx-auto">
                      <Input
                        type="checkbox"
                        value={hasWeapon}
                        onChange={() => setHasWeapon(!hasWeapon)}
                      />{" "}
                      Weapon
                    </Label>
                    <Label check className="mx-auto">
                      <Input
                        type="checkbox"
                        value={hasArmour}
                        onChange={() => setHasArmour(!hasArmour)}
                      />{" "}
                      Armour
                    </Label>
                    <Label check className="mx-auto">
                      <Input
                        type="checkbox"
                        value={hasTrinket}
                        onChange={() => setHasTrinket(!hasTrinket)}
                      />{" "}
                      Trinket
                    </Label>
                    <Label check className="mx-auto">
                      <Input
                        type="checkbox"
                        value={hasCape}
                        onChange={() => setHasCape(!hasCape)}
                      />{" "}
                      Cape
                    </Label>
                  </Row>
                  <Button
                    type="submit"
                    className="mx-auto mt-4"
                    color="primary"
                    onClick={() => getSoldierGear()}
                  >
                    Finish gear check
                  </Button>
                </ListGroupItem>
              ) : null}
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success">Save</Button>{" "}
            <Button color="primary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}
export default CitizenEditor
