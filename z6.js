// Napisati program koji pronalazi sve brojeve u nizu koji su veći od prosjeka brojeva u istom nizu. 

// 	Ulaz: 
// 	[1, 2, 3, 4, 5]

// 	Izlaz: 
// 	[4, 5]

const niz = [1,2,3,4,5]

const prosjekNiza = niz.reduce(prosjek)/niz.length;
function prosjek(acc ,e  ){
   return (acc + e) 
}
// console.log(prosjekNiza);

const filtriraniNiz = niz.filter(filtrirajNiz);

function filtrirajNiz(e){
    return e > prosjekNiza
}
console.log(filtriraniNiz);
