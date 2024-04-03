const pinnedMessage = document.getElementById("pinnedMessageSpace");
const products = document.getElementById("products");

window.addEventListener("scroll", fixedMessage);

function fixedMessage() {
    if (products.getBoundingClientRect().top < 95) {
        pinnedMessage.style.zIndex = "3";
        pinnedMessage.style.position = "fixed";
        pinnedMessage.style.top = "15px";   
        pinnedMessage.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    } else {
        pinnedMessage.style.zIndex = "1";
        pinnedMessage.style.position = "relative";
        pinnedMessage.style.top = "0";
        pinnedMessage.style.boxShadow = "none";
    }
}

fixedMessage();

window.addEventListener("scroll", heightCondition);

function heightCondition() {
    if (window.innerHeight <= 600 && products.getBoundingClientRect().top < 95) {
        pinnedMessage.style.display = "flex";
    } else if (window.innerHeight <= 600 && products.getBoundingClientRect().top > 95) {
        pinnedMessage.style.display = "none";
    }
}

heightCondition();