import React from 'react'

const CountryData = ({country}) => {
    return(<div>
        <h6 onClick={() => console.log(country)}>
        {country.countryName}
        </h6>
    </div>)
}
export default CountryData