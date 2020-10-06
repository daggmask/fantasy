class RaceGenerator{
    // Enum/race options here
   static GoodRaceList = {
        'Human' : "Human",
        'Elf' : 'Elf',
        'Dwarf' : 'Dwarf',
        'High Elf' : 'High Elf',
    }

   static EvilRaceList = {
        'Goblin' : 'Goblin',
        'Orc' : 'Orc',
        'Demon' : 'Demon',
        'Dark Elf' : 'Dark Elf'
    }

   static chooseRace = (isEvil) => {
       if(isEvil){
           return this.EvilRaceList
       }
       else{
           return this.GoodRaceList
       }
    }
}
export default RaceGenerator