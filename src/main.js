import Matrix from './instances/matrix';
import Snake from './instances/snake';
import Fruit from "./instances/fruit";
import Wall from "./instances/wall";
import {Utility} from "./utility/utility";


window.addEventListener('load', function (e) {
    let field = document.querySelector('.fields');
    let matrix = new Matrix(field);
    matrix.create();
    (new Fruit(matrix, [[7,4]])).render();
    (new Wall(matrix, [[6,6], [5,6], [4,6]])).render();
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

    let timer = setInterval(() => {
        snake.move();
        if (snake.isEaten) {
            let x, y;
            do {
                x = Utility.random(1, matrix.cols);
                y = Utility.random(1, matrix.rows);
            }
            while (matrix.getCell(x, y) !== '');
            (new Fruit(matrix, [[x,y]])).render();
        }
        !snake.isAlive && clearInterval(timer);

    }, 400)

});



