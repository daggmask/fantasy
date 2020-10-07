import React, { useEffect, useState } from 'react'
import { Button, Input } from 'reactstrap'
import CountryData from './countryData'

const CountryPage = ({world}) => {
    const [countryName, setCountryName] = useState("")
    const [countries,setCountries] = useState([])

    const createCountry = (countryName) => {
        if(countryName){
            setCountries(countries.concat(countryName))
            world.createCountry(countryName)
            console.log(world.countries);
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
        {world.countries.map((country,i) => {
            return(
            <div key={country.countryName + i} className="mt-4">
                <CountryData country={country}/>
            </div>
            )
        })}
      </div>
    );
}
export default CountryPage