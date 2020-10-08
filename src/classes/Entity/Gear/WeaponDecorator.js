class WeaponDecorator{
    weaponName = ""
    weaponDamage = 0
    weaponWeight = 0
    weaponWeightUnit = "kg"

    constructor(name,damage,weight){
        this.weaponName = name
        this.weaponDamage = damage
        this.weaponWeight = weight
    }
}

export default WeaponDecorator