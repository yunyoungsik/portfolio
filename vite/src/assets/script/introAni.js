import { gsap } from "gsap";

export function introAni() {

    // center Text
    const ani = gsap.timeline();

    ani.set(".center__img", {width:"100%", height: "100vh"});
    ani.set(".bgSliderWrap", {width: "100%"});
    ani.set(".center__text", { position: "absolute", top: "50%", left: "50%", translate: "-50%", zIndex: 1});
    ani.set(["mainSlider__top", "mainSlider__bottom"], {display: "none"});
    ani.set("mainSlider__center", {height: "100%"});

    ani.fromTo(".titleWrap",{y:72, opacity: 0}, { y: 0, opacity: 1, duration: 1 })
        .fromTo(".center__img",{scale:1}, { scale: 0.5, duration: 2, ease: "power1.inOut" })
        .to(".center__img", { scale: 0.6, duration: 3, ease: "power1.inOut" })
        .to(".center__img", { width: 250, height: 410, duration: 3, ease: "power1.inOut" })
        .to(".titleWrap h2", { y: -72 })
        .to(".center__text", { xPercent: -200, opacity:0, duration: 1, ease: "power1.inOut" })
        .fromTo(".mainSlider",{width: "100%"}, { width: "80%"})
        .to(".center__text", { position: "relative",top: "auto", left: "auto", y: 0, x: 0, xPercent: 0, yPercent: 0, })
        .to(".center__text", { opacity: 1 })
        .fromTo(".descWrap", { y: 24, opacity: 0, visibility: "hidden"}, {y: 0, opacity: 1, visibility: "visible", duration:1, ease: "power1.inOut"})
        .fromTo([".mainSlider__top", ".mainSlider__bottom"],{display: "none"}, { display: "flex" })
        .to(".mainSlider__center", { height: "60%"})
        .fromTo([".pause", ".scroll__arrow"], {xPercent: 100, opacity: 0}, { xPercent: -100, opacity: 1, ease: "power1.inOut" })
        .fromTo(".logo",{opacity: 0}, { opacity: 1, ease: "power1.inOut" })
        .fromTo([".page", ".scroll__text"], {yPercent:100, opacity: 0}, {yPercent: -100, opacity: 1, ease: "power1.inOut"})

    // center Img
    const innerAnimation = gsap.timeline();

    gsap.set(".centerSliderWrap", {display: "flex",width: "600%",height: "100vh"});
    gsap.set(".centerSliderWrap .centerSlider", { xPercent: 100, opacity: 0 });

    gsap.utils.toArray(".centerSliderWrap .centerSlider").forEach((img, index) => {
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