import React, { useEffect, useState } from 'react'
import { Button, Input, ListGroup, Row } from 'reactstrap'
import CountryData from './countryData'

const CountryPage = ({world}) => {
    const [countryName, setCountryName] = useState("")
    const [countries,setCountries] = useState([])

    const createCountry = (countryName) => {
        if(countryName){
            setCountries(countries.concat(countryName))
            world.createCountry(countryName)
        }
    }  

    return (
      <div className="mt-4 text-center">
        <h4>Welcome to your world</h4>
        <h5 className="text-primary">{world.worldName}</h5>
        <Input
          className="mx-auto col-4 mt-4"
          placeholder="Country name"
          value={countryName}
          onChange={(data) => setCountryName(data.target.value)}
        />
        <Button color="primary" className="mt-4" onClick={() => createCountry(countryName)}>Create Country</Button>
        <Row>
        {world.countries.map((country,i) => {
            return(
            <ListGroup key={country.countryName + i} className="mt-4 mx-auto">
                <CountryData country={country}/>
            </ListGroup>
            )
        })}
        </Row>
      </div>
    );
}
export default CountryPage