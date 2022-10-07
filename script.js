const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)


// console log innerHeight to check where to animate. 

// checkBoxes();
function checkBoxes() {
const triggerBox = window.innerHeight / 5 * 4

boxes.forEach(box => {
    // this method returns a DOMrect object providing information about the size of an element and it's postion relative to the viewport;
    const boxTop= box.getBoundingClientRect().top

    if(boxTop < triggerBox) {
        box.classList.add('show')
    } else {

        box.classList.remove('show')
    }
})
}