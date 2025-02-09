gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

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

        //make family things visible
        tl.to(".card", {
            opacity: 1,
            duration: 3
        }, "+=1")

        tl.to(".flower", {
            opacity: 1,
            duration: 3
        }, "+=2")
        
        tl.to(".cardtext", {
            color: "#F72585",
            duration: 1,
            repeat: -1,
            repeatDelay: 7
        }, ">");

        
        tl.to(".cardtext", {
            color: "#4CC9F0",
            duration: 1,
            repeat: -1,
            repeatDelay: 7
        });

});


let flowerSpin = gsap.timeline({ paused: true });
flowerSpin.to("#petal1", {
    rotate: "+=360deg",
    transformOrigin: "100% 100%",
    duration: 3,
    repeat: -1,
    ease: "linear"
});
flowerSpin.to("#petal2", {
    rotate: "+=360deg",
    transformOrigin: "100% 0%",
    duration: 3,
    repeat: -1,
    ease: "linear"
}, "<");
flowerSpin.to("#petal3", {
    rotate: "+=360deg",
    transformOrigin: "0% 0%",
    duration: 3,
    repeat: -1,
    ease: "linear"
}, "<"); 
flowerSpin.to("#petal4", {
    rotate: "+=360deg",
    transformOrigin: "0% 100%",
    duration: 3,
    repeat: -1,
    ease: "linear"
}, "<"); 

var flower1 = document.getElementById("petal1");
flower1.addEventListener("mouseenter", () => flowerSpin.progress(0).play());
var flower2 = document.getElementById("petal2");
flower2.addEventListener("mouseenter", () => flowerSpin.progress(0).play());
var flower3 = document.getElementById("petal3");
flower3.addEventListener("mouseenter", () => flowerSpin.progress(0).play());
var flower4 = document.getElementById("petal4");
flower4.addEventListener("mouseenter", () => flowerSpin.progress(0).play());


let flowerSpin2 = gsap.timeline({ paused: true });
flowerSpin2.to("#petal5", {
    rotate: "-=360deg",
    transformOrigin: "100% 100%",
    duration: 2,
    repeat: -1,
    ease: "linear"
});
flowerSpin2.to("#petal6", {
    rotate: "-=360deg",
    transformOrigin: "100% 0%",
    duration: 2,
    repeat: -1,
    ease: "linear"
}, "<");
flowerSpin2.to("#petal7", {
    rotate: "-=360deg",
    transformOrigin: "0% 0%",
    duration: 2,
    repeat: -1,
    ease: "linear"
}, "<"); 
flowerSpin2.to("#petal8", {
    rotate: "-=360deg",
    transformOrigin: "0% 100%",
    duration: 2,
    repeat: -1,
    ease: "linear"
}, "<"); 

var flower5 = document.getElementById("petal5");
flower5.addEventListener("mouseenter", () => flowerSpin2.progress(0).play());
var flower6 = document.getElementById("petal6");
flower6.addEventListener("mouseenter", () => flowerSpin2.progress(0).play());
var flower7 = document.getElementById("petal7");
flower7.addEventListener("mouseenter", () => flowerSpin2.progress(0).play());
var flower8 = document.getElementById("petal8");
flower8.addEventListener("mouseenter", () => flowerSpin2.progress(0).play());
