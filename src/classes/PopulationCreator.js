import Entity from './Entity/Entity'
class PopulationCreator {
  static createEntity = (name,age,isEvil) => { return new Entity(name,age,isEvil)};
}
export default PopulationCreator