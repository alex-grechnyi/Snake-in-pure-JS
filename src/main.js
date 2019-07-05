import Matrix from './instances/matrix';
import Snake from './instances/snake';

window.addEventListener('load', function (e) {
    let div = document.querySelector('.fields');
    let matrix = new Matrix(div);
    matrix.create();
    matrix.setCell(19, 1, 'fruit');

    let snake = new Snake(matrix, 8, 8, 'right');
    snake.render();

    document.onkeydown = function (e) {
        switch (e.key) {
            case 'w':
                if (snake.course !== 'down') {snake.newCourse = 'up'}
                break;
            case 's':
                if (snake.course !== 'up') {snake.newCourse = 'down'}
                break;
            case 'd':
                if (snake.course !== 'left') {snake.newCourse = 'right'}
                break;
            case 'a':
                if (snake.course !== 'right') {snake.newCourse = 'left'}
                break;
        }
    };

    setInterval(() => {snake.move()}, 500)
});



