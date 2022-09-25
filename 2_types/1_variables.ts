// Объявление переменных и констант происходит как и в обычном JS
// только в языке typescript вам необходимо после имени переменной
// указать тип данных который в нее попадет

let str:string = "abc";

const num:number = 123;

// если мы не знаем точно какой тип данных будет лежать в
// переменной то можно сделать следующую запись

// let data: object | null;

// Кроме простых типов данных, как и в javascript, можно создавать сложные комплексные объекты
//  Например:


// let obj: object = {
//     name:"John",
//     age:25,
// }
// obj={
//     name:"another"
// }

// также что касается массивов то их запись следующая

// const arr:object= [1,2,3];


// бывают ситуации когда нам нужно сделать проверку еще более строгой
// и указать что массив может принимать в себя только числа

// const arr:Array<number>=[1,2,3,4,5];
// arr.push("asd") // Ошибка


