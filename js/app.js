window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})
gsap.registerPlugin(ScrollTigger, ScrollSmoother)
ScroolSmoother.create({
    wrapper: '.wrapper',
    conter: '.content'
})
