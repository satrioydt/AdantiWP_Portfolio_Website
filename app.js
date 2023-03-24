const firstPage = document.getElementById('first-page')
const secondPage = document.getElementById('second-page')
const thirdPage = document.getElementById('third-page')
const fourthPage = document.getElementById('fourth-page')

const tl1 = gsap.timeline({defaults: {duration: 1.5, ease: "power3.out"}})

tl1.fromTo(firstPage, {opacity: 0}, {opacity: 1, duration: 2})
tl1.fromTo('nav', {y: -110, opacity: 0}, {y: 0, opacity: 1, delay: 0.5}, '<')
tl1.fromTo('.showcase-title', {x: 110, opacity: 0}, {x: 0, opacity: 1, delay: 0.5})
tl1.fromTo('.image-intro', {opacity: 0}, {opacity: 1}, '<')
tl1.fromTo('.cloud-1, .cloud-2, .cloud-3', {x: -110, opacity: 0}, {x: 0, opacity: 1, delay: 0.5}, '<')
tl1.fromTo('.lightbulb', {x: -110, opacity: 0}, {x: 0, opacity: 1, duration: 1}, '<30%')
tl1.fromTo('.cta-1', {y: -110, opacity: 0}, {y: 0, opacity: 1}, '<30%')
tl1.fromTo('.cta-2', {x: -110, opacity: 0}, {x: 0, opacity: 1}, '<30%')
tl1.fromTo('.cta-3', {y: 30, opacity: 0}, {y: 0, opacity: 1}, '<30%')
tl1.fromTo('.showcase-work', {y: 110, opacity: 0}, {y: 0, opacity: 1}, '<')
tl1.fromTo('.line', {x: 110, opacity: 0}, {x: 0, opacity: 1}, '<')

const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML += '<span class="letter">' + letter + "</span>";
});
gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { y: 100 },
  { y: 0, delay: 1, stagger: 0.2, ease: "power3.out" }
);

const tlCloud = gsap.timeline({defaults: {duration: 2}})

tlCloud.fromTo('.cloud-1', {x: 0}, {x: -20, yoyo: true, repeat: -1, ease: "Power2.easeOut", duration: 2})
tlCloud.fromTo('.cloud-2', {x: 0}, {x: -10, yoyo: true, repeat: -1, ease: "Power2.easeOut", duration: 2}, '<')
tlCloud.fromTo('.cloud-3', {x: 0}, {x: 30, yoyo: true, repeat: -1, ease: "Power2.easeOut", duration: 2}, '<')
tlCloud.fromTo('.cloud-4', {x: 0}, {x: 10, yoyo: true, repeat: -1, ease: "Power2.easeOut", duration: 2}, '<')
tlCloud.fromTo('.cloud-5', {x: 0}, {x: -50, yoyo: true, repeat: -1, ease: "Power2.easeOut", duration: 5}, '<')

const tl2 = gsap.timeline({defaults: {duration: 1}})

tl2.fromTo('.bulbLight', {opacity: 1}, {opacity: 0.2, repeat: -1, yoyo: true})

gsap.set('#eye', {transformOrigin: 'center'})
gsap.fromTo('#eye', {scaleY: 1}, {scaleY: 0.3, repeat: -1, yoyo: true, repeatDelay: 0.3, ease: "power2.out"})

// Scroll Trigger
const tlAppear = gsap.timeline({
  scrollTrigger: {
      trigger: secondPage,
      scrub: true,
      start: "-20%",
      end: "10%",
  }
})

tlAppear.fromTo('.highlight', {color: '#364173'}, {color: '#eb9985', stagger: 1})

const tlRemove = gsap.timeline({
  scrollTrigger: {
      trigger: secondPage,
      scrub: true,
      start: "-10%",
      end: "55%",
  },
})

tlRemove.to('.highlight', {color: '#364173', stagger: 1})

const tlSplit = gsap.timeline({
  scrollTrigger: {
      trigger: secondPage,
      start: '-40%',
      end: '5%',
      scrub: true,
  }
})

tlSplit.fromTo('.about-me', {x: 50, opacity: 0}, {opacity: 1, x: 0})
tlSplit.fromTo('.research-experience', {x: -50, opacity: 0}, {opacity: 1, x: 0}, '<')

const tlParallax = gsap.timeline({
  scrollTrigger: {
      trigger: thirdPage,
      start: '-25%',
      end: '50%',
      scrub: true,      
  }
})

tlParallax.fromTo('.main-table', {y: 0}, {y: -100})
tlParallax.fromTo('.cloud-4', {y: 0}, {y: -100}, '<')
tlParallax.fromTo('.cloud-5', {y: 0}, {y: -100}, '<')

const tlLast = gsap.timeline({
  scrollTrigger: {
      trigger: fourthPage,
      start: '-20%',
      end: '5%',
      scrub: true,
  }
})

tlLast.fromTo('.left-contact-container', {y: 100, opacity: 0}, {opacity: 1, y: 0, duration: 5})
tlLast.fromTo('.right-contact', {x: 100, opacity: 0}, {opacity: 1, x: 0, duration: 5}, '<')