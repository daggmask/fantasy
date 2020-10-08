import BaseGearDecorator from './BaseGearDecorator'
class Gear{
   set = {}

    constructor(){

    }
   wear = (wearWeapon,wearArmour,wearTrinket,wearCape) => { return BaseGearDecorator.getGear(
     wearWeapon,
     wearArmour,
     wearTrinket,
     wearCape
   );}
}
export default Gear