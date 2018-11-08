
const btn = document.querySelector('button'); //tworze zmienną btn i pobieram ten znacznik
const ul = document.querySelector('ul'); // jw.
const li = document.createElement('li'); //jw.

//W tym bloku tworze style CSS dla przycisku za pomocą JS
btn.style.fontSize = '30px';
btn.style.padding = '30px';
btn.style.letterSpacing = '3px';
btn.style.cursor = 'pointer';

//Dodanie tła dla strony
document.body.style.backgroundColor = 'lightblue';


const showList = function () {
    const name = ul.appendChild(li); // przypisuję do zmiennej name - do mojego pobranej listy ul, przypisuję metodę appendChild, której przekazuje parametr li
    name.innerHTML = 'Cezary'; // do mojej zmiennej wprowadzam wartość
}

const removeList = function () {
    const li_delete = ul.querySelector('li'); //do zmiennej li_delete przypisuję moją listę i pierwszy napotkany element li
    ul.removeChild(li_delete); //usuwam z mojej listy li
}

// nasłuchuje na przycisk - czekam aż użytkownik naciśnie go jeden raz i wywołuję funkcje showList()
btn.addEventListener('click', showList);
btn.addEventListener('dblclick', removeList); // nasłuchuje na przycisk - czekam aż użytkownik naciśnie dwa razy raz i wywołuję funkcje removeList()
