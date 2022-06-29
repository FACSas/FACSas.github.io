window.addEventListener("load", () => {

    let temperaturaValor = document.getElementById('temp')
    let stValor = document.getElementById("st")
    let humValor = document.getElementById("hum")
    let velValor = document.getElementById("velV")
    let presValor = document.getElementById("pres")
    let carta = document.getElementById("card")

    form = document.getElementById('formCity')

    const apiKey = "f07497646f64aeab81e316071a023b2b"; //ApiKey

    form.addEventListener("submit", function(consultar) {
        consultar.preventDefault()
        let formCityData = new FormData(form)
        let ciudad = formCityData.get("citySelector")
        const url_base = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

        fetch(url_base)
            .then(response => { return response.json() })
            .then(data => {
                icon = (data.weather[0].icon)
                document.getElementById('cieloImg').src = `http://openweathermap.org/img/wn/${icon}@2x.png`
                cardCity.textContent = `${ciudad}`
                let val1 = (data.main.temp)
                temperaturaValor.textContent = `Temperatura: ${val1}º`
                let val2 = (data.main.feels_like)
                stValor.textContent = `Sensacion Termica: ${val2}º`
                let val3 = (data.main.humidity)
                humValor.textContent = `Humedad: ${val3}%`
                let val4 = (data.wind.speed)
                velValor.textContent = `Velocidad del viento:${val4}km/h`
                let val5 = (data.main.pressure)
                presValor.textContent = `Presion: ${val5}P`
                console.log(data)
                carta.style.display = 'block'
            })
            .catch((error) => {
                console.log(error)
            })
    })
    drawCategory()

});

function drawCategory() {
    const cities = JSON.parse(localStorage.getItem("CITIES"))
    for (let i = 0; i < cities.length; i++) {
        insertCategory(cities[i])
    }
}

function insertCategory(citiesName) {
    let select = document.getElementById("citySelector")
    let htmlToInsert = `<option> ${citiesName} </option>`
    select.insertAdjacentHTML('beforeend', htmlToInsert)
}