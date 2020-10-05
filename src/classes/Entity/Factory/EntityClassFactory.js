class EntityClassFactory{
    class = ""
    level = 0
    role = ""
    hasMagicka = false

    constructor(entityClass,level,hasMagicka){
        this.class = entityClass
        this.level = level
        this.role = this.decideRole(level, hasMagicka)
        this.hasMagicka = hasMagicka
    }

    decideRole = (level, hasMagicka) => {
        if(level > 20 && hasMagicka){
            return new SpellCaster()
        }
        else if(level > 20 && hasMagicka){
            return new Soldier()
        }
        else{
            return new Citizen()
        }
    }
}