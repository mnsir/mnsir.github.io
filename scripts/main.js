var _pic = document.querySelector('img');

_pic.onclick = function () {
    var atr = _pic.getAttribute('src');
    if (atr === 'images/pic.png') {
        _pic.setAttribute('src', 'images/pic2.jpg');
    } else {
        _pic.setAttribute('src', 'images/pic.png');
    }
};

var _h1 = document.querySelector('h1');
var _button = document.querySelector('button');

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var _name = localStorage.getItem('name');
    _h1.textContent = 'Внимание, ' + _name + '!';
}

_button.onclick = function () {
    setUserName();
};

function setUserName() {
    var _name = prompt('Введите Ваше имя!');
    localStorage.setItem('name', _name);
    _h1.textContent = 'Внимание, ' + _name + '!';
};
