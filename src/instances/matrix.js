class Matrix {
    constructor(elem) {
        this.elem = elem;
        this.cells = [];
    }

    create () {
        for (let i = 0; i < 400; i++) {
            let div = document.createElement('div');
            this.elem.appendChild(div);
        }
    };

    getCell(x, y) {
        let num = this._calcNum(x, y);
        return this.cells[num]
    };

    setCell(x, y, value) {
        let num = this._calcNum(x, y);
        this.cells[num] = value;
        this.elem.children[num].className = value;
    };

    _calcNum(x, y) {
        return x-1 + (y-1)*20
    }
}
export default Matrix;