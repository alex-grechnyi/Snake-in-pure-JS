class Matrix {
    constructor(elem, rows=20, cols=20) {
        this.elem = elem;
        this.rows = rows;
        this.cols = cols;
        this.cells = [];
    }

    create () {
        for (let i = 0; i < this.rows * this.cols; i++) {
            let div = document.createElement('div');
            if (i % this.cols === 0) {
                div.classList.add('row-start');
            }
            this.elem.appendChild(div);
            this.cells[i] = '';
        }
    };

    getCell(x, y) {
        let num = this._calcNum(x, y);
        return this.cells[num]
    };

    setCell(x, y, value) {
        let num = this._calcNum(x, y);
        this.cells[num] = value;
        this.elem.children[num].setAttribute('data-game', value);
    };

    _calcNum(x, y) {
        return x-1 + (y-1) * this.cols
    }
}
export default Matrix;