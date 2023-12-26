// selectors

const components = ['cursor','hero', 'about', 'projects','contact'];

const projects = document.querySelector('.projects__list');
const projectPage = document.querySelector('.project-page');
const mainPage = document.querySelector('.main-page');
const backBtn = document.querySelector('.project-page-view-back')
const viewProject = document.querySelector('.project-page-view-btn')
let projectLink;

viewProject.addEventListener('click',function() {
    window.open(projectLink);
})

projects.addEventListener('click',function(e) {
    const clickedProject = e.target.closest('.projects__list-item');
    if (!clickedProject) return;
    if (clickedProject.dataset.project === 'Benjo') loadBenjo()
    if (clickedProject.dataset.project === 'MovieScroller') loadMovieScroller()
    if (clickedProject.dataset.project === 'Guess The Character') loadGTC()
    if (clickedProject.dataset.project === 'Merry Magoland') loadMG()

    const connectingHTML = `
    <div class="project-connect-screen">
        <div class="project-connect-screen-name-wrapper">
            <p class="project-connect-screen-name">${clickedProject.dataset.project}</p>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin',connectingHTML)

    setTimeout(() => {
        // components.forEach(component => {
        //     document.querySelector(`.${component}`).style.display = 'none';
        // })    
        mainPage.style.display = 'none'
        window.scrollTo(0,0)
    }, 1000);

    setTimeout(() => {
        document.querySelector('.project-connect-screen').remove();
    }, 4500);

    setTimeout(() => {
        projectPage.style.display = 'block'
    }, 3900);
        
})

backBtn.addEventListener('click',function() {
    const connectingHTML = `
    <div class="project-connect-screen">
        <div class="project-connect-screen-name-wrapper">
            <p class="project-connect-screen-name">Home</p>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin',connectingHTML)

    setTimeout(() => {
        // components.forEach(component => {
        //     document.querySelector(`.${component}`).style.display = 'none';
        // })    
        projectPage.style.display = 'none'
    }, 1000);

    setTimeout(() => {
        document.querySelector('.project-connect-screen').remove();
    }, 4500);

    setTimeout(() => {
        mainPage.style.display = 'block'
        window.scrollTo({
            top: document.querySelector('.projects').getBoundingClientRect().top + window.scrollY - 200
        })
    }, 3900);
        
})

let isDragging = false;
let startX, scrollLeft;

const container = document.querySelector('.project-page-images-wrapper');
const cursor = document.querySelector('.cursor-circle')


container.addEventListener('mouseover',function() {
    window.innerWidth <= 785 ? "" : cursor.classList.add('cursor-circle-drag')
})

container.addEventListener('mouseleave',function() {
    cursor.classList.remove('cursor-circle-drag')
})

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseup', () => {
  isDragging = false;
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const x = e.pageX - container.offsetLeft;
  const moveX = x - startX;
  container.scrollLeft = scrollLeft - moveX;
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
});

const projectView = document.querySelector('.project-page-view-btn')

projectView.addEventListener('mouseover', function() {
    cursor.style.opacity = '0.5'
})

projectView.addEventListener('mouseleave', function() {
    cursor.style.opacity = '1'
})

backBtn.addEventListener('mouseover', function() {
    cursor.style.opacity = '0.5'
})

backBtn.addEventListener('mouseleave', function() {
    cursor.style.opacity = '1'
})

// pages

const projectName = document.querySelector('.project-page-header-text')
const projectDesc = document.querySelector('.project-page-desc-text')
const projectImages = document.querySelector('.project-page-images-wrapper')
const projectBg = document.querySelector('.project-page')
const projectBgText = document.querySelector('.project-page-bgtext')
const projectBorder = document.querySelector('.project-page-images-border')
const projectViewText = document.querySelector('.project-page-view-btn--text')
const loadBenjo = function() {
    projectLink = 'https://benjoapp.netlify.app/'
    projectName.innerText = 'Benjo'
    projectDesc.innerText = 'A music streaming service built with the YouTube,Spotify and MusixMatch API.'
    projectImages.innerHTML = 
    `
    <img src="src/assets/projects/benjo/benjo1.png" alt="" class="project-page-images-img">
    <img src="src/assets/projects/benjo/benjo2.png" alt="" class="project-page-images-img">
    <img src="src/assets/projects/benjo/benjo3.png" alt="" class="project-page-images-img">
    <img src="src/assets/projects/benjo/benjo4.png" alt="" class="project-page-images-img">
    `
    projectName.style.color = '#ced4da'
    projectDesc.style.color = '#ced4da'
    projectBgText.style.color = '#ced4da'
    projectBg.style.backgroundColor = '#212529'
    projectImages.style.backgroundColor = '#212529'
    projectBorder.style.background = 'linear-gradient(to right, #212529 0%, transparent 5%, transparent 95%, #212529 100%)'
    backBtn.style.backgroundColor = '#ced4da'
    projectView.style.background = '#ced4da'
    projectViewText.setAttribute('src', 'src/assets/projects/benjo/viewproject.png') 

    backBtn.addEventListener('mouseover', () => {backBtn.style.backgroundColor = '#495057'})    
    backBtn.addEventListener('mouseleave', () => {backBtn.style.backgroundColor = '#ced4da'})
    projectView.addEventListener('mouseover', () => {projectView.style.backgroundColor = '#495057'})    
    projectView.addEventListener('mouseleave', () => {projectView.style.backgroundColor = '#ced4da'})

}
const loadMovieScroller = function() {
    projectLink = 'https://szt2bukarm.github.io/MovieScroller/'
    projectName.innerText = 'MovieScroller'
    projectDesc.innerText = 'A scroller featuring different movies, perfect for a streaming site.'
    projectImages.innerHTML = 
    `
    <img src="src/assets/projects/mv/mv1.png" alt="" class="project-page-images-img">
    <img src="src/assets/projects/mv/mv2.png" alt="" class="project-page-images-img">
    <img src="src/assets/projects/mv/mv3.png" alt="" class="project-page-images-img">
    `

    projectName.style.color = '#748cab'
    projectDesc.style.color = '#748cab'
    projectBgText.style.color = '#748cab'
    projectBg.style.backgroundColor = '#0d1321'
    projectImages.style.backgroundColor = '#0d1321'
    projectBorder.style.background = 'linear-gradient(to right, #0d1321 0%, transparent 5%, transparent 95%, #0d1321 100%)'
    backBtn.style.backgroundColor = '#748cab'
    projectView.style.background = '#748cab'
    projectViewText.setAttribute('src', 'src/assets/projects/mv/viewproject.png') 

    backBtn.addEventListener('mouseover', () => {backBtn.style.backgroundColor = '#5176a7'})    
    backBtn.addEventListener('mouseleave', () => {backBtn.style.backgroundColor = '#738bab'})
    projectView.addEventListener('mouseover', () => {projectView.style.backgroundColor = '#5176a7'})    
    projectView.addEventListener('mouseleave', () => {projectView.style.backgroundColor = '#738bab'})


}

const loadGTC = function() {
    projectLink = 'https://szt2bukarm.github.io/GuessTheCharacter/'
    projectName.innerText = 'Guess The Character'
    projectDesc.innerText = 'A trivia style character guessing game.'
    projectImages.innerHTML = 
    `
    <img src="src/assets/projects/gtc/gtc1.png" alt="" class="project-page-images-img">
    <img src="src/assets/projects/gtc/gtc2.png" alt="" class="project-page-images-img">
    <img src="src/assets/projects/gtc/gtc3.png" alt="" class="project-page-images-img">
    <img src="src/assets/projects/gtc/gtc4.png" alt="" class="project-page-images-img">
    `

    projectName.style.color = '#a07c7c'
    projectDesc.style.color = '#a07c7c'
    projectBgText.style.color = '#a07c7c'
    projectBg.style.backgroundColor = '#2f0310'
    projectImages.style.backgroundColor = '#2f0310'
    projectBorder.style.background = 'linear-gradient(to right, #2f0310 0%, transparent 5%, transparent 95%, #2f0310 100%)'
    backBtn.style.backgroundColor = '#a07c7c'
    projectView.style.background = '#a07c7c'
    projectViewText.setAttribute('src', 'src/assets/projects/gtc/viewproject.png') 

    backBtn.addEventListener('mouseover', () => {backBtn.style.backgroundColor = '#a4133c'})    
    backBtn.addEventListener('mouseleave', () => {backBtn.style.backgroundColor = '#a07c7c'})
    projectView.addEventListener('mouseover', () => {projectView.style.backgroundColor = '#a4133c'})    
    projectView.addEventListener('mouseleave', () => {projectView.style.backgroundColor = '#a07c7c'})

}

const loadMG = function() {
    projectName.innerText = 'Merry Magoland'
    projectDesc.innerText = 'A recreation of a few minigames from various Kirby games.'
    projectImages.innerHTML = 
    `
    <img src="src/assets/projects/mg/mg1.png" alt="" class="project-page-images-img">
    <img src="src/assets/projects/mg/mg2.png" alt="" class="project-page-images-img">
    <img src="src/assets/projects/mg/mg3.png" alt="" class="project-page-images-img">
    `

    projectName.style.color = '#a07c98'
    projectDesc.style.color = '#a07c98'
    projectBgText.style.color = '#a07c98'
    projectBg.style.backgroundColor = '#2d0223'
    projectImages.style.backgroundColor = '#2d0223'
    projectBorder.style.background = 'linear-gradient(to right, #2d0223 0%, transparent 5%, transparent 95%, #2d0223 100%)'
    backBtn.style.backgroundColor = '#a07c98'
    projectView.style.background = '#a07c98'
    projectViewText.setAttribute('src', 'src/assets/projects/mg/viewproject.png') 

    backBtn.addEventListener('mouseover', () => {backBtn.style.backgroundColor = '#6910a8'})    
    backBtn.addEventListener('mouseleave', () => {backBtn.style.backgroundColor = '#a07c98'})
    projectView.addEventListener('mouseover', () => {projectView.style.backgroundColor = '#6910a8'})    
    projectView.addEventListener('mouseleave', () => {projectView.style.backgroundColor = '#a07c98'})
}

