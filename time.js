function time(){
let dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();
}

setInterval(time,1000);






