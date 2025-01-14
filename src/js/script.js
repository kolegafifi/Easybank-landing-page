const burger = document.querySelector('.burger')
const navMobile = document.querySelector('.nav-mobile')
const overlay = document.querySelector('.overlay')
const headerImg = document.querySelector('.header__container__hero-img__img1')

const showNavMobile = () => {
	const computedStyle = window.getComputedStyle(navMobile)

	if (computedStyle.display == 'none') {
		burger.setAttribute('src', './dist/img/icon-close.svg')
		navMobile.style.display = 'block'
		burger.style.transform = 'scale(0.9)'
		overlay.style.display = 'block'
	} else {
		burger.setAttribute('src', './dist/img/icon-hamburger.svg')
		navMobile.style.display = 'none'
		burger.style.transform = 'scale(1)'
		overlay.style.display = 'none'
	}
}
const changeImg = () => {
	if (innerWidth <= 768) {
		headerImg.setAttribute('src', '/dist/img/bg-intro-mobile.svg')
	}else if(innerWidth > 768){
		headerImg.setAttribute('src', '/dist/img/bg-intro-desktop.svg')
	}
}
changeImg()
window.addEventListener('resize', changeImg)
burger.addEventListener('click', showNavMobile)
