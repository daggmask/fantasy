import React from "react";
import { Jumbotron, Row } from "reactstrap";

const CitizenData = ({citizen}) => {
  return (
    <Row className="col-12">
      {citizen.map((civilian, i) => {
        return (
          <Jumbotron key={civilian.entityName + i} className="mt-2 mr-2" style={{cursor:"pointer"}} onClick={() => console.log(civilian)}>
            <h6>
              Name: {civilian.entityName}, Age: {civilian.entityAge}, Race: {civilian.race}
            </h6>
        <p className="col-12">
        Class: {civilian.class.entityClass}, 
        Magicka: {civilian.class.hasMagicka ? "Yes": "No"}, 
        role: {civilian.class.role.constructor.name}</p>
          </Jumbotron>
        );
      })}
    </Row>
  );
};
export default CitizenData;
