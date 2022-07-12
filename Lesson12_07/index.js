// // Bad

// const withdraw = (clients, balances, client, amount) => {
//   // remove logic from if
//   // get rid of dublication code
//   // don`t use find

//   // Bad

//   balances.find((item, index) => clients.indexOf(client) === index);
//   // Good
//   balances[clients.indexOf(client)];
//   if (
//     balances.find((item, index) => clients.indexOf(client) === index) < amount
//   ) {
//     return -1;
//   }
//   return (
//     balances.find((item, index) => clients.indexOf(client) === index) - amount
//   );
// };
//---------------------------------------------------------------------------
// // Bad

// const withdraw = (clients, balances, client, amount) => {
//   return balances[clients.indexOf(client)] >= amount
//     ? (balances[clients.indexOf(client)] -= amount)
//     : -1;
// };

//-------------------------------------------------------------------------------
// Bad

// const withdraw = (clients, balances, client, amount) => {
//   let clientBalance = balances[clients.indexOf(client)];
//   if (clientBalance >= amount) {
//     clientBalance -= amount;
//     balances[clients.indexOf(client)] = clientBalance;
//     return clientBalance;
//   }

//   return -1;
// };

// Good =-------------------------------------------=
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }

//   // eslint-disable-next-line no-param-reassign
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// Bad

// const withdraw = (clients, balances, client, amount) => {
//   const curentClient = clients.indexOf(client);
//   const newBalance = balances[curentClient] - amount;
//   return newBalance > 0 ? newBalance : -1;
// };

// Good
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   balances[clientIndex] -= amount;
//   return balances[clientIndex] < amount ? balances[clientIndex] : -1;
// };
// //test data
// console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));

// // Norm
// const withdraw = function (clients, balances, client, amount) {
//   if (balances[clients.indexOf(client)] - amount < 0) {
//     return -1;
//   }
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// };

// // Good
// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = [clients.indexOf(client)];
//   if (clientIndex < amount) {
//     return -1;
//   }
//   clientIndex -= amount;
//   return clientIndex;
// };

// norm
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   return balances[clientIndex] < amount
//     ? -1
//     : (balances[clientIndex] -= amount);
// };

// norm

// const withdraw = (clients, balances, client, amount) => {
//   const clientsIndex = balances[clients.indexOf(client)];
//   if (clientsIndex > amount) {
//     return (clientsIndex -= amount);
//   }
//   return -1;
// };

// Bad
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount
//     ? balances[clients.indexOf(client)] - amount
//     : -1;

// bad
// const getRandomNumbers = (length, from, to) => {
//   const arr = new Array(length);
//   if (to - from < 1) {
//     return null;
//   }
//   return arr.fill(
//     Math.trunc(
//       Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)
//     )
//   );
// };

// good
// const getRandomNumbers = (length, from, to) => {
//   const fromNumberCeil = Math.ceil(from);
//   const toNumberCeil = Math.ceil(to);
//   if (toNumberCeil - fromNumberCeil < 1) {
//     return null;
//   }

//   return new Array(length)
//     .fill()
//     .map(Math.random() * (toNumberCeil - fromNumberCeil) + fromNumberCeil);
// };
