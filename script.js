const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)


// console log innerHeight to check where to animate. 

checkBoxes();
function checkBoxes() {
    console.log(window.innerHeight)
}