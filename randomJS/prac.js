// Tracking online orders

// const orders = [
//   { customer: 'John Doe', total: 34.99, status: 'Pending' },
//   { customer: 'Jane Smith', total: 104.5, status: 'Shipped' },
//   { customer: 'Sam Green', total: 49.0, status: 'Pending' },
//   { customer: 'Mary Brown', total: 65.75, status: 'Delivered' },
// ];

// orders.forEach((order) => {
//   if (order.status === 'Pending') {
//     console.log(
//       `Priority Alert: Process ${
//         order.customer
//       }'s order of $${order.total.toFixed(2)}.`
//     );
//   }
// });

// orders.forEach((order) => {
//   if (order.customer === 'Sam Green') {
//     console.log(
//       `Your order, ${order.customer} was $${order.total} and the status is ${order.status}.`
//     );
//   }
// });

// School Bus Schedule

// const students = [
//   {name: 'Jared', pickedUp: true},
//   {name: 'Mary', pickedUp: false},
//   {name: 'Aiden', pickedUp: false},
//   {name: 'Aria', pickedUp: true},
// ];

// const summary = students.map(student => {
//   return `${student.name}: ${student.pickedUp ? 'Picked up' : 'Not Picked Up'}`;
// });

// console.log(summary);

// students.forEach(student => {
//   if (!student.pickedUp) {
//     console.log(`Guardian of ${student.name}: Your child hasn't been picked up yet.`);
//   }
// });

// Change the first letter to caps.

// const firstLetter = (word) => {
//     if (word) {
//       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }

// };

// const firstCapLetter = word => {
//   if (word) {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }
// };

// console.log(firstCapLetter('begin'));

// Grocery Store Management
// const products = [
//   { name: 'Apples', category: 'Fruit', stock: 3 },
//   { name: 'Bananas', category: 'Fruit', stock: 10 },
//   { name: 'Carrots', category: 'Vegetable', stock: 4 },
//   { name: 'Detergent', category: 'Household', stock: 2 },
//   { name: 'Eggs', category: 'Dairy', stock: 12 },
// ];

// const stockSummaries = products.map((product) => {
//   return `${product.name} (${product.category}): ${product.stock} in stock.`;
// });

// console.log(stockSummaries);

// products.forEach((product) => {
//   if (product.stock < 5) {
//     console.log(
//       `${product.name} (${product.category}) is running low on stock. Only ${product.stock} left.`
//     );
//   }
// });