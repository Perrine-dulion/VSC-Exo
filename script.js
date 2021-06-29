const resultatIf = document.getElementById('resultat_if');
const year = parseInt(prompt('Encoder une année'));

if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) {
	resultatIf.innerHTML (year + " est bissextile");
} else {
	resultatIf.innerHTML (year + " n'est pas bissextile");
}




