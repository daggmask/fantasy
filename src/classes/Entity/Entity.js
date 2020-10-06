import RaceGenerator from './RaceGenerator'
class Entity {
    entityName = ""
    entityAge = 0
    isEvil = false
    race = ""

    constructor(name,age,isEvil){
        this.entityName = name
        this.entityAge = age
        this.isEvil = isEvil
        this.race = RaceGenerator.chooseRace(isEvil)
    }
}
export default Entity