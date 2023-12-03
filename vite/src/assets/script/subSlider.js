import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export function subSlider() {
    const mainSlider = document.querySelector("#mainSlider");

    gsap.to(mainSlider, {
        xPercent: -100,
        duration: 1,
        backgroundColor: "black",
        ease: "slow",
        display: "none",
    });
}