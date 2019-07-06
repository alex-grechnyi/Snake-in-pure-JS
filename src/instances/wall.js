import Elem from "./elem";

class Wall extends Elem{
    constructor(matrix, coords) {
        super(matrix, coords);
        this.value = 'wall';
    }

}

export default Wall;