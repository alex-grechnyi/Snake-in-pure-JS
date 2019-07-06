import Elem from './elem';

class Snake extends Elem{
    constructor(matrix, coords, course) {
        super(matrix, coords);
        this.value = 'snake';
        this.course = course;
        this.newCourse = course;
        this.isAlive = true;
        this.isEaten = false;
    }

    move() {
        if (!this.isAlive) {
            return;
        }
        this.isEaten = false;
        this.course = this.newCourse;

        let head = this.coords[0].slice();

        switch (this.course) {
            case 'right':
                head[0]++;
                break;
            case 'left':
                head[0]--;
                break;
            case 'up':
                head[1]--;
                break;
            case 'down':
                head[1]++;
                break;

        }
        if (!this._checkAlive(head)) {
            this.isAlive = false;
            return;
        }
        let currentCell = this.matrix.getCell(head[0], head[1]);

        if (currentCell === 'snake' || currentCell === 'wall') {
            this.isAlive = false;
            return
        }
        if (currentCell === 'fruit') {
            this.isEaten = true;
        }
        else {
            let tail = this.coords.pop();
            this.matrix.setCell(tail[0], tail[1], '');
        }

        this.coords.unshift(head);
        this.matrix.setCell(head[0], head[1], 'snake');
    }

    _checkAlive(head) {
        return head[0] >= 1 && head[0] <= this.matrix.cols &&
            head[1] >= 1 && head[1] <= this.matrix.rows;
    }

}

export default Snake;