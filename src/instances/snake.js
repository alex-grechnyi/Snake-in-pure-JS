class Snake {
    constructor(matrix, x, y, course) {
        this.matrix = matrix;
        this.x = x;
        this.y = y;
        this.course = course;
        this.newCourse = course;
    }

    render() {
        this.matrix.setCell(this.x, this.y, 'snake')
    }

    move() {
        this.matrix.setCell(this.x, this.y, '');
        this.course = this.newCourse;
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
        this.matrix.setCell(this.x, this.y, 'snake');
    }

}

export default Snake;