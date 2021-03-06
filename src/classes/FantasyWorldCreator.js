import FantasyWorld from "./FantasyWorld";


class FantasyWorldCreator {
  static hasBeenInstantiated = false;
  static world

  constructor() {
    if (FantasyWorldCreator.hasBeenInstantiated) {
      throw new Error("You can only create one instance of Game!");
    }
    FantasyWorldCreator.hasBeenInstantiated = true;
  }

 createWorld = (worldName) => {
      this.world = new FantasyWorld(worldName)
      return this.world
  }
}
export default FantasyWorldCreator
