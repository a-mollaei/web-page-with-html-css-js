const right = document.getElementById('right');
const threeLine = document.getElementById('threeLine');
const hr = document.querySelectorAll('#threeLine hr');
let firstLine = document.getElementById('topLine').classList
let secondLine = document.getElementById('shortWidth').classList
let thirdLine = document.getElementById('bottomLine').classList
console.log(hr);
let statusMenu = false ;

threeLine.addEventListener('click' , () =>{
    let menu = right.classList;
    let btnClose = threeLine.classList
    if(!statusMenu){
        menu.add('statusZero')
        btnClose.add('statusRight')
        firstLine.add('firstLine')
        secondLine.add('secondLine')
        thirdLine.add('thirdLine')
        statusMenu = true
    }else{
        menu.remove('statusZero')
        btnClose.remove('statusRight')
        firstLine.remove('firstLine')
        secondLine.remove('secondLine')
        thirdLine.remove('thirdLine')
        statusMenu = false;
    }
})