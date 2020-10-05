class SpellCaster{
    spells = []

    constructor(){}

    learnSpell = (newSpell) => {
        spell = new Ability(newSpell.name,newSpell.description)
        this.spells.push(spell)}
}