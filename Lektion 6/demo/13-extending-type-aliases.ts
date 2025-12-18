// Example from:
// Net Ninja: TypeScript Crash Course
// https://www.youtube.com/watch?v=VGu1vDAWNTg&list=PL4cUxeGkcC9gNhFQgS4edYLqP7LkZcFMN

//------------------------
// extending type aliases
//------------------------

type Person = {
	id: string | number
	firstName: string
}

type User = Person & {
	email: string
}

const personOne = {
	id: 1,
	firstName: 'mario',
}
const personTwo = {
	id: '2',
	firstName: 'yoshi',
	email: 'yoshi@netninja.dev',
}
const personThree = {
	email: 'peach@netninja.dev',
}

function printUser(user: User) {
	console.log(user.id, user.email, user.firstName)
}

// printUser(personOne) --> not allowed
printUser(personTwo)
// printUser(personThree) --> not allowed
