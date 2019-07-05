import Matrix from './instances/matrix';

window.addEventListener('load', function (e) {
    let div = document.querySelector('.fields');
    let matrix = new Matrix(div);
    matrix.create();
    matrix.setCell(19, 1, 'snake');
});
