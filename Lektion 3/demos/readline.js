// Beispiel zu readline

const readline = require('Lektion 3/demos/readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
 
readline.question(`What's your name? `, name => {
  console.log(`Hi ${name}!`)
  readline.close()
})
