import ApplyAnyProduct from "../api/FakeStoreApi.js";

const productsSpace = document.getElementById("productsSpace");
const products = document.getElementsByClassName("product");
const Product = new ApplyAnyProduct;

async function applyDiv(quantity) {
    for (let i = 0; i < quantity; i++) {
        const cardInformations = document.createElement("div");
        const cardHead = document.createElement("div");
        const spanHead = document.createElement("span");
        const divHead = document.createElement("div");

        cardInformations.setAttribute("class", "product");

        spanHead.textContent = "Available";
        divHead.textContent = "Buy Now";

        productsSpace.appendChild(cardInformations);
        Product.appendThenInnerImage(products[i], i);
        Product.appendThenInnerDescription(products[i], i);
        Product.appendThenInnerPrice(products[i], i);
        cardHead.appendChild(spanHead);
        cardHead.appendChild(divHead);
        products[i].appendChild(cardHead);
    }
}

applyDiv(16);