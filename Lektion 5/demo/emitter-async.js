const EventEmitter = require('events')
const door = new EventEmitter()
const status = new EventEmitter()

// with async/await
//
door.on('open', async n => {
  console.log('door was opened ')
  let result = await resolveAfter2Seconds(n)
  
  // here we could just output the result to the console...
  // or: inform other component that result is available:
  status.emit('ready', result)
})

// promise notation
//
door.on('open', n => {
  console.log('door was opened ')
  resolveAfter2Seconds(n)
    .then(result => status.emit('ready', result))
})

door.emit('open', 10)

// make promise
//
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x)
    }, 2000)
  })
}

// use result when available
//
status.on('ready', data => {
  console.log("data received:")
  console.log(data)
})
