import { Domino } from "./domino";



function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
let newDomino: Domino[] = []

function sortDominoes(dominoes: Domino[]) {
    newDomino.push(dominoes[0]) //létrehoztam az új arrayt bepusholtam, hogy legyen viszonyítási alap
    for (let i: number = 0; i < dominoes.length; i++) {
        for (let j: number = 1; j < dominoes.length; j++) {
            if (newDomino[i].values[1] === dominoes[j].values[0])
                newDomino.push(dominoes[j])
        }
    }
    return newDomino
}
console.log(sortDominoes(dominoes))





