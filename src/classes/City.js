class City{
    cityName = ""
    isEvil = false
    citizens = []
    army = {}

    constructor(cityName, isEvil){
        this.cityName = cityName
        this.isEvil = isEvil
    }

    Soldier = class{
        constructor(name){this.name = name}
        listen(army, command){
            console.log(`This is ${name} of ${army}th and my current mission is: ${command}`);
        }
    }

    addCitizen = (name,age,isEvil) => {this.citizens.push(PopulationCreator.createEntity(name,age,isEvil))}
    
    createArmy = (newArmyObject) => {
        newArmyObject.send = ArmyHandler.registerArmy(newArmyObject)
    }
    
    addSoldierToArmy = (soldier, armyToEnlist) => {
        let newSoldier = new this.Soldier(soldier)
        try{
            ArmyHandler.registerSoldier(newSoldier,armyToEnlist)
        }
        catch{
            
        }
    }


}