const resultatIf = document.getElementById('resultat_if');
const nb = parseInt(prompt('Encoder une année'));

if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) {
	alert(year + " est bissextile");
} else {
	alert(year + " n'est pas bissextile");
}




