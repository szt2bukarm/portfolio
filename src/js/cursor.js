// 'use strict'

const cursorBlur = document.querySelector('.cursor-blur')
const cursorCircle = document.querySelector('.cursor-circle')

const projectList = document.querySelectorAll('.projects__list-item')



projectList.forEach(el => el.addEventListener('mouseenter', function() {
  cursorCircle.classList.add('cursor-circle-project')
}))

projectList.forEach(el => el.addEventListener('mouseleave', function() {
  cursorCircle.classList.remove('cursor-circle-project')
}))


setTimeout(() => {
  cursorBlur.classList.remove('hidden')
  cursorCircle.classList.remove('hidden')
}, 7000);

document.addEventListener('mousemove',function(e) {
    let X = e.clientX;
    let Y = e.clientY;

    cursorBlur.animate(
        {
          top: `calc(${Y}px - ${window.innerWidth < 1100 ? '50rem' : '75rem'})`,
          left: `calc(${X}px - ${window.innerWidth < 1100 ? '50rem' : '75rem'})`
        },
        {
          duration: 15000,
          easing: 'linear',
          fill: 'forwards'
        }
      );
})

document.addEventListener('mousemove',function(e) {
  let X = e.pageX;
  let Y = e.pageY;

  cursorCircle.animate(
    {
      top: `calc(${Y}px - 1.5rem)`,
      left: `calc(${X}px - 1.5rem)`
    },
    {
      duration: 150,
      easing: 'linear',
      fill: 'forwards'
    }
  );
})

window.addEventListener('scroll', () => {
  const X = cursorCircle.offsetLeft - window.scrollX;
  const Y = cursorCircle.offsetTop - window.scrollY;

  cursorBlur.style.left = `${X}px`;
  cursorBlur.style.top = `${Y}px`;

  cursorCircle.style.left = `${X}px`;
  cursorCircle.style.top = `${Y}px`;
});