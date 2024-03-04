let now = new Date();
let naissance = new Date("2004-09-15");
let age = now.getFullYear() - naissance.getFullYear();
let moisDiff = now.getMonth() - naissance.getMonth();
if (moisDiff < 0 || (moisDiff === 0 && now.getDate() < naissance.getDate())) {
    age--;
} 

document.getElementById("agedd").textContent = age;