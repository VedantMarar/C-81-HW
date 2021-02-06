canvas = document.getElementById("myCanvas");
crx = canvas.getContext("2d");

crx.beginPath();
crx.strokeStyle= "blue";
crx.lineWidth="5";
crx.arc(200,200,40,0,Math.PI*2);
crx.stroke();

crx.beginPath();
crx.strokeStyle= "black";
crx.lineWidth="5";
crx.arc(300,200,40,0,Math.PI*2);
crx.stroke();

crx.beginPath();
crx.strokeStyle= "red";
crx.lineWidth="5";
crx.arc(400,200,40,0,Math.PI*2);
crx.stroke();

crx.beginPath();
crx.strokeStyle= "yellow";
crx.lineWidth="5";
crx.arc(250,250,40,0,Math.PI*2);
crx.stroke();

crx.beginPath();
crx.strokeStyle= "green";
crx.lineWidth="5";
crx.arc(350,250,40,0,Math.PI*2);
crx.stroke();