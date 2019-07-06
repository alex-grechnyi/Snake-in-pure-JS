import Matrix from './instances/matrix';
import Snake from './instances/snake';


window.addEventListener('load', function (e) {
    let field = document.querySelector('.fields');
    let matrix = new Matrix(field);
    matrix.create();
    matrix.setCell(19, 1, 'fruit');

    let snake = new Snake(matrix, [[3,5], [2,5]], 'right');
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
    if (snake.isAlive){
    let timer = setInterval(() => {
        snake.move();
        !snake.isAlive && clearInterval(timer);
    }, 400)
    }
    else {

    }
});



