var ���������� = document.querySelector('img');

����������.onclick = function () {
    var atr = ����������.getAttribute('src');
    if (atr === 'images/pic.png') {
        ����������.setAttribute('src', 'images/pic2.jpg');
    } else {
        ����������.setAttribute('src', 'images/pic.png');
    }
};

var ��������� = document.querySelector('h1');
var ������ = document.querySelector('button');

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var ��� = localStorage.getItem('name');
    ���������.textContent = '��������, ' + ��� + '!';
}

������.onclick = function () {
    setUserName();
};

function setUserName() {
    var ��� = prompt('������� ���� ���!');
    localStorage.setItem('name', ���);
    ���������.textContent = '��������, ' + ��� + '!';
};