function convertTemp(){

let temp = document.getElementById("tempInput").value;
let from = document.getElementById("fromUnit").value;
let to = document.getElementById("toUnit").value;
let result = document.getElementById("result");

if(temp === "" || isNaN(temp)){
result.innerHTML = " Enter valid number";
return;
}

temp = parseFloat(temp);

let celsius;

if(from === "celsius"){
celsius = temp;
}
else if(from === "fahrenheit"){
celsius = (temp - 32) * 5/9;
}
else if(from === "kelvin"){
celsius = temp - 273.15;
}

let finalTemp;

if(to === "celsius"){
finalTemp = celsius;
}
else if(to === "fahrenheit"){
finalTemp = (celsius * 9/5) + 32;
}
else if(to === "kelvin"){
finalTemp = celsius + 273.15;
}


let unitSymbol;

if(to === "celsius") unitSymbol = "°C";
else if(to === "fahrenheit") unitSymbol = "°F";
else unitSymbol = "K";
result.innerHTML = finalTemp.toFixed(2) + " " + unitSymbol;

}
