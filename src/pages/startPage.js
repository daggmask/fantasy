import React, { useEffect, useState } from 'react'
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
import FantasyWorldCreator from '../classes/FantasyWorldCreator';
let instance = new FantasyWorldCreator()

const StartPage = () => {
  const [worldName, setWorldName] = useState("")
  const [worldCreated , setWorldCreated] = useState(false)

  const registerWorld = () => {
    setWorldCreated(true)
    instance.createWorld(worldName)
  }

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
        First you have to enter the name of your world
        {!worldCreated ? (
          <Input
            className="mx-auto col-4 mt-2"
            placeholder="World name"
            value={worldName}
            onChange={(data) => setWorldName(data.target.value)}
          />
        ) : (
          <Input
            className="mx-auto col-4 mt-2"
            placeholder="World name"
            disabled
            value={worldName}
          />
        )}
        <Button type="submit" className="mt-2" color="primary" onClick={() => registerWorld()}>
          Submit world name
        </Button>
      </CardText>
    </CardBody>
  </Card>
);
}
export default StartPage