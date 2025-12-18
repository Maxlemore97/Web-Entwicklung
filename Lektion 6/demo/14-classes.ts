// Example from:
// Net Ninja: TypeScript Crash Course
// https://www.youtube.com/watch?v=VGu1vDAWNTg&list=PL4cUxeGkcC9gNhFQgS4edYLqP7LkZcFMN

//-------------
// classes 101
//-------------

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

class Pizza {
	constructor(title: string, price: number) {
		this.title = title
		this.price = price
	}

	title: string
	price: number
	base: Base = 'classic'
	toppings: string[] = []

	addTopping(topping: string): void {
		this.toppings.push(topping)
	}
	removeTopping(topping: string): void {
		this.toppings = this.toppings.filter((t) => t !== topping)
	}
	selectBase(b: Base): void {
		this.base = b
	}
}

const pizza = new Pizza('mario special', 15)

pizza.selectBase('garlic')
pizza.addTopping('mushrooms')
pizza.addTopping('olives')

console.log(pizza)
