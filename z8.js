/* Napiši funkciju koja prima niz i separator te vraća string u kojem su elementi niza spojeni tim separatorom.

	Ulaz: 
	["Sings", "like", "Thunder"];
const separator = "-";

	Izlaz: 
	“Sings-like-Thunder”
 */

const nekiNiz = ["Sings","like","Thunder"]
const separator = "-";

const spojeniElementi = spojiElementeNiza(nekiNriz, separator);

function spojiElementeNiza(niz, separator) { 
    return niz.join(separator);
}
console.log(spojeniElementi);



