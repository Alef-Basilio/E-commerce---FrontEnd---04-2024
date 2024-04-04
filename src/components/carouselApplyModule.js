import ApplyAnyProduct from "../api/fakeStoreApi.js";

const firstSlideChild = document.getElementById("firstSlideChild");
const secondSlideChild = document.getElementById("secondSlideChild");
const thirdSlideChild = document.getElementById("thirdSlideChild");
const fourthSlideChild = document.getElementById("fourthSlideChild");
const fifthSlideChild = document.getElementById("fifthSlideChild");
const Product = new ApplyAnyProduct;

Product.appendThenInnerTitle(firstSlideChild, 0);
Product.appendThenInnerImage(firstSlideChild, 0);
Product.appendThenInnerPrice(firstSlideChild, 0);

Product.appendThenInnerTitle(secondSlideChild, 1);
Product.appendThenInnerImage(secondSlideChild, 1);
Product.appendThenInnerPrice(secondSlideChild, 1);

Product.appendThenInnerTitle(thirdSlideChild, 2);
Product.appendThenInnerImage(thirdSlideChild, 2);
Product.appendThenInnerPrice(thirdSlideChild, 2);

Product.appendThenInnerTitle(fourthSlideChild, 3);
Product.appendThenInnerImage(fourthSlideChild, 3);
Product.appendThenInnerPrice(fourthSlideChild, 3);

Product.appendThenInnerTitle(fifthSlideChild, 4);
Product.appendThenInnerImage(fifthSlideChild, 4);
Product.appendThenInnerPrice(fifthSlideChild, 4);