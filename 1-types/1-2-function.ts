// {
//     //javascript
//     function jsAdd(num1, num2){
//         return num1 + num2;
//     }

//     //TypeScript
//     function add(num1: number, num2: number): number{
//         return num1 + num2;
//     }

//     //javascript
//     function jsFetchNum(id){
//         // code ・・・
//         // code ・・・
//         // code　・・・
//         return new Promise((resolve, reject) =>{
//             resolve(100);
//         });
//     }

//         function jsFetchNum2(id: string) : Promise<number>{
//             return new Promise((resolve, reject) =>{
//                 resolve(100);
//             })
//         }
// }

//Optional Parameter
function printName(firstName: string, lastName?: string){
    console.log(firstName);
    console.log(lastName);  
}
printName('Steve','Jobs');
printName('Ellie', undefined);
printName('Ellie');

//Default parameter
function printMessage(message: string = 'defalut message'){
    console.log(message);
    
}
printMessage();

//Rest parameter
console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3, 4,0));

function addNumbers(...numbers:number[]):number{
    return numbers.reduce((a, b) => a + b);
}
