var now = new Date();
var naissance = new Date("2004-09-15");
var age = now.getFullYear() - naissance.getFullYear();
var moisDiff = now.getMonth() - naissance.getMonth();
if (moisDiff < 0 || (moisDiff === 0 && now.getDate() < naissance.getDate())) {
    age--;
} 

document.getElementById("agedd").textContent = age;