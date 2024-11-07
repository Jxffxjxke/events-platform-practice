type Pizza = {
  name: string;
  price: number;
};

type Order = {
  pizza: Pizza;
  orderID: number;
  status: string;
};

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderID = 1;

const orderQueue = [];

const addNewPizza = (pizzaObj: Pizza) => {
  for (let pizza of menu) {
    if (pizza.name === pizzaObj.name) {
      throw new Error();
    }
  }
  [...menu, pizzaObj];
};

const placeOrder = (pizzaName: string) => {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error("${pizzaname} does not exist in the menu");
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    pizza: selectedPizza,
    orderID: nextOrderID++,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (orderID: number) => {
  const selectedOrder = orderQueue.find(
    (orderObj: Order) => orderObj.orderID === orderID
  );
  selectedOrder.status = "completed";
  return selectedOrder;
};

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ CHicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log({ menu });
console.log({ cashInRegister });
console.log({ orderQueue });
