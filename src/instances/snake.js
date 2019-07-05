class Snake {
    constructor(matrix, x, y, course) {
        this.matrix = matrix;
        this.x = x;
        this.y = y;
        this.course = course;
        this.newCourse = course;
        this.isAlive = true;
    }

    render() {
        this.matrix.setCell(this.x, this.y, 'snake')
    }

    move() {
        if (!this.isAlive) {
            return;
        }
        this.course = this.newCourse;
        let prevX = this.x;
        let prevY = this.y;

        switch (this.course) {
            case 'right':
                this.x++;
                break;
            case 'left':
                this.x--;
                break;
            case 'up':
                this.y--;
                break;
            case 'down':
                this.y++;
                break;

        }
        if (!this._checkAlive()) {
            this.isAlive = false;
            return;
        }
        this.matrix.setCell(prevX, prevY, '');
        this.matrix.setCell(this.x, this.y, 'snake');
    }

    _checkAlive () {
        return this.x >= 1 && this.x <= 20 &&
            this.y >= 1 && this.y <=20;
    }

}

export default Snake;