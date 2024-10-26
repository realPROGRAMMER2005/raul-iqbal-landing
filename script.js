const buttonBurger = document.querySelector('.button-burger');
const buttonBurgerWrapper = document.querySelector('.button-burger-wrapper');

let isMenuOpen = false
buttonBurgerWrapper.addEventListener('click', () => {
	if (!isMenuOpen) {
		isMenuOpen = true
		buttonBurger.classList.add('open')
		showNavigationMenu()
	} else {
		isMenuOpen = false
		buttonBurger.classList.remove('open')
		hideNavigationMenu()
	}
})



const navigationMenu = document.getElementById('navigationMenu')

window.addEventListener('resize', function () {
	if (window.innerWidth >= 530) {
		hideNavigationMenu()
		isMenuOpen = false
		buttonBurger.classList.remove('open')
	}
})


function showNavigationMenu() {
	navigationMenu.style.left = '0';
	let header = document.querySelector('.header');
	navigationMenu.style.height = header.offsetHeight + 'px';
}

function hideNavigationMenu() {
	navigationMenu.style.left = '-100vw'
}
