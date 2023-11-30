window.onload = function () {
    //Main bgSlider
    let currentIndex = 0;

    const sliderWrap = document.querySelector(".bgSliderWrap");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    const centerSliderWrap = document.querySelector(".centerSliderWrap");
    const centerSliderClone = centerSliderWrap.firstElementChild.cloneNode(true);
    centerSliderWrap.appendChild(centerSliderClone);

    const pageIndexWrap = document.querySelector(".page > .current");
    const pageIndexClone = pageIndexWrap.firstElementChild.cloneNode(true);
    pageIndexWrap.appendChild(pageIndexClone);

    document.querySelectorAll('.center__text > .titleSlider > .titleWrap >.title').forEach(titleElement => {
        let text = titleElement.textContent.trim();
        let letters = text.split('');

        let newTitle = letters.map(letter => {
            return `<span>${letter}</span>`;
        }).join('');

        titleElement.innerHTML = newTitle;
    });

    const titleWrap = document.querySelector(".center__text > .titleSlider > .titleWrap");
    const titleClone = titleWrap.firstElementChild.cloneNode(true);
    titleWrap.appendChild(titleClone);
    const titleLetters = document.querySelectorAll('.titleWrap > .title > span');

    const descWrap = document.querySelector(".center__text > .descSlider > .descWrap");
    const descClone = descWrap.firstElementChild.cloneNode(true);
    descWrap.appendChild(descClone);

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";
        sliderWrap.style.transition = "all 1.2s";

        centerSliderWrap.style.marginTop = -currentIndex * 1080 + "px";
        centerSliderWrap.style.transition = "all 1.2s";

        pageIndexWrap.style.marginTop = -currentIndex * 24 + "px";
        pageIndexWrap.style.transition = "all 1.2s";

        descWrap.style.marginTop = -currentIndex * 24 + "px";
        descWrap.style.transition = "all 1.2s";

        if (currentIndex == 5) {
            setTimeout(() => {
                sliderWrap.style.marginLeft = "0";
                sliderWrap.style.transition = "0s";

                centerSliderWrap.style.marginTop = "0";
                centerSliderWrap.style.transition = "0s";

                pageIndexWrap.style.marginTop = "0";
                pageIndexWrap.style.transition = "0s";

                titleWrap.style.marginTop = "0";
                titleWrap.style.transition = "0s";

                descWrap.style.marginTop = "0";
                descWrap.style.transition = "0s";

                currentIndex = 0;
            }, 700)
        }
    }, 5000);
}