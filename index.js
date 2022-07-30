let objProduct = [
	{id:1,cantidad:0},
	{id:2,cantidad:0},
	{id:3,cantidad:0},
	{id:4,cantidad:0},
	{id:5,cantidad:0},
	{id:6,cantidad:0}
]
let idBtnMas = [
	{id:7},
	{id:8},
	{id:9},
	{id:10},
	{id:11},
	{id:12}
]
let idBtnCantidad = [
	{id:13},
	{id:14},
	{id:15},
	{id:16},
	{id:17},
	{id:18}
]
let contador = 0
function getElement(elemento) {
	return document.querySelectorAll('.agregar')
}
function templateBtnCantidad() {
	const containerAgreagrRemover = document.querySelectorAll('.agregar-remover__producto')
	const elementoArr = Array.prototype.slice.call(containerAgreagrRemover)
	elementoArr.forEach(function (elemento,i) {
		elemento.innerHTML += `
			<div class="red">
				<span class="btn-menos" id=${objProduct[i].id}>-</span>
			</div>
			<div class="blue">
				<span class="cantidad" id=${idBtnCantidad[i].id}>${objProduct[i].cantidad} </span>
			</div>
			<div class="green">
				<span class="btn-mas" id=${idBtnMas[i].id}>+</span>
			</div>
		`

		document.getElementById(`${objProduct[i].id}`).addEventListener('click',function () {
			if (objProduct[i].cantidad > 0) {
				document.getElementById(`${idBtnCantidad[i].id}`).innerHTML = objProduct[i].cantidad-=1
				contador--
				document.getElementById('cantidad').innerHTML = contador
				
			}
			if (objProduct[i].cantidad == 0) {
				elemento.style.display = 'none'
				const btnAgragar = getElement('agregar')
				var btnsArr = Array.prototype.slice.call(btnAgragar);
				btnsArr[i].style.display = 'inline-block'
			}	
		})
		document.getElementById(`${idBtnMas[i].id}`).addEventListener('click',function () {
				document.getElementById(`${idBtnCantidad[i].id}`).innerHTML = objProduct[i].cantidad+=1
				const array = Object.values(objProduct[i])
				contador++
				document.getElementById('cantidad').innerHTML = contador
				
		
		})
	})
	
	 
}

templateBtnCantidad()

function ocultatBtnAgragar(getElement,templateBtnCantidad) {
	const btnAgragar = getElement('agregar')
	var btnsArr = Array.prototype.slice.call(btnAgragar);
	btnsArr.forEach(function(elemento) {
		elemento.addEventListener('click', function() {
			this.style.display = 'none'
			this.nextElementSibling.style.display = 'flex '
			
		})	
	})
}



ocultatBtnAgragar(getElement,templateBtnCantidad)
