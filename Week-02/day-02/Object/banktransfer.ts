'use strict';

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameandBalance(accountnum: number) {
    let result = accounts.filter(function (accountrow: any) {
        return accountrow.accountNumber === accountnum
    })[0]

    return [result.clientName, result.balance]
}
console.log(getNameandBalance(11234543))

// [i] azért van ott mert ahogy fut loop ezzel kapom meg hogy az elem 0,1,2 van-e 
function getNameandBalance2(accountnum) {
    for (let i: number = 0; i < accounts.length; i++) {
        if (accountnum === accounts[i].accountNumber) {
            return [accounts[i].clientName, accounts[i].balance]
        }
    } 
    return [] //Ha nem talált semmit vissztér egy üres tömbbel 
}
console.log(getNameandBalance2(11234543))

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]
// export = {
//     getNameAndBalance,
//     transferAmount,
//     accounts
//   };
   