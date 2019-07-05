import Matrix from './instances/matrix';
import Snake from './instances/snake';

window.addEventListener('load', function (e) {
    let div = document.querySelector('.fields');
    let matrix = new Matrix(div);
    matrix.create();
    matrix.setCell(19, 1, 'fruit');
    let snake = new Snake(matrix, 8, 8, 'right');
    snake.render();
    setInterval(() => {snake.move()}, 500)
});
