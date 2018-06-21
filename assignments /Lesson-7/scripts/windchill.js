

{
var t = 70;
var s = 7;
var y = Math.pow(s, 0.16);
var f = 35.74 + 0.6215 * t - 35.75 * y + 0.4275 * t * y;
var x = f.toFixed(2);
document.getElementById('windchill').innerHTML = 
"WindChill Factor: " + x + "&deg;F";
}

