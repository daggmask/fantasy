import WeaponDecorator from './WeaponDecorator'
import ArmourDecorator from './ArmourDecorator'
import TrinketDecorator from './TrinketDecorator'
import CapeDecorator from './CapeDecorator'

class BaseGearDecorator{
    hasWeapon = false
    hasArmour = false
    hasTrinket = false
    hasCape = false

    constructor(){
        throw new Error('Decorator is a static class')
    }
    
   static getGear = (hasWeapon,hasArmour,hasTrinket,hasCape) => {
        let set = {}
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
export default BaseGearDecorator