/* Napiši funkciju koja pronalazi razliku između najveće i najmanje vrijednosti u nizu.


	Ulaz:
[7, 3, 10, 15, 2] 

	Izlaz: 
	13 //(15 - 2)
 */

const niz = [7,3,10,15,2]

const noviNiz = razlikaNajveciNajmanji(niz)

function razlikaNajveciNajmanji(niz) {
    return Math.max(...niz) - Math.min(...niz);
}
console.log(noviNiz);
