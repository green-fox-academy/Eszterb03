// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

// array
function printParams(...inputString: string[]) {
    inputString.forEach(function (elem: string) {
        console.log(elem)
    });

}
printParams('kiscica', 'kiskutya');
printParams('hajo', 'asztal', 'tesa', 'pad');
printParams();


