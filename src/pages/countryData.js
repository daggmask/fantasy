import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  Button, Input
} from "reactstrap";
import CityData from "./cityData";

const CountryData = ({country}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [cityName,setCityName] = useState("")
    const [cityIsEvil,setCityIsEvil] = useState(true)
    const[cities, setCities] = useState([])
     const toggle = () => setDropdownOpen((prevState) => !prevState);

     const createCity = (cityName, isEvil) => {
         setCities(cities.concat({cityName: cityName, isEvil: isEvil}))
         country.createCity(cityName,isEvil)
         console.log(country.cities);
     }

    return (
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        direction="right"
        size="md"
      >
        <DropdownToggle caret color="primary">
          {country.countryName}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Cities</DropdownItem>
          <DropdownItem divider />
          <Input
            className="mx-auto col-8 mt-4"
            placeholder="City name"
            value={cityName}
            onChange={(data) => setCityName(data.target.value)}
          />
          <Input
            className="mx-auto col-8 mt-2"
            type="select"
            value={cityIsEvil}
            onChange={(data) => setCityIsEvil(data.target.value)}
          >
            <option>true</option>
            <option>false</option>
          </Input>
          <DropdownItem header>
            <Button
            className="mt-4"
              color="primary"
              onClick={() => createCity(cityName, cityIsEvil)}
            >
              Creat city
            </Button>
          </DropdownItem>
          <DropdownItem divider />
          {country.cities.map(city => {
              return <div>
                  <CityData city={city}/>
              </div>
            }
          )}
        </DropdownMenu>
      </Dropdown>
    )
}
export default CountryData