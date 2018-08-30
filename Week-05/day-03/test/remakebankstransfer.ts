'use strict';

const accounts: any[] = [
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer

// function getNameAndBalance(numBalance) {
//   for (let i: number = 0; i < accounts.length; i++) {
//     if (accounts[i].accountNumber === numBalance) {
//       return [accounts[i].clientName, accounts[i].balance];
//     }
//   }
// };
// console.log(getNameAndBalance(11234543));

function transferMoney(accounts: any[], fromAccountNum: number, toAccountNum: number, amountOfCash: number) {
  try {
    for (let i: number = 0; i < accounts.length; i++) {
      if (accounts[i]['accountNumber'] == fromAccountNum) {
        accounts[i].balance -= amountOfCash;
      } else if (accounts[i]['accountNumber'] == toAccountNum) {
        accounts[i].balance += amountOfCash;
      }
    }
  } catch (Error) {
    throw new Error('404-account not found');
  }
}

transferMoney(accounts, 43546731, 23456311, 500.0);
console.log(accounts);

// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]
// export = {
//   getNameAndBalance,
//   // transferAmount,
//   accounts
// };