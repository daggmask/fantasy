import Country from "./Country"

class FantasyWorld{
   worldName = ""
   countries = []

    constructor(worldName){
        this.worldName = worldName
    }

    createCountry = (countryName) => {
    this.countries.push(new Country(countryName))
    }
}
export default FantasyWorld