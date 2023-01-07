// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letter');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [5, 0],
    duration: 1500,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 900,
  });
  
  // Wrap every letter in a span
var textWrapper = document.querySelector('.heading .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letters'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.heading .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.heading .line',
    translateX: [0, document.querySelector('.heading .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 1500,
    delay: 800
  }).add({
    targets: '.heading .letters',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    offset: '-=775',
    delay: (el, i) => 35 * (i+1)
  }).add({
    targets: '.heading',
    opacity: 0,
    duration: 1500,
    easing: "easeOutExpo",
    delay: 800
  });