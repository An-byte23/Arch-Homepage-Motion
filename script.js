// function show(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });
// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
// show()

gsap.to("#canva",{
    transform : "rotate(90deg)",
    duration:1,
    repeat:-1,
    ease: Power0.easeNone
})
gsap.from("#nav h4",{
    onStart :function(){
        $('#nav h4').textillate({
           in: { effect: 'fadeInLeft' } 
        });
      },
    // y:10,
    opacity:0,
    duration : 1,
    delay:1
})
gsap.from("#o",{
    onStart :function(){
        $('#o').textillate({
           in: { effect: 'fadeInUp' } 
        });
      },
    // y:50,
    opacity:0,
    duration : 1,
    delay:1.5

})
gsap.from("#t",{
    onStart :function(){
        $('#t').textillate({
           in: { effect: 'fadeInUp' } 
        });
      },
    // y:50,
    opacity:0,
    duration : 1,
    delay:1.5

})
gsap.from("#th",{
    onStart :function(){
        $('#th').textillate({
           in: { effect: 'fadeInUp' } 
        });
      },
    // y:50,
    opacity:0,
    duration : 1,
    delay:1.5

})
gsap.from("#box1",{
    scale :1.5,
    y:50,
    opacity:0,
    duration : 1.5,
    delay:1.7

})
gsap.from("#box2",{
    scale :1.5,
    y:50,
    opacity:0,
    duration : 1.5,
    delay:1.7
})
gsap.from("#f",{
    // scale :1.5,
    y:50,
    opacity:0,
    duration : 1.5,
    delay:1.7
})
gsap.from("#logo1",{
    scale :0.5,
    // y:50,
    opacity:0,
    duration : 1.5,
    delay:1.7
})
gsap.from("#logo2",{
    scale :0.5,
    // y:50,
    opacity:0,
    duration : 1.5,
    delay:1.7
})

gsap.from("#pic",{
    scrollTrigger:{
        trigger:"#pic",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        // scrub:2
      },
    scale:1.5,
    opacity:0,
    duration:1.5,
    // delay:2
})

gsap.from("#t01",{
    scrollTrigger:{
        trigger:"#t01",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
      },
      onStart :function(){
        $("#t01").textillate({
           in: { effect: 'fadeInUp' } 
        });
      },
    opacity:0,
    duration:1,
})
gsap.from("#h01",{
    scrollTrigger:{
        trigger:"#h01",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
      },
      onStart :function(){
        $("#h01").textillate({
           in: { effect: 'fadeInUp' } 
        });
      },
    opacity:0,
    duration:1,
    delay:1
})
gsap.from("#h02",{
    scrollTrigger:{
        trigger:"#h02",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
      },
      onStart :function(){
        $("#h02").textillate({
           in: { effect: 'fadeInUp' } 
        });
      },
    opacity:0,
    duration:1,
    delay:1
})

gsap.from("#p01",{
    scrollTrigger:{
        trigger:"#p01",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
      },
    y:50,
    // scale:0.5,
    opacity:0,
    duration:1,
    delay:1.5
})

gsap.from("#t02",{
    scrollTrigger:{
        trigger:"#t02",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
      },
      onStart :function(){
        $("#t02").textillate({
           in: { effect: 'fadeInLeft' } 
        });
      },
    opacity:0,
    duration:1,
})

gsap.from("#h03",{
    scrollTrigger:{
        trigger:"#h03",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
      },
      onStart :function(){
        $("#h03").textillate({
           in: { effect: 'fadeInUp' } 
        });
      },
    opacity:0,
    duration:1,
    delay:1
})
gsap.from("#p02",{
    scrollTrigger:{
        trigger:"#p01",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
      },
    y:50,
    // scale:0.5,
    opacity:0,
    duration:1,
    delay:1.5
})

gsap.from("#pic1",{
    scrollTrigger:{
        trigger:"#pic1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        // scrub:2
      },
    // scale:1.5,
    x:50,
    opacity:0,
    duration:1,
    delay:1.5
})

gsap.from("#pic2",{
    scrollTrigger:{
        trigger:"#pic2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        // scrub:2
      },
    // scale:1.5,
    x:50,
    opacity:0,
    duration:1,
    delay:0.5
})
gsap.from("#pic3",{
    scrollTrigger:{
        trigger:"#pic3",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        // scrub:2
      },
    // scale:1.5,
    x:50,
    opacity:0,
    duration:1,
    delay:1
})
gsap.from("#pic4",{
    scrollTrigger:{
        trigger:"#pic4",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        // scrub:2
      },
    // scale:1.5,
    x:50,
    opacity:0,
    duration:1,
    delay:1.5
})

gsap.from("#page5 hr",{
    scrollTrigger:{
        trigger:"#page5 hr",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        // scrub:2
      },
    width : "0vw",
    opacity:0,
    duration:1,
    delay : 0.5
})