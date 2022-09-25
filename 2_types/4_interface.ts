
// с помощью ключевого слова interface мы можем описать как будет выглядеть объект
// ключевое слово readonly указывает на то что после создания объекта на основе этого интерфейса
// конкретное значение нельзя перезаписывать

interface user{
  readonly  name:string,
  readonly  surName:string,
    age:number
    isAdmin?:boolean
}

const obj:user= {
    name:"John",
    surName:"Doe",
    age:25,
}
obj.age = 28
// obj.name= "str"

