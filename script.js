let ball = document.getElementById('ball')
document.onclick = (e)=>{
    //console.log(e.clientX,e.clientY)
    ball.style.top = `${e.clientY}px`
    ball.style.left = `${e.clientX}px`
}
let menuBtn = document.querySelector('.menu-btn')
let profile = document.querySelector('.profile')
let navLinks = document.querySelector('.nav-links')
function collapseMenu(){
    menuBtn.classList.toggle('menu-btn-clicked')
    // console.log(window.innerWidth)
    if(window.innerWidth > 500){
        if(profile.style.top === '0px'){
            profile.style.top = '100%'
            navLinks.style.top = '-100%'
        }
        else{
            profile.style.top = 0
            navLinks.style.top = 0
        }
    }
    else{
        if(profile.style.left === '0px'){
            profile.style.left = '-100%'
            navLinks.style.left = 0
        }
        else{
            profile.style.left = 0
            navLinks.style.left = '-100%'
        }
    }
}
menuBtn.onclick = ()=>{
    collapseMenu()
}
function homePage(){
    document.querySelector('.about-page').style.height = 'none'
    document.querySelector('.projects-page').style.display = 'none'
    document.querySelector('.contact-page').style.display = 'none'
    document.querySelector('.about-page').style.opacity = 0
    document.querySelector('.projects-page').style.opacity = 0
    document.querySelector('.contact-page').style.opacity = 0

    collapseMenu()
}
function aboutPage(){
    document.querySelector('.projects-page').style.display = 'none'
    document.querySelector('.contact-page').style.display = 'none'
    document.querySelector('.about-page').style.display = 'flex'
    document.querySelector('.about-page').style.opacity = 1

    collapseMenu()
}
function projectsPage(){
    document.querySelector('.about-page').style.display = 'none'
    document.querySelector('.contact-page').style.display = 'none'
    document.querySelector('.projects-page').style.display = 'flex'
    document.querySelector('.projects-page').style.opacity = 1

    collapseMenu()
}
function contactPage(){
    document.querySelector('.about-page').style.display = 'none'
    document.querySelector('.projects-page').style.display = 'none'
    document.querySelector('.contact-page').style.display = 'flex'
    document.querySelector('.contact-page').style.opacity = 1

    collapseMenu()
}


// monitorEvents
function monitorEvents(element){
    for(const key in element){
        if(key.startsWith('on')){
            element.addEventListener(key.slice(2),console.log)
        }
    }
}