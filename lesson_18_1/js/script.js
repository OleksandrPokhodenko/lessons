
let documentActions = (e) => {
	const targetElement = e.target

	if (targetElement.closest('.header__burger')) {
		document.documentElement.classList.toggle('open-menu')
	}
	else if (targetElement.closest('.open-menu')) {
		document.documentElement.classList.remove('open-menu')
	}
}

document.addEventListener('click', documentActions)
