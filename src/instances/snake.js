import Elem from './elem';

class Snake extends Elem{
    constructor(matrix, coords, course) {
        super(matrix, coords);
        this.value = 'snake';
        this.course = course;
        this.newCourse = course;
        this.isAlive = true;
    }

    move() {
        if (!this.isAlive) {
            return;
        }
        this.course = this.newCourse;
        let prevX = this.x;
        let prevY = this.y;

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

        let tail = this.coords.pop();
        this.matrix.setCell(tail[0], tail[1], '');

        this.coords.unshift(head);
        this.matrix.setCell(head[0], head[1], 'snake');
    }

    _checkAlive (head) {
        return head[0] >= 1 && head[0] <= this.matrix.cols &&
            head[1] >= 1 && head[1] <=20;
    }

}

export default Snake;