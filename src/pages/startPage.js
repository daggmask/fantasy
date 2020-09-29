import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const StartPage = () => {
return (
  <Card className="col-6 mx-auto my-auto mb-4">
    <CardBody>
      <CardTitle className="text-center">
        <h1 className="text-primary">Fantasy world generator</h1>
      </CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </CardText>
    </CardBody>
  </Card>
);
}
export default StartPage