import React from 'react'
import { Jumbotron, Row } from 'reactstrap'


const ArmyData = (army) => {
    let soldiers = army.army
    return <Row className="col-12">
        {soldiers.map((soldier, i) => {
           return <Jumbotron key={soldier.soldier.name + i + soldier.army} className="mt-2 mr-2"><h6>Name: {soldier.soldier.name}, Enlisted: {soldier.army}</h6></Jumbotron>
        })}
    </Row>
}
export default ArmyData