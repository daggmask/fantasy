class ArmyHandler {
  static army = [];

  static registerArmy = (armyObject) => { return(command) => this.sendCommand(armyObject,command)};

  static registerSoldier = (soldier, army, filter = () => true) => {
    this.army.push({
      soldier,
      army,
      filter
    })
  };

  static sendCommand = (armyObject, command) => {
    for(let {soldier, army, filter} of this.army){
      if(armyObject.name === army && filter(command)){
        soldier.listen(army,command)
      }
    }
  };
}

export default ArmyHandler