import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button, 
  Input
} from "reactstrap";

const StartPage = () => {
return (
  <Card className="col-6 mx-auto my-auto mb-4">
    <CardBody>
      <CardTitle className="text-center">
        <h1 className="text-primary">Fantasy world generator</h1>
      </CardTitle>
      <CardSubtitle className="text-center mt-4 mb-4">
          <h5>
        Welcome to this fantasy world generator! <br />
        In this generator you can create a world to your liking with different
        creatures, cities, countries and armies.
          </h5>
      </CardSubtitle>
      <CardText className="mt-4 text-center">
        First you have to enter the name of your world <Input className="mx-auto col-4 mt-2" placeholder="World name"/>
      </CardText>
    </CardBody>
  </Card>
);
}
export default StartPage