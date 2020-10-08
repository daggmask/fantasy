import SpellCaster from './SpellCaster'
import Soldier from './Soldier'
import Citizen from './Citizen'
class EntityClassFactory{
    entityClass = ""
    level = 0
    role = ""
    hasMagicka = false

    constructor(entityClass,level,hasMagicka){
        this.entityClass = entityClass;
        this.level = level
        this.role = this.decideRole(level, hasMagicka)
        this.hasMagicka = hasMagicka
    }

    decideRole = (level, hasMagicka) => {
        if(level >= 20 && hasMagicka){
            return new SpellCaster()
        }
        else if(level >= 20 && !hasMagicka){
            return new Soldier()
        }
        else if(level < 20){
            return new Citizen()
        }
    }
}
export default EntityClassFactory