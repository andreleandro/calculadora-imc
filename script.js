function calculate () {
    let bmi
    let result = document.querySelector("#result")
    let weight = parseInt(document.querySelector("#weight").value)
    document.querySelector("#weight-val").textContent = `${weight} kg`
    let height = parseInt(document.querySelector("#height").value)
    document.querySelector("#height-val").textContent = `${height} cm`
    bmi = (weight / Math.pow(height, 2)*10000).toFixed(1)
    result.textContent = bmi
    

    if(bmi < 18.5) {
        category = "Abaixo do Peso"
        result.style.color = "#FFC44D"
    } else if ( bmi >= 18.5 && bmi <= 24.9 ) {
        category = "Peso Ideal"
        result.style.color = "#0BE881"
    } else if ( bmi >= 25 && bmi <= 29.9 ) {
        category = "Acima do Peso"
        result.style.color = "#FF884D"
    } else {
        category = "Obeso"
        result.style.color = "#FF5E57"
    }
    document.querySelector("#category").textContent = category
}