// так же typescript позволяет объявлять свои кастомные типы
type numList = Array<number> | Array<string>;

const list:numList = ["1","asd"];
const list2:numList = [1,23];
