import Gear from '../Gear/Gear'
import Ability from './Ability'
class Soldier {
  rank = "";
  gear = new Gear();
  spells = [];

  constructor() {
    this.rank = "Recruit";
  }

  learnSpell = (newSpell) => {
    let spell = new Ability(newSpell.name, newSpell.description);
    this.spells.push(spell);
  };
}
export default Soldier