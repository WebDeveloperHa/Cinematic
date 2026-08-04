

gsap.registerPlugin(ScrollTrigger);

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

    gsap.set(".line", {
        opacity: 0,
        y: 80
    });

    ScrollTrigger.refresh();

});

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=4000",
        scrub: 1,
        pin: true
    }
});

document.querySelectorAll(".line").forEach((line) => {

    tl.to(line, {
        opacity: 1,
        y: 0,
        duration: 1
    })

    .to(line, {
        opacity: 0,
        duration: 1
    });

});