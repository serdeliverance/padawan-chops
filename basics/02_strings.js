var ble = 'Im a string'

console.log(ble)

// string comparison

var people1 = 'martin'
var people2 = 'pepe'

if (people1 === people2) {
    console.log('words are the same')
} else {
    console.log('words are distinct')
}

// concatenate strings

var phrase = people1 + " y " + people2 + " se juntan a tomar unas birras"

console.log(phrase)

// the same as before but with some variation (it improves readability)

var phraseAgain = `${people1} y ${people2} se juntan a tomar unas birras`

// string methods

var aWord = 'there is a party in the house'

console.log(aWord.toLocaleUpperCase)

console.log(aWord.toLocaleLowerCase)

console.log(aWord.length)

console.log(aWord.charAt(0))

console.log(aWord.charAt(2))

console.log(aWord.substring(0, 5))