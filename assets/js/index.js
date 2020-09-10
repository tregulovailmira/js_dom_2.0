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
};

/*3. Вставьте элементы массива объектов(id, title, description) в конец ul так,
чтобы каждый на каждый объект был свой li.
Сделайте так, чтобы по нажатию на li - он подсвечивался другим цветом.
Сделайте так, чтобы по нажатию на кнопку внтри li эта li удалялась из разметки.*/
const divThirdTask = document.getElementById('thirdTask');
const list = document.createElement('ul');
divThirdTask.append(list);

class Obj{
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
};
const arrayObj = [ new Obj('first', 'test', 'testDescription'), new Obj('second', 'test2', 'testDescription2'), new Obj('third', 'test3', 'testDescription3') ];

for (let item of arrayObj) {
    const { id, title, description } = item;
    const value = `id = ${id}, title = ${title}, description = ${description},`
    const li = createListItem({
        value,
        children: [createButton({ id, text: "Delete", onClick: buttonHandler })],
        onClick: liHandler,
    });
    list.append(li);
}

/*
* @param {object} props
* @param {string} props.value
* @param {Node[]} props.children
* @param {Function} props.onClick
* @returns {HTMLLIElement} li
*/
function createListItem({ value, children, onClick = () => {} }) {
    const li = document.createElement("li");
    li.append(document.createTextNode(value), ...children);
    li.onclick = onClick;
    return li;
}

/*
* @param {object} props
* @param {string} props.text
* @param {Function} props.onClick
* @returns {HTMLButtonElement} btn
*/
function createButton({text, onClick = () => {}, }) {
    const button = document.createElement("button");

    button.onclick = onClick;
    button.textContent = text;
    return button;
}

function buttonHandler(event) {
    const {
        target: {
            dataset: { value },
        },
    } = event;
    event.target.parentNode.remove();
}

function liHandler(event) {
    const {
        target: {classList}
    } = event;
    classList.toggle('changeColor');
}