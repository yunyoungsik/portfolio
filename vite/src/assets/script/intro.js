import { gsap } from "gsap";

export function intro() {

    // center Text
    const ani = gsap.timeline();

    ani.to(".titleWrap.intro h2", { y: 0, opacity: 1, duration: 1 })
        .to(".center__img.intro", { scale: 1, duration: 2, ease: "power1.inOut" })
        .to(".center__img.intro", { scale: 0.5, duration: 3, ease: "power1.inOut" })
        .to(".center__img.intro", { scale: 0.6, duration: 3, ease: "power1.inOut" })
        .to(".center__img.intro", { width: 250, height: 410, duration: 3, ease: "power1.inOut" })
        .to(".titleWrap.intro h2", { y: -72, duration: 1 })
        .to(".mainSlider.intro", { width: "80%", duration: 1 })
        .to(".center__text.intro", { translateX: -400, duration: 1, ease: "power1.inOut" })
        .to(".pause.intro", { xPercent: -100, opacity: 1, duration: 1, ease: "power1.inOut" })
        .to(".logo.intro", { opacity: 1, duration: 1, ease: "power1.inOut" })

    // center Img
    const innerAnimation = gsap.timeline();

    gsap.set("centerSliderWrap.intro .centerSlider", { xPercent: 100, opacity: 0 });

    gsap.utils.toArray("centerSliderWrap.intro .centerSlider").forEach((img, index) => {
        if (index !== 0) {
            innerAnimation.to(img, {
                xPercent: -100 * index,
                opacity: 1,
                duration: 1,
                ease: "power1.inOut",
                delay: index * 0.5
            });
        }
    });
}