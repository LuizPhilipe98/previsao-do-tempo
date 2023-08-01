





const key = "930bd21d75589163e9a0d0e30169d108";




function colocarDadosNaTela(dados) {
   console.log(dados)
   document.querySelector(".city").innerHTML = "Tempo em " + dados.name
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
   document.querySelector(".previsao").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`


}







async function buscarCidade(city) {
   const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

   colocarDadosNaTela(dados)
}





function clickNoButton() {

   const city = document.querySelector(".input-city").value

   buscarCidade(city)
}
