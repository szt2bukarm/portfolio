const navEase = CustomEase.create('navEase',"M0,0 C0.34,1.5 0.64,1 1,1")
const textEase = CustomEase.create('textEase',"M0,0 C0.0075,0.82 0.165,1 1,1")

let resizeTimer;
function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

window.addEventListener('resize', function () {
  if (isIOS()) return;
  if (/Android/i.test(navigator.userAgent)) return;
  clearTimeout(resizeTimer);
  window.scrollTo(0,0)
  resizeTimer = setTimeout(function () {
    location.reload();
  }, 500);
});

let screenWidth = window.innerWidth;
window.addEventListener('resize', function() {
  screenWidth = window.innerWidth
})


const lenis = new Lenis()

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
lenis.stop()
setTimeout(() => {
  lenis.start()
}, 7000);

setTimeout(() => {
  gsap.fromTo(
    ".cursor",
    { opacity: 1 },
    {
      scrollTrigger: {
        trigger: ".about",
        start: "20% 50%",
        end: "50% 100%",
        scrub: true,
        markers: false,
      },
    opacity: 0
    },
  );
}, 7000);

gsap.to(".about__text-header", {
  ease: textEase,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".about",
    start: "10% 20%",
    end: "65% 20%",
    scrub: false,
    markers: false,
    // toggleClass: {targets: '.about__text-header', className: 'textShow'},
    toggleActions: "play reverse play reverse",
  },
  transform: "translateY(0)",
});

gsap.to(".line1", {
  ease: textEase,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".about",
    start: "10% 20%",
    end: "65% 50%",
    scrub: false,
    markers: false,
    // toggleClass: {targets: '.line1', className: 'textShow'},
    toggleActions: "play reverse play reverse",
  },
  transform: "translateY(0)",
  delay: 0.2,
});

gsap.to(".line2", {
  ease: textEase,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".about",
    start: "10% 20%",
    end: "65% 50%",
    scrub: false,
    markers: false,
    // toggleClass: {targets: '.line2', className: 'textShow'},
    toggleActions: "play reverse play reverse",
  },
  transform: "translateY(0)",
  delay: 0.25,
});

gsap.to(".line3", {
  ease: textEase,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".about",
    start: "10% 20%",
    end: "65% 50%",
    scrub: false,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
  transform: "translateY(0)",
  delay: 0.3,
});

gsap.to(".about__bio", {
  ease: "Circ.easeOut",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".line3",
    start: "400% center",
    end: "500% center",
    scrub: false,
    markers: false,
    toggleActions: "play resume play resume",
  },
  'clip-path' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
});

gsap.to(".about__bio-name", {
  duration: 0.3,
  scrollTrigger: {
    trigger: ".about__bio",
    start: "-50% center",
    end: "bottom center",
    scrub: true,
    markers: false,
    toggleActions: "play resume play reverse",
  },
  y: "20rem",
});

gsap.to(".about__bio", {
  duration: 0.3,
  scrollTrigger: {
    trigger: ".about__bio",
    start: "-30% center",
    end: "150% center",
    scrub: true,
    markers: false,
    toggleActions: "play resume play reverse",
  },
  'background-position' : '80% 80%'
});

gsap.to(".nav-opener", {
  ease: navEase,
  duration: 0.4,
  scrollTrigger: {
    trigger: ".about",
    start: "10% 20%",
    end: "65% 50%",
    scrub: false,
    markers: false,
    toggleActions: "play resume play reverse",
  },
  scale: screenWidth < 700 ? 0.8 : 1,
});

gsap.to(".nav-opener-bg", {
  duration: 0.5,
  scrollTrigger: {
    trigger: ".about__bio",
    start: "top 10%",
    end: "bottom 10%",
    scrub: false,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
  filter: 'hue-rotate(190deg)',
});

// gsap.to('.about', {
//   scrollTrigger: {
//     trigger: ".about__bio",
//     start: "50% center",
//     end: "bottom center",
//     scrub: false,
//     markers: false,
//     toggleActions: "play resume play reverse",
//   },
//     'background-color': '#250902'
// })

gsap.to(['.projects','.about'], {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 90%",
    end: "bottom 90%",
    scrub: false,
    markers: false,
    toggleActions: "play resume play reverse",
  },
    'background-color': '#250902'
})

// gsap.to('.projects', {
//   scrollTrigger: {
//     trigger: ".projects",
//     start: "-5% top",
//     end: "10% top",
//     scrub: false,
//     markers: true,
//     toggleActions: "play none none none",
//   },
//     'background-color': '#250902'
// })

gsap.to('.nav-opener-bg', {
  scrollTrigger: {
    trigger: ".about__bio",
    start: "bottom 10%",
    end: "130% 10%",
    scrub: false,
    markers: false,
    toggleActions: "play resume play reverse",
  },
  filter: 'hue-rotate(50deg) ',
})

gsap.to(".projects__header", {
  ease: textEase,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".projects",
    start: "top 90%",
    end: "bottom 90%",
    scrub: false,
    markers: false,
    toggleActions: "play resume play reverse",
  },
  transform: "translateY(0)",
});


gsap.to('.contact', {
  bottom: '0',
  ease: textEase,
  duration: 0.8,
  scrollTrigger: {
    trigger: '.projects',
    start: '99.5% bottom',
    scrub: false,
    toggleActions: 'play reverse play reverse',
    onEnter: () => {
      lenis.stop()
      setTimeout(() => {
        lenis.start()
      }, 800);
    },
    onLeaveBack: () => {
      lenis.stop()
      setTimeout(() => {
        lenis.start()
      }, 800);
    },
  },
});
// document.body.style.overflow = 'hidden'; // Disable scrolling
gsap.to('.projects__list', {
  scale: 0.8,
  opacity: 0,
  // ease: textEase,
  duration: 1,
  scrollTrigger: {
    trigger: '.projects',
    start: '99.5% bottom',
    scrub: false,
    toggleActions: 'play reverse play reverse'
  },
});

gsap.to('.nav-opener-bg', {
  filter: 'hue-rotate(50deg) grayscale(1)',
  // duration: 0.8,
  scrollTrigger: {
    trigger: '.projects',
    start: '99.5% bottom',
    scrub: false,
    toggleActions: 'play reverse play reverse'
  },
});

