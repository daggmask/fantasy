import React, { useState } from "react";
import {
  Button,
  Input,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import CityData from "./cityData";

const CountryData = ({country}) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [cityName,setCityName] = useState("")
    const [cityIsEvil,setCityIsEvil] = useState(false)
    const[cities, setCities] = useState([])

     const createCity = (cityName, isEvil) => {
         if(cityName && isEvil !== null){
             setCities(cities.concat({cityName: cityName, isEvil: isEvil}))
             country.createCity(cityName,isEvil)
         }
     }

    return (
      <div className="text-center">
        <Button
          color="primary"
          onClick={() => setModal(true)}
          className="text-center"
        >
          <h6>{country.countryName}</h6>
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            Country of {country.countryName}
          </ModalHeader>
          <ModalBody>
            <Input
              className="mx-auto col-8 mt-4"
              placeholder="City name"
              value={cityName}
              onChange={(data) => setCityName(data.target.value)}
            />
            <h6 className="mt-2 text-center">Town is evil:</h6>
            <Input
              className="mx-auto col-8 mt-2"
              type="select"
              value={cityIsEvil}
              onChange={(data) => setCityIsEvil(data.target.value)}
            >
              <option>true</option>
              <option>false</option>
            </Input>
            <Button
              className="mt-4"
              color="primary"
              onClick={() => createCity(cityName, cityIsEvil)}
            >
              Creat city
            </Button>
            <Row>
            {country.cities.map((city, i) => {
              return (
                <div key={city.cityName + i} className="mt-4 mx-auto">
                  <CityData city={city} />
                </div>
              );
            })}
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => setModal(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}
export default CountryData