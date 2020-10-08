import Entity from './Entity/Entity'
class PopulationCreator {
  static createEntity = (
    name,
    age,
    isEvil,
    race,
    entityClass,
    level,
    hasMagicka
  ) => {
    return new Entity(name, age, isEvil, race, entityClass, level, hasMagicka);
  };
}
export default PopulationCreator