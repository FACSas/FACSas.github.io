let btnAgregar = document.getElementById("btnAgregar")
let formulario = document.getElementById("form")
let sucess = document.getElementById("sucess")
let error = document.getElementById("error")
let warning = document.getElementById("warning")

formulario.addEventListener('submit', function(event) {
    event.preventDefault()
    addNewCityToLocalStorage();
    validacion = true
    if (validacion == true) {
        getCitiesFromLocalStorage()
    } else {

    }




    function addNewCityToLocalStorage() {
        let newCity = document.getElementById("agregarCiudad").value
        let cities = getCitiesFromLocalStorage();
        cities.push(newCity);
        localStorage.setItem("CITIES", JSON.stringify(cities));
    }
})

function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
        sucess.style.display = "block"

    } else {
        cities = [];
    }
    return cities;
}
async function validarApi() {

    try {
        let ciudad = document.getElementById("agregarCiudad").value

        const respuesta = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=f07497646f64aeab81e316071a023b2b&units=metric&lang=es`)
        const datos = await response.json()
        console.log(datos)
    } catch (error) {
        console.log(error)
    }
}

//function getCitiesFromLocalStorage() {
//    let cities = localStorage.getItem("CITIES");
//    if (cities) {
//        cities = JSON.parse(cities);
//        sucess.style.display = "block"
//
//    } else if (cities == null) {
//        cities = [];
//        warning.style.display = "block"
//
//    } else {
//        error.style.display = "block"
//    }
//    return cities;
//}





//let btnAgregar = document.getElementById("btnAgregar")
//let formulario = document.getElementById("form")
//let alerta = document.getElementById("alert")
//
//formulario.addEventListener("submit", function(event) {
//    event.preventDefault()
//
//    let nuevaCiudad = document.getElementById("agregarCiudad").value
//    ciudadesArrayJson.push(nuevaCiudad)
//    localStorageLista(ciudadesArrayJson)
//
//    function getCiudadLocalStorage() {
//        let storedList = localStorage.getItem("Ciudades");
//        if (storedList == null) {
//            ciudadesArrayJson = [];
//        } else {
//            ciudadesArrayJson = JSON.parse(storedList)
//        }
//        return storedList
//    }
//
//    function localStorageLista(ciudadesArrayJson) {
//        localStorage.setItem("Ciudades", JSON.stringify(ciudadesArrayJson))
//
//    }
//    console.log(ciudadesArrayJson)
//    mostrar()
//
//    function mostrar() {
//        document.getElementById('card').style.display = 'block'
//    }
//
//})