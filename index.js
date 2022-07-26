function getElement(elemento) {
	return document.querySelectorAll('.agregar')
}
function templateBtnCantidad() {
	
	 const markup = `
			<div class="red">
				<span class="btn-menos">-</span>
			</div>
			<div class="blue">
				<span class="cantidad">0</span>
			</div>
			<div class="green">
				<span class="btn-mas">+</span>
			</div>
		`
	 return  markup
}
function ocultatBtnAgragar(getElement,templateBtnCantidad) {
	//containerCantidad.innerHTML
	const btnAgragar = getElement('agregar')
	const containerCantidad = document.getElementById('container-cantidad')
	var btnsArr = Array.prototype.slice.call(btnAgragar);
	btnsArr.forEach(function(elemento) {
		elemento.addEventListener('click', function() {
			this.style.display = 'none'
			containerCantidad.innerHTML =  templateBtnCantidad()
			containerCantidad.style.display = 'flex '
		})
		
	})
	
	
}


ocultatBtnAgragar(getElement,templateBtnCantidad)
