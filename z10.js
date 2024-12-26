/* Napiši funkciju koja vraća objekt s brojem pojavljivanja svakog elementa u nizu.

	Ulaz: 
	[1, 2, 2, 2, 3, 3, 4]

	Izlaz: 
	{ 1: 1, 2: 3, 3: 2, 4: 1 }
 */

const niz = [1, 2, 2, 2, 3, 3, 4];

const noviObjekat = vracaBrojanje(niz)
function vracaBrojanje(niz) {
  const objekat = {}; 
  niz.forEach(function(e){
    if (objekat[e]) {
      objekat[e] += 1;
    } else {
      objekat[e] = 1;
    }
  }
);
  return objekat;
}
console.log(noviObjekat);
