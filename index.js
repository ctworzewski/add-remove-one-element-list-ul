
const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const li = document.createElement('li');


btn.style.fontSize = '30px';
btn.style.padding = '30px';
btn.style.letterSpacing = '3px';
btn.style.cursor = 'pointer';

document.body.style.backgroundColor = 'lightblue';


const showList = function () {
    const name = ul.appendChild(li);
    name.innerHTML = 'Cezary';
}

const removeList = function () {
    const li_delete = ul.querySelector('li');
    ul.removeChild(li_delete);
}

btn.addEventListener('click', showList);
btn.addEventListener('dblclick', removeList);