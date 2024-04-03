const firstSlide = document.getElementById("firstSlide");
const secondSlide = document.getElementById("secondSlide");
const thirdSlide = document.getElementById("thirdSlide");
const fourthSlide = document.getElementById("fourthSlide");
const fifthSlide = document.getElementById("fifthSlide");
const allSlides = [firstSlide, secondSlide, thirdSlide, fourthSlide, fifthSlide];
const dinamicQuantity = allSlides.length;
let controller = 1;

const firstRadio = document.getElementById("firstRadio");
const secondRadio = document.getElementById("secondRadio");
const thirdRadio = document.getElementById("thirdRadio");
const fourthRadio = document.getElementById("fourthRadio");
const fifthRadio = document.getElementById("fifthRadio");
const allRadioButtons = [firstRadio, secondRadio, thirdRadio, fourthRadio, fifthRadio];

function slideAfter() {
    if (controller < dinamicQuantity) {
        allSlides[controller-1].style.right = "100vw";
        allSlides[controller].style.right = "0vw";

        if (controller < (dinamicQuantity - 1)) {
            allSlides[controller+1].style.right = "-100vw";
        }

    controller++;

    slideRadio();
    } else if (controller = dinamicQuantity) {
        allSlides[dinamicQuantity-1].style.right = "100vw";
        allSlides[0].style.right = "0vw";

            if (controller < (dinamicQuantity - 1)) {
                allSlides[controller+1].style.right = "-100vw";
            }

        controller = 1;

        slideRadio();
    }
}

function slideBefore() {
    if (controller >= 2 && controller <= dinamicQuantity) {
        allSlides[controller-2].style.right = "0vw";
        allSlides[controller-1].style.right = "-100vw";

        controller--;

        slideRadio();
    } else if (controller = 1) {
        allSlides[dinamicQuantity-1].style.right = "0vw";
        allSlides[0].style.right = "-100vw";

        controller = dinamicQuantity;

        slideRadio();
    }
}

function slideRadio() {
    allRadioButtons.forEach(e => e.removeAttribute("checked"));
    allRadioButtons[controller-1].setAttribute("checked","");
}

slideRadio();

setInterval(function () { slideAfter();}, 6000);