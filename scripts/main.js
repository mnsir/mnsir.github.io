var переменная = document.querySelector('img');

переменная.onclick = function () {
    var atr = переменная.getAttribute('src');
    if (atr === 'images/pic.png') {
        переменная.setAttribute('src', 'images/pic2.jpg');
    } else {
        переменная.setAttribute('src', 'images/pic.png');
    }
};

var заголовок = document.querySelector('h1');
var кнопка = document.querySelector('button');

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var имя = localStorage.getItem('name');
    заголовок.textContent = 'Внимание, ' + имя + '!';
}

кнопка.onclick = function () {
    setUserName();
};

function setUserName() {
    var имя = prompt('Введите Ваше имя!');
    localStorage.setItem('name', имя);
    заголовок.textContent = 'Внимание, ' + имя + '!';
};