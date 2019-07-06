import Elem from "./elem";

class Fruit extends Elem{
    constructor(matrix, coords) {
        super(matrix, coords);
        this.value = 'fruit';
    }

}

export default Fruit;