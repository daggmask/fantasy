class Country {
     countryName = ""
     cities = []

     constructor(name){this.countryName = name}

     createCity = (cityName,isEvil) => {
         this.cities.push(new City(cityName,isEvil))
     }
}
export default Country