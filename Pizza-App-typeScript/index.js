const menu = [
    {name: 'Margherita', price: 8},
    {name: 'Pepperoni', price: 10},
    {name: 'Hawaiian', price: 10},
    {name: 'Veggie', price: 9}
]

const cashInRegister = 100;

const orderQueue = [];

let nextOrderID = 1;

const addNewPizza = (pizzaObj) => {
    for(let pizza in menu) {
        if(pizza.name === pizzaObj.name) {
            throw new Error;
        }
    } [...menu, ...pizzaObj]
}

const placeOrder = (pizzaName) => {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister+= selectedPizza.price
    const newOrder = {pizza: selectedPizza, orderID: nextOrderID++, status: 'ordered'}
    orderQueue.push(newOrder)
    return newOrder;
}

const completeOrder = (orderID) => {
    const selectedOrder = orderQueue.find(orderObj => orderObj.orderID === orderID)
    selectedOrder.status = 'completed';
    return selectedOrder;

}

addNewPizza( {name: 'Chicken Bacon Ranch', cost: 12})
addNewPizza({name: 'BBQ CHicken', cost: 12})
addNewPizza({name: 'Spicy Sausage', cost: 11})

placeOrder('Chicken Bacon Ranch')
completeOrder('1')

console.log({Menu});
console.log({cashInRegister});
console.log({orderQueue});