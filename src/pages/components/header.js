const ulMenu = document.getElementById("ulMenu");
const liSingUp = document.createElement("li");
const liSingIn = document.createElement("li");
const aHighlight1 = document.createElement("a");
const aHighlight2 = document.createElement("a");

const menuIcon = document.getElementById("menuIcon");

const breakWidth = 1000;
const formSearchBar = document.getElementById("formSearchBar");
const newSearchBar = document.getElementById("newSearchBar");

function menuApply([...content]) {
    const arrayMenu = [...content];

    for (let i = 0; i < arrayMenu.length; i++){
        const li = document.createElement("li");
        const a = document.createElement("a");

        li.setAttribute("class", "menuLi");
        a.setAttribute("href", "#");
        a.textContent = `${arrayMenu[i]}`;

        li.appendChild(a);
        ulMenu.appendChild(li);
    }

    aHighlight1.setAttribute("class", "highlight");
    aHighlight1.setAttribute("href", "#");
    liSingUp.setAttribute("class", "menuLi");
    aHighlight1.textContent = "Sing up";

    liSingUp.appendChild(aHighlight1);
    ulMenu.appendChild(liSingUp);

    aHighlight2.setAttribute("class", "highlight");
    aHighlight2.setAttribute("href", "#");
    liSingIn.setAttribute("class", "menuLi");
    aHighlight2.textContent = "Login in";

    liSingIn.appendChild(aHighlight2);
    ulMenu.appendChild(liSingIn);
}

menuApply(["Categories", "Day offers", "Coupons", "Historic", "Sell here!", "Use the app", "Contact"]);

function callMenu() {
    if (ulMenu.style.display === "none") {
        ulMenu.style.zIndex = "4";
        ulMenu.style.display = "flex";
        ulMenu.style.flexDirection = "column";
        ulMenu.style.overflowX = "hidden";
        ulMenu.style.position = "absolute";
        ulMenu.style.height = "400px";
        ulMenu.style.top = "-3px";
        ulMenu.style.backgroundColor = "#58D68D";

        menuIcon.setAttribute("class", "fa-solid fa-x");
    } else {
        ulMenu.style.display = "none";

        menuIcon.setAttribute("class", "fa-solid fa-bars");
    }

    if (window.innerHeight <= 600) {
        ulMenu.style.height = "330px";
    }
}

function replaceSearchBar() {
        const input = document.createElement("input");
        const button = document.createElement("button");
        const img = document.createElement("img");

        input.setAttribute("id", "searchBar");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Search products");
        button.setAttribute("onclick", "searchBarRequired()");
        img.setAttribute("id", "searchIcon");
        img.setAttribute("src", "../../public/assets/images/magGlass.png");
        img.setAttribute("alt", "search_icon");
        
    if (window.innerWidth > breakWidth && formSearchBar[0] === undefined) {
        removeSearchIconRest();

        formSearchBar.appendChild(input);
        button.appendChild(img);
        formSearchBar.appendChild(button);

        if (newSearchBar.childNodes[0] !== undefined) {
            newSearchBar.removeChild(newSearchBar.childNodes[0]);
        }
    } else if (window.innerWidth <= breakWidth) {
        removeSearchIconRest();

        const form = document.createElement("form");

        form.setAttribute("id", "formSearchBar");
        form.setAttribute("action", "");

        if (formSearchBar[0] !== undefined) {
            formSearchBar[0].remove();
        }

        form.appendChild(input);
        button.appendChild(img);
        form.appendChild(button);

        newSearchBar.appendChild(form);

        if (newSearchBar.childNodes[1] !== undefined) {
            newSearchBar.removeChild(newSearchBar.childNodes[1])}
    }
}

replaceSearchBar();
window.addEventListener("resize", replaceSearchBar);

function menuDisplay() {
    if (window.innerWidth <= breakWidth) {
        const menuLi = document.querySelectorAll(".menuLi");

        menuLi[7].style.backgroundColor = "#28B463";
        ulMenu.style.display = "none";
    }  else {
        ulMenu.style.display = "flex";
    }
}

menuDisplay();
window.addEventListener("resize", menuDisplay);

function menuResizeDisplay() {
    if (window.innerWidth > breakWidth) {
        ulMenu.style.zIndex = "0";
        ulMenu.style.flexDirection = "row";
        ulMenu.style.overflowX = "hidden";
        ulMenu.style.position = "relative";
        ulMenu.style.height = "fit-content";
        ulMenu.style.top = "0px";
    }

    menuIcon.setAttribute("class", "fa-solid fa-bars");
}

window.addEventListener("resize", menuResizeDisplay);

function searchBarRequired() {
    const searchBar = document.getElementById("searchBar");

    if (!searchBar.hasAttribute("required")) {
    searchBar.setAttribute("required","");
    } else {
        searchBar.removeAttribute("required");
        searchBar.setAttribute("required","");
    }
}

function removeSearchIconRest() {
    if (formSearchBar.childNodes[0] !== undefined) {
        formSearchBar.removeChild(formSearchBar.childNodes[0]);
    }
}