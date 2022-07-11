const right = document.getElementById("right");
const threeLine = document.getElementById("threeLine");
const hr = document.querySelectorAll("#threeLine hr");
let firstLine = document.getElementById("topLine").classList;
let secondLine = document.getElementById("shortWidth").classList;
let thirdLine = document.getElementById("bottomLine").classList;
const body = document.querySelector("body");
const about = document.getElementById("about");
const basicInfo = document.getElementById("basicInfo");
const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu');
let statusMenu = false;

threeLine.addEventListener("click", () => {
  let menu = right.classList;
  let btnClose = threeLine.classList;
  if (!statusMenu) {
    menu.add("statusZero");
    btnClose.add("statusRight");
    firstLine.add("firstLine");
    secondLine.add("secondLine");
    thirdLine.add("thirdLine");
    statusMenu = true;
  } else {
    menu.remove("statusZero");
    btnClose.remove("statusRight");
    firstLine.remove("firstLine");
    secondLine.remove("secondLine");
    thirdLine.remove("thirdLine");
    statusMenu = false;
  }
});

const nodes = [
    {name:about , SW:20 , classin:'transformLeft'},
    {name:basicInfo , SW:20 , classin:'transformRight' }
]
function scrollCustom(nodes){
    console.log(window.scrollY)
    nodes.forEach(element => {
        if(window.scrollY >= element.SW){
            element.name.classList.add(element.classin)
        }
    });
}
document.addEventListener("scroll", () => {
  scrollCustom(nodes);
});

document.addEventListener('scroll' , ()=>{
  if(window.scrollY >= 280){
    menu.classList.add('scroll280');
  }else if(window.scrollY < 280){
    menu.classList.remove('scroll280');
  }
})