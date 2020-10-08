import Ability from './Ability'
class SpellCaster{
    spells = []

    constructor(){}

    learnSpell = (newSpell) => {
       let spell = new Ability(newSpell.name,newSpell.description)
        this.spells.push(spell)}
}
export default SpellCaster