let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.'

let arrayAlphabet = 'abcdefghijklmnopqrstuvwxyzabcdeABCDEFGHIJKLMNOPQRSTUVWXYZABCDE'.split('')


// Ini untuk menunjukkan karakter tersebut muncul berapa kali
let sentenceInsensitive = sentence.toLowerCase()

for(let i = 0; i<arrayAlphabet.length; i++){
  console.log(`Karakter ${arrayAlphabet[i].toUpperCase()} sebanyak ${[...sentenceInsensitive].filter(filtered => filtered === arrayAlphabet[i]).length} kali`)
}



// Ini untuk mengubah karakter 5 abjad ke depan
let newSentence = []
for(let i=0; i<sentence.length; i++){
  if(sentence[i] === ' '){
    newSentence.push(' ')
  } else if (sentence[i] === '.'){
    newSentence.push('.')
  } else {
    newSentence.push(arrayAlphabet[arrayAlphabet.indexOf(sentence[i])+5])
  }
}

console.log(newSentence.join(''))