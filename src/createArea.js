export function createArea(){ 
const body = document.querySelector('body');
const container = document.createElement('div');
body.append(container);
container.classList.add('container');

const input = document.createElement('textarea');
container.append(input);
input.classList.add('input');
input.setAttribute('row', '5');
input.setAttribute('cols', '50');

const containerKeyboard = document.createElement('div');
container.append(containerKeyboard);
containerKeyboard.classList.add('keyboard');
}