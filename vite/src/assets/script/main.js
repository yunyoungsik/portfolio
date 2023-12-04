import { slider } from "./slider.js";
import { mouse } from "./mouse.js";
import { smooth } from "./somooth.js";
import { subSlider } from "./subSlider.js";
import { intro } from "./intro.js";

window.addEventListener("load", function () {
    intro();
    slider();
    subSlider();
    mouse();
    smooth();
});