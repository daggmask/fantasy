import BaseGearDecorator from './BaseGearDecorator'
class Gear{
   static set = {}

    constructor(){

    }
   static wear = (wearWeapon,wearArmour,wearTrinket,wearCape) => { this.set = BaseGearDecorator.getGear(
     wearWeapon,
     wearArmour,
     wearTrinket,
     wearCape
   );}
}
export default Gear