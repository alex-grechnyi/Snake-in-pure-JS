class Elem {
    constructor(matrix, coords) {
        this.matrix = matrix;
        this.coords = coords;
        this.value = '';
    }

    render() {
        for (let coord of this.coords) {
            this.matrix.setCell(coord[0], coord[1], this.value)
        }
    }
}

export default Elem;