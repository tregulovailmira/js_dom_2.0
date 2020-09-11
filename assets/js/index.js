'use strict'

/*1.Сделать два инпута: в один вводить параметр(число), во втором показывать объем шара при заданном параметре.*/

const divFirstTask = document.getElementById('firstTask');

const input = document.createElement('input');
input.type = 'number';
input.setAttribute('min', '0');

let resultInput = document.createElement('input');
resultInput.readOnly = true;

const calculateButton = document.createElement('button');
calculateButton.textContent = 'Calculate';
calculateButton.addEventListener('click', () => {
    const {value: inputValue} = input;

    if (inputValue < 0) {
        throw new RangeError('Radius must be a positive value!');
    } else {
        return resultInput.value = 4 / 3 * Math.PI * inputValue ** 3;
    }
});

divFirstTask.append(
    document.createTextNode('Enter radius, m:'),
    input,
    document.createTextNode('Sphere volume, m3:'),
    resultInput,
    calculateButton);

/*2.Дан элемент #elem. Реализуйте 4 функции:
- Добавьте ему класс www.
- Удалите у него класс www.
- Проверьте наличие у него класса www.
- Добавьте ему класс www, если его нет и удалите - если есть.*/

const divSecondTask = document.getElementById('secondTask');

console.log('Contains www class: ', isContainsClass(divSecondTask, 'www'));
addClass(divSecondTask, 'www');
console.log('Contains www class: ', isContainsClass(divSecondTask, 'www'));
removeClass(divSecondTask, 'www');
console.log('Contains www class: ', isContainsClass(divSecondTask, 'www'));
setClass(divSecondTask, 'www');
console.log('Contains www class: ', isContainsClass(divSecondTask, 'www'));

function addClass(element, className) {
    return element.classList.add(className);
}

function removeClass(element, className) {
    return element.classList.remove(className);
}

function setClass(element, className) {
    return element.classList.toggle(className);
}

function isContainsClass(element, className) {
    return element.classList.contains(className);
}

/*3. Вставьте элементы массива объектов(id, title, description) в конец ul так,
чтобы каждый на каждый объект был свой li.
Сделайте так, чтобы по нажатию на li - он подсвечивался другим цветом.
Сделайте так, чтобы по нажатию на кнопку внтри li эта li удалялась из разметки.*/
const divThirdTask = document.getElementById('thirdTask');
const list = document.createElement('ul');
divThirdTask.append(list);

const arrayObj = [
    {
        id: '1',
        title: 'test',
        description: 'testDescription',
    },
    {
        id: '2',
        title: 'test2',
        description: 'testDescription2',
    },
    {
        id: '3',
        title: 'test3',
        description: 'testDescription3',
    }];

arrayObj.forEach((item) => {
        const {id, title, description} = item;
        const value = `id = ${id}, title = ${title}, description = ${description},`
        const li = createListItem({
            value,
            children: [createButton({text: "Delete", onClick: buttonHandler})],
            onClick: liHandler,
        });
        list.append(li);
    }
);

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
function createButton({ text, onClick = () => {} }) {
    const button = document.createElement("button");

    button.onclick = onClick;
    button.textContent = text;
    return button;
}

function buttonHandler(event) {
    event.target.parentNode.remove();
}

function liHandler(event) {
    const {
        target: {classList}
    } = event;
    classList.toggle('changeColor');
}

/*4. Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять
с ним различные операции. Класс должен работать следующим образом:
const elem = new Elem('селектор');
elem.html('!'); //запишет в текст элемента '!'
elem.append('!'); //запишет в начало элемента '!'
elem.prepend('!'); //запишет в конец элемента '!'
elem.attr('class', 'www'); //запишет в атрибут class значение www
//Должны работать цепочки методов:
elem.html('hello').append('!').prepend('!').attr('class', 'www').attr('title', 'hello');*/

class Elem {
    constructor(selector) {
        this.elem = document.querySelector(selector);
        if (!this.elem) {
            throw new TypeError('It is not a valid selector');
        }
    }

    html = (string) => {
        this.elem.textContent = string;
        return this;
    }

    append = (string) => {
        this.elem.textContent = this.elem.textContent + string;
        return this;
    }

    prepend = (string) => {
        this.elem.textContent = string + this.elem.textContent;
        return this;
    }

    attr = (attribute, value) => {
        this.elem.setAttribute(attribute, value);
        return this;
    }
}

const elem = new Elem('.fourthTask');