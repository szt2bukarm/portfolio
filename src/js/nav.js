const navs = ['about-nav','projects-nav','contact-nav','link1','link2','link3','link4']
const projectsNav = document.querySelector(".projects-nav");
const contactNav = document.querySelector(".contact-nav");
const cursorCir = document.querySelector('.cursor-circle')

navs.forEach(nav => {
  document.querySelector(`.${nav}`).addEventListener('mouseenter',function() {
  cursorCir.classList.add('cursor-circle-expanded')
  })
  document.querySelector(`.${nav}`).addEventListener('mouseleave',function() {
    cursorCir.classList.remove('cursor-circle-expanded')
  })
})


const navOpener = document.querySelector(".nav-opener");
const navMenu = document.querySelector(".nav-menu");
const navOpenerBars = document.querySelector(".nav-opener-bars");
const navOpenerBar = document.querySelectorAll(".nav-opener__bar");

navOpener.addEventListener("click", function () {
  navMenu.classList.toggle("closed");
  navOpenerBar.forEach(bar => {
    bar.classList.toggle("bar-close")
    bar.classList.toggle("bar-open")
  });
})

navOpener.addEventListener('mousemove',function(e) {
  const rect = navOpener.getBoundingClientRect();
  let X = (e.clientX - rect.left - rect.width / 2) / 5;
  let Y = (e.clientY - rect.top - rect.height / 2) / 5;

  gsap.to(navOpener, {
    duration: 0.15,
    x: X,
    y: Y,
    ease: 'linear',
  });

  gsap.to(navOpenerBars, {
    duration: 0.15,
    x: X,
    y: Y,
    ease: 'linear',
  });

  cursorCircle.style.opacity = 0.5;
})

navOpener.addEventListener('mouseleave',function(){
  gsap.to([navOpener,navOpenerBars], {
    duration: 0.15,
    x: 0,
    y: 0,
    ease: 'linear',
    onComplete: () => {
      cursorCircle.style.opacity = 1;
    },
  });
})

// greetings

const greetings = ['Hello!','Hola!','Bonjour!','Hallo!','Üdv!','Ciao!','Cao!','Salut!']

const greeting = document.querySelector('.nav-menu__greeting')
let currentGreetingIndex = 0
setInterval(() => {
  greeting.innerText = greetings[currentGreetingIndex]
  currentGreetingIndex === greetings.length-1 ? currentGreetingIndex = 0 : currentGreetingIndex++
}, 3000);