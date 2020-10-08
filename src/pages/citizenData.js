import React from "react";
import { Jumbotron, Row } from "reactstrap";
import CitizenEditor from "./CitizenEditor";

const CitizenData = ({citizen}) => {
  return (
    <Row className="col-12">
      {citizen.map((civilian, i) => {
        return (
          <div key={civilian.entityName + i}>
              <CitizenEditor civilian={civilian}/>
          </div>
        );
      })}
    </Row>
  );
};
export default CitizenData;
