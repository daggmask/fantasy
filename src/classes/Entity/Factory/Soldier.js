import Gear from '../Gear/Gear'
class Soldier{
    rank = ""
    gear = {}

    constructor(){
        this.rank = "Recruit"
        this.gear = new Gear()
    }
}
export default Soldier