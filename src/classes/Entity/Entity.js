import RaceGenerator from './RaceGenerator'
import EntityClassFactory from './Factory/EntityClassFactory'
class Entity {
    entityName = ""
    entityAge = 0
    isEvil = false
    race = ""
    class = {}

    constructor(name,age,isEvil, race, entityClass, level, hasMagicka){
        this.entityName = name
        this.entityAge = age
        this.isEvil = isEvil
        this.race = race
        this.class = new EntityClassFactory(entityClass, level, hasMagicka);
    }
}
export default Entity