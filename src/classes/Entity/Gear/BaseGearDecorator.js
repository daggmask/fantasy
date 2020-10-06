class BaseGearDecorator{
    hasWeapon = false
    hasArmour = false
    hasTrinket = false
    hasCape = false

    constructor(){
        throw new Error('Decorator is a static class')
    }
    
   static getGear = (hasWeapon,hasArmour,hasTrinket,hasCape) => {
        set = {}
        if(hasWeapon){
            set.weapon = new WeaponDecorator("Sword",1,6)
        }
        if(hasArmour){
            set.armour = new ArmourDecorator("Good","Common")
        }
        if(hasTrinket){
            set.trinket = new TrinketDecorator("Ring", "Finger")
        }
        if(hasCape){
            set.cape = new CapeDecorator("Red")
        }
        return set
    }
}