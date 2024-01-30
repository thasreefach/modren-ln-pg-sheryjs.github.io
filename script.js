
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger:.2,
    y:15,
    opacity:0,
    duration:1,
    ease:Power2
})

Shery.textAnimate(".headings h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".anim2",{
    y:30,
    stagger:.3,
    opacity:0,
    ease:Expo,
    duration:1
  })

  Shery.imageEffect(".imgntext img", {
    style: 3,
    // debug: true, // Debug Panel
    config: 
      /* Config made from debug panel */
      {"uFrequencyX":{"value":16.79,"range":[0,100]},"uFrequencyY":{"value":18.32,"range":[0,100]},"uFrequencyZ":{"value":12.98,"range":[0,100]},"geoVertex":{"range":[1,64],"value":28.41},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500050913725251},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.64,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    ,
    preset: "./presets/wigglewobble.json",
  });
  Shery.imageEffect(".imgff img", {
    style: 5,
    // debug: true, // Debug Panel
    config: 
      /* Config made from debug panel */
      {"a":{"value":2.75,"range":[0,30]},"b":{"value":-0.59,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7333116153961104},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.73,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    ,
    preset: "./presets/wigglewobble.json",
  });

  gsap.from(".imgntext img",{
    y:"70",
    duration:2,
    opacity:0,
    ease:Expo.easeInOut
  })

  Shery.imageEffect(".bimg",{
    style:5,
    gooey:true,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.22,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.3621932172441165},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":32}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  })


  document.querySelector(".ftext button").addEventListener("mouseover",function(){
   gsap.to("#future video",{
    opacity:1,
    duration:1,
    ease:Power4
   })
  })
  document.querySelector(".ftext button").addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity:0,
        duration:1,
        ease:Power4
       })
  })