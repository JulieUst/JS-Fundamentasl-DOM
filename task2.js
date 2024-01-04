// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles
// Для перевірки завдання введіть команду npx jest task2.test.js


function applyStyles() {
    const styledElement = document.getElementById('title');
    const myDivChildren = document.getElementById("myDiv").children;
    const firstPar = myDivChildren[0];
    const secondPar = myDivChildren[1];
    const thirdPar = myDivChildren[2];
    const fourthPar = myDivChildren[3];
    const myList = document.getElementById("myList");
    const span = document.getElementsByTagName("span")[0];

    styledElement.style.backgroundColor = 'lightgreen';
    firstPar.style.fontWeight = '700';
    secondPar.style.color = 'red';
    thirdPar.style.textDecoration = 'underline';
    fourthPar.style.fontStyle = 'italic';
    myList.style.listStyle = 'none';
    myList.style.display = 'flex';
    span.style.display = 'none';
}

module.exports = applyStyles;
