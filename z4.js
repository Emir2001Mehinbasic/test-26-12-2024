// Ulaz je string koji se sastoji od riječi i razmaka. Vratiti dužinu posljednje riječi u stringu.

// Riječ je maksimalni podstring koji se sastoji samo od znakova koji nisu razmaci.

// Primjer 1:

// Ulaz: str = "Hello World"
// Izlaz: 5
// Objašnjenje: Posljednja riječ je "World" čija je dužina 5.

const str = "Hello World";
const str2 = " fly me to the moon   ";
function countaString(e) {
  const counter = e.trim().split(" "); 
  return counter[counter.length - 1].length; 
}
const noviString = countaString(str2);
console.log(noviString);
