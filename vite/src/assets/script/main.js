import { slider } from "./slider.js";
import { mouse } from "./mouse.js";
import { smooth } from "./somooth.js";
import { subSlider } from "./subSlider.js";

window.addEventListener("load", function () {
    slider();
    subSlider();
    mouse();
    smooth();
});