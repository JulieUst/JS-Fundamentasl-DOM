// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress
// 

// Ваш код ..
const form = document.getElementsByTagName("fieldset")[0]; 
const nameInput = form.querySelector('input[name="fio"]');
const phoneInput = form.querySelector('input[name="phone"]');
const dobInput = form.querySelector('input[name="birthday"]');
const emailInput = form.querySelector('input[name="email"]');

const name = nameInput.value;
const phoneNumber = phoneInput.value;
const dataOfBirth = dobInput.value;
const emailAddress = emailInput.value;

module.exports = {
    name,
    phoneNumber,
    dataOfBirth,
    emailAddress
};
