/*
let pName = document.getElementById('name');
let pSurname = document.getElementById('surname');
let pPhone = document.getElementById('phone');
const button = document.querySelector('button');

function dataBase() {
    let imie = document.getElementById('fname');
    let nazwisko = document.getElementById('lname');
    let tel = document.getElementById('phoneNumber');
    pName.textContent = imie.value;
    pSurname.textContent = nazwisko.value;
    pPhone.textContent = tel.value;
}

button.addEventListener('click', dataBase);
*/

// Opcja numer dwa;)
function dataBase() {
    let imie = document.getElementById('fname');
    let nazwisko = document.getElementById('lname');
    let tel = document.getElementById('phoneNumber');
    document.getElementById('name').textContent = imie.value;
    document.getElementById('surname').textContent = nazwisko.value;
    document.getElementById('phone').textContent = tel.value;
}
document.querySelector('button').addEventListener('click', dataBase);
