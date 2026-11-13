function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}
function celsiusParaKelvin(celsius){
    return celsius + 273.15;
}
function converterTemperatura(celsius){
    return {
        celsius: celsius,
        fahrenheit: celsiusParaFahrenheit(celsius),
        kelvin: celsiusParaKelvin(celsius)
    };
}

let temperatura = Number(prompt("Temperatura em celsius: "));
console.log(converterTemperatura(temperatura));
