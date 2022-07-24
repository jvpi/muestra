function apacerecer(animacionMenuEnX) {
	const labelElemento = document.getElementById('label')
	let nav = document.getElementById('nav')
	labelElemento.addEventListener('click',function() {
		nav.classList.toggle('activeMenu')
		animacionMenuEnX()
	})
}


function animacionMenuEnX() {
	const menuSpan1 = document.getElementById('bar-menu1')
	const menuSpan2 = document.getElementById('bar-menu2')
	const menuSpan3 = document.getElementById('bar-menu3')

	menuSpan1.classList.toggle('activebar-menu1')	
	menuSpan2.classList.toggle('activebar-menu2')	
	menuSpan3.classList.toggle('activebar-menu3')	
}

apacerecer(animacionMenuEnX)