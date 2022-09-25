const num:number|null = 5;

type numList = Array<number>;

interface user {
    name:string,
    age:number,
}

function foo (a :numList ,b :user) :void{
    console.log(a,b)
}

foo([1,2],{name:"John",age:25})