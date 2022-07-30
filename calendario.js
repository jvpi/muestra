let nombreMes = ['Enero','Febreo','Marzo','Abril','Mayo','Junio','Julio',
'Agosto','Septiembre','Octubre','Noviembre','Diciembre']

let fechaActual = new Date();
let diaSemanaActual = fechaActual.getDay()
let mesActual = fechaActual.getMonth()
let diaMesActual = fechaActual.getDate()
let yearActual = fechaActual.getFullYear()

let mes = document.getElementById('mes')
let year = document.getElementById('year')
let fecha = document.getElementById('fecha')

let prev = document.getElementById('prev')
let siguiente = document.getElementById('next')

prev.addEventListener('click',function() {

	anteriorMes()
})
siguiente.addEventListener('click',function() {

	mesSiguiente()
})

mes.innerHTML = nombreMes[mesActual]
year.innerHTML = yearActual

establecerMes(mesActual)
function establecerMes(mes) {
	for (var i = inicioDia(); i > 0; i--) {
		fecha.innerHTML += `<div class='final__dias'>
			${totalDias(mesActual - 1)-(i-1)}
		</div>`

	}

	for (var i = 1; i <= totalDias(mes); i++) {
		if (i == diaMesActual) {
			fecha.innerHTML += `<div class='hoy'>${i}</div>`
		}else {
			fecha.innerHTML += `<div class=''>${i}</div>`
		}
			
	}
}
function totalDias(mes) {
	if (mes == -1) mes = 11
	if (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11 ) {
		return	31
	}else if (mes == 3 || mes == 5 || mes == 8 || mes == 10 ) {
		return 30
	}else {
		return yearBisiesto() ? 29:28
	}
}
function yearBisiesto() {
	return ((yearActual % 100 !=0) && (yearActual % 4 == 0)) 
}


function inicioDia() {
	let inicio = new Date(yearActual,mesActual,1)
	return ((inicio.getDay()-1) === -1) ? 6 : inicio.getDay()-1
}

function mesSiguiente() {
	if (mesActual != 11) {
		 mesActual++
	}
	else {
		 mesActual = 0
		 yearActual++
	}
	
	 nuevaFecha()
}

function anteriorMes() {
	if (mesActual != 0) {
		 mesActual--
	}else {
		mesActual = 11
	 	yearActual--
	}
	 
	 nuevaFecha()
}
function nuevaFecha() {
	//fechaActual.getFullYear(yearActual,mesActual,diaMesActual)
	mes.innerHTML = nombreMes[mesActual]
	year.innerHTML = yearActual
	fecha.innerHTML = ''
	establecerMes(mesActual)

}