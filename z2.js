// Napiši funkciju koja pronalazi najduži zajednički prefiks među nizom stringova.
// Ako ne postoji zajednički prefiks, vrati prazan string "".
// Primjer:
// Ulaz: strs = ["flower", "flow", "flight"]
// 	Izlaz: "fl"


const strs = ["flower","flow","flight"]

function pronalaziZajednickiPrefiks(e,i,arr)
    if (arr[i] = e.charAt(0).toLowerCase()){
       return arr[i]
    }
