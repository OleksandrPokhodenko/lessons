
// Строгий режим
"use strict"

let documentActions = (e) => {
	const targetElement = e.target

	if (targetElement.closest('.menu-open')) {
		document.documentElement.classList.toggle('open-menu')
	}
	else if (targetElement.closest('.open-menu')) {
		document.documentElement.classList.remove('open-menu')
	}
}

document.addEventListener('click', documentActions)

	const imagesArray = [
		{ value: 0, image: 'img/hero.webp', alt: "Poster of Marvel's Avengers showcasing the main heroes in a vibrant action pose." },
		{ value: 1, image: 'img/hero-1.webp', alt: "Poster of James Cameron's Avatar with glowing blue faces and yellow eyes." },
		{ value: 2, image: 'img/hero-2.webp', alt: "Poster of The Matrix featuring Neo, Trinity, and Morpheus with cascading green code." },
		{ value: 3, image: 'img/hero-3.webp', alt: "Three characters from '47 Ronin' include a warrior, a man with tattoos, and Keanu Reeves holding a sword." }
	]
	
	function updateHeroImage(arr, direction) {
		const myImg = document.getElementById("hero-img")
		const mySpans = document.getElementsByClassName("slider__line--hero")
		
		let numberImg = parseInt(myImg.getAttribute("value"))
		mySpans[numberImg].classList.toggle("slider__line--active")
	
		numberImg = (numberImg + direction + arr.length) % arr.length
	
		mySpans[numberImg].classList.toggle("slider__line--active")
		myImg.setAttribute('src', arr[numberImg].image)
		myImg.setAttribute('value', arr[numberImg].value)
		myImg.setAttribute('alt', arr[numberImg].alt)
	}
	
	const btnRight = document.getElementById("btn-right")
	const btnLeft = document.getElementById("btn-left")
	
	btnRight.addEventListener("click", () => updateHeroImage(imagesArray, 1))
	btnLeft.addEventListener("click", () => updateHeroImage(imagesArray, -1))