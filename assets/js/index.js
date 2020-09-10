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