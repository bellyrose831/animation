document.addEventListener('DOMContentLoaded',
    function () {

        let tl = gsap.timeline()

        // start at exactly 0 second into the timeline (absolute)
        tl.to("#name", { 
            duration: 3, 
            ease: "bounce.out",
            y:500}, 0);
        
        // insert at the start of the previous animation
        tl.to("#title", { 
            duration: 3, 
            //ease: "steps(30)",
            ease: "slow(0.7,0.7,false)",
            fontSize: "30px"}, "<");
        
        tl.to(".cardtext", {
            color: "#F72585",
            duration: 1}, ">");

        
        tl.to(".cardtext", {
            color: "#4CC9F0",
            duration: 1});

});

/*var codingCard = document.getElementById('coding');
codingCard.addEventListener('mouseover', cardHover('coding'));

var readingCard = document.getElementById('reading');
readingCard.addEventListener('mouseover', cardHover('reading'));

var gamesCard = document.getElementById('games');
gamesCard.addEventListener('mouseover', cardHover('games')); */

let hoverAnimationOther = gsap.timeline()

hoverAnimationOther.to("#other", {
    paused: true,
    height: "100%",
    width: "100%",
    duration: 4,
    rotation: 720
});
hoverAnimationOther.to(".flexbox", {
    paused: true,
    height: "100%",
    width: "100%",
    duration: 4
}, "<");

function middleFunction () {
    gsap.to("#other", {
        paused: true,
        height: "100%",
        width: "100%",
        duration: 4,
        rotation: 720
    });
    gsap.to(".flexbox", {
        paused: true,
        height: "100%",
        width: "100%",
        duration: 4
    });
}


let whatever = (
    gsap.to(".flexbox", {
        paused: true,
        position: "absolute",
        x: 0,
        y: 0,
        height: "100%",
        width: "100%",
        duration: 4
    }),
    gsap.to("#other", {
        paused: true,
        height: "100%",
        width: "100%",
        duration: 4,
        rotation: 720
    })
);


var otherCard = document.getElementById('other');
otherCard.addEventListener("mouseenter", () => whatever.progress(0).play());
//otherCard.addEventListener("mouseenter", () => hoverAnimationOther.progress(0).play(););

/*
otherCard.addEventListener('mouseover', middleFunction);

function middleFunction () {
    cardHover('other');
}

function cardHover (cardid) {
    cardid = String('#' + cardid);
    let hovertimeline = gsap.timeline();
    hovertimeline.to(cardid, {
        height: "100%",
        width: "100%",
        duration: 4,
        rotation: 720,
        oncomplete: () => hovertimeline.pause()
    });
    hovertimeline.play();
} */
