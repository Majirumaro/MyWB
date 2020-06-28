document.addEventListener("DOMContentLoaded", function() {
n = new Date();
y = n.getFullYear();
m = n.toLocaleString('default',{month : 'long'});
d = n.getDate();
document.getElementById("date").innerHTML = `${m} ${d},${y}`;
});