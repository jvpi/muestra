function initMap() {
	let coord = {
		center:{
			lat:10.4820351,
			lng:-66.9383678
		},
		zoom: 18
	}
	let elemento = document.getElementById('google-map')
	const map = new google.maps.Map(elemento,coord)
	let marker = new google.maps.Marker({
		position : coord.center,
		map : map
	})
}
	
initMap()
function slider() {
	let slider = document.getElementById('slider')
	const sliderSectiom = document.querySelectorAll('.container-slider')
	let sliderSectionLast = sliderSectiom[sliderSectiom.length - 1]
	const btnLeft = document.getElementById('btn-right')
	
	const btnRight = document.getElementById('btn-left')
	slider.insertAdjacentElement('afterbegin',sliderSectionLast)
	
	function next() {
		let sliderScetionFirist = document.querySelectorAll('.container-slider')[0]
		let slider = document.getElementById('slider')
		slider.style.marginLeft = '-200%'
		slider.style.transition = '.5s';
		setTimeout(function() {
			slider.style.transition = 'none' ;
			slider.insertAdjacentElement('beforeend',sliderScetionFirist)
			slider.style.marginLeft = '-100%'
		}, 500)
	}

	setInterval(next, 4000)
	btnRight.addEventListener('click',next)
	btnLeft.addEventListener('click',function() {
		const sliderSectiom = document.querySelectorAll('.container-slider')
		let sliderSectionLast = sliderSectiom[sliderSectiom.length - 1]
		let slider = document.getElementById('slider')
		slider.style.marginLeft = '0%'
		slider.style.transition = '.5s';
		setTimeout(function() {

			slider.style.transition = 'none' ;
			slider.insertAdjacentElement('afterbegin',sliderSectionLast)
			slider.style.marginLeft = '-100%'
		}, 500)
	})
}


slider()