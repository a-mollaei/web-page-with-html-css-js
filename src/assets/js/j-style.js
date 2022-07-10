const right = document.getElementById("right");
const threeLine = document.getElementById("threeLine");
const hr = document.querySelectorAll("#threeLine hr");
let firstLine = document.getElementById("topLine").classList;
let secondLine = document.getElementById("shortWidth").classList;
let thirdLine = document.getElementById("bottomLine").classList;
const body = document.querySelector("body");
const about = document.getElementById("about");
const basicInfo = document.getElementById("basicInfo");
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
    {name:about , SW:80 , classin:'transformLeft'},
    {name:basicInfo , SW:80 , classin:'transformRight' }
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
