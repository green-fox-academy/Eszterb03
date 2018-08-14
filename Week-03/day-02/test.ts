function division ( a:number, b:number):number {
return a /b;    
}
try{
    console.log(division(1,0));
} catch(err){
    console.log(err);
} finally {
    console.log('alma');
}
