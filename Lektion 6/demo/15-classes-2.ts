// Example from:
// Net Ninja: TypeScript Crash Course
// https://www.youtube.com/watch?v=VGu1vDAWNTg&list=PL4cUxeGkcC9gNhFQgS4edYLqP7LkZcFMN

//------------------
// access modifiers
//------------------

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

class Pizza {
	constructor(private title: string, private price: number) {}

	// title: string
	// price: number
	private base: Base = 'classic'
	private toppings: string[] = []

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
// console.log(pizza.title, pizza.price, pizza.toppings)
