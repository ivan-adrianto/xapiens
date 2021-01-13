let angka = 1234567
let output = angka.toString()

for(let i = 0; i<angka.toString().length; i++){
  console.log(`${i+1}${'0'.repeat(angka.toString().length-1-i)}`)
}