let angka = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3]
let numOfGroup = 3

// Membagi array angka menjadi tiga kelompok
let group1 = []
let group2 = []
let group3 = []
for(i = 0; i<angka.length; i++){
  if (group1.length !== Math.round(angka.length/numOfGroup)){
    group1.push(angka[i])
    } else if (group2.length !== Math.round(angka.length/numOfGroup)) {
      group2.push(angka[i])
    } else {
      group3.push(angka[i])
    }
}

// Menampilkan kelompok angka terurut dari besar ke kecil
group1.sort(function(a,b){return a-b})
group2.sort(function(a,b){return a-b})
group3.sort(function(a,b){return a-b})
console.log('ini kelompok 1: ', group1)
console.log('ini kelompok 2: ', group2)
console.log('ini kelompok 3: ', group3)


// Menampilkan jumlah dari masing-masing kelompok angka
let total1 = group1.reduce(function(a,b){return a+b})
let total2 = group2.reduce(function(a,b){return a+b})
let total3 = group3.reduce(function(a,b){return a+b})
console.log('ini total kelompok 1: ', total1)
console.log('ini total kelompok 2: ', total2)
console.log('ini total kelompok 3: ', total3)


// Menampilkan rata-rata masing-masing kelompok angka
let avgGroup1 = total1/group1.length
let avgGroup2 = total2/group2.length
let avgGroup3 = total3/group3.length
console.log('ini rata-rata kelompok 1: ',avgGroup1)
console.log('ini rata-rata kelompok 2: ',avgGroup2)
console.log('ini rata-rata kelompok 3: ',avgGroup3)


// Menampilkan angka tertinggi dan terendah di masing-masing kelompok angka
let maxGroup1 = group1[group1.length-1]
let minGroup1 = group1[0]
let maxGroup2 = group2[group2.length-1]
let minGroup2 = group2[0]
let maxGroup3 = group3[group3.length-1]
let minGroup3 = group3[0]
console.log('ini nilai tertinggi kelompok 1: ', maxGroup1)
console.log('ini nilai tertinggi kelompok 2: ', maxGroup3)
console.log('ini nilai tertinggi kelompok 3: ', maxGroup3)
console.log('ini nilai terendah kelompok 1: ', minGroup1)
console.log('ini nilai terendah kelompok 2: ', minGroup2)
console.log('ini nilai terendah kelompok 3: ', minGroup3)