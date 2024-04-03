const url = "https://fakestoreapi.com/products";

async function getProductsAndCallApply(slide, indexTitle, indexDescription, indexCategory, indexPrice, indexImage) {
    const response = await fetch(url);
    const data = await response.json()
    .catch(() => apiError(slide, indexTitle, indexDescription, indexCategory, indexPrice, indexImage));

    applyTitle(slide, data, indexTitle);
    applyDescription(slide, data, indexDescription);
    applyCategory(slide, data, indexCategory);
    applyPrice(slide, data, indexPrice);
    applyImage(slide, data, indexImage);
}

function apiError(slide, indexTitle = null, indexDescription = null, indexCategory = null, indexPrice = null, indexImage = null) {
    if (indexTitle, indexImage === null) {
        const span = document.createElement("span");
   
        slide.style.justifyContent = "space-around";

        span.innerHTML = "API.URL isn't working";
        slide.appendChild(span);
    }
}

function applyTitle(slide, data, index) {
    if (index !== null) {
        const h1 = document.createElement("h1");

        h1.innerHTML = `${data[index].title}`;
        slide.appendChild(h1);
    } else if (data === null) {
        const h1 = document.createElement("h1");

        h1.innerHTML = "API.title isn't working";
        slide.appendChild(h1);
    }
}

function applyDescription(slide, data, index) {
    if (index !== null) {
        const span = document.createElement("span");

        span.setAttribute("class", "description");
        span.style.color = "#404040";

        descriptionLength(data[index].description, span);

        slide.appendChild(span);
    } else if (data === null) {
        const span = document.createElement("span");

        span.innerHTML = "API.description isn't working";
        slide.appendChild(span);
    }
}

function descriptionLength(description, element) {
    const splited = description.split(" ");

    splited.map(w => addWord(w));

    function addWord(w) {
        element.textContent += w + " ";
    }
}

function applyCategory(slide, data, index) {
    if (index !== null) {
        const h2 = document.createElement("h2");

        h2.innerHTML = `${data[index].category}`;
        slide.appendChild(h2);
    } else if (data === null) {
        const h2 = document.createElement("h2");

        h2.innerHTML = "API.category isn't working";
        slide.appendChild(h2);
    }
}

function applyPrice(slide, data, index) {
    if (index !== null) {
        const h3 = document.createElement("h3");

        pricePoint(data[index].price, h3);
        slide.appendChild(h3);
    } else if (data === null) {
        const h3 = document.createElement("h3");

        h3.innerHTML = "API.price isn't working";
        slide.appendChild(h3);
    }
}

function pricePoint(price, element) {
    const string = price.toString();
    const splited = string.split("");
    const found = splited.findIndex(e => e == ".");

    if (string[found + 2] === undefined) {
        element.innerHTML = `US$ ${price}0`;
    } else {
        element.innerHTML = `US$ ${price}`;
    }
}

function applyImage(slide, data, index) {
    if (index !== null) {
        const img = document.createElement("img");
        const a = document.createElement("a");

        img.setAttribute("src" ,`${data[index].image}`);
        img.setAttribute("alt", "product_image");
        a.setAttribute("href", "##");
    
        a.appendChild(img);
        slide.appendChild(a);
    } else if (data === null) {
        const span = document.createElement("span");

        span.innerHTML = "API.image isn't working";
        slide.appendChild(span);
    }
}

class ApplyAnyProduct {
    appendThenInnerTitle(slide, index){
        getProductsAndCallApply(slide, index, null, null, null, null);
    }

    appendThenInnerDescription(slide, index){
        getProductsAndCallApply(slide, null, index, null, null, null);
    }

    appendThenInnerCategory(slide, index){
        getProductsAndCallApply(slide, null, null, index, null, null);
    }

    appendThenInnerPrice(slide, index){
        getProductsAndCallApply(slide, null, null, null, index, null);
    }

    appendThenInnerImage(slide, index){
        getProductsAndCallApply(slide, null, null, null, null, index);
    }
}

export default ApplyAnyProduct;