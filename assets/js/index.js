'use strict'

/*1.Сделать два инпута: в один вводить параметр(число), во втором показывать объем шара при заданном параметре.*/

const divFirstTask = document.getElementById('firstTask');

const input = document.createElement('input');
input.type = 'number';
divFirstTask.appendChild(document.createTextNode('Enter radius, m:'));
divFirstTask.appendChild(input);

let resultInput = document.createElement('input');
resultInput.readOnly = true;
divFirstTask.appendChild(document.createTextNode('Sphere volume, m3:'));
divFirstTask.appendChild(resultInput);

const calculateButton = document.createElement('button');
calculateButton.textContent = 'Calculate';
divFirstTask.appendChild(calculateButton);
calculateButton.addEventListener('click', (event) => {
    return resultInput.value = 4/3 * Math.PI * input.value ** 3;
});

/*2.Дан элемент #elem. Реализуйте 4 функции:
- Добавьте ему класс www.
- Удалите у него класс www.
- Проверьте наличие у него класса www.
- Добавьте ему класс www, если его нет и удалите - если есть.*/

const divSecondTask = document.getElementById('secondTask');

divSecondTask.onclick = () => {
    divSecondTask.classList.toggle('www');
};

console.log('Contains www class: ', isContainsClass(divSecondTask, 'www'));
addClass(divSecondTask, 'www');
console.log('Contains www class: ', isContainsClass(divSecondTask, 'www'));
removeClass(divSecondTask, 'www');
console.log('Contains www class: ', isContainsClass(divSecondTask, 'www'));
setClass(divSecondTask, 'www');
console.log('Contains www class: ', isContainsClass(divSecondTask, 'www'));

function addClass(element, className) {
    return element.classList.add(className);
};

function removeClass(element, className) {
    return element.classList.remove(className);
};

function setClass(element, className) {
    if(element.classList.contains(className)) {
        return element.classList.remove(className);
    } else {
        return element.classList.add(className);
    }
};

function isContainsClass(element, className) {
    return element.classList.contains(className);
}