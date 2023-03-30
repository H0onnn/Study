// type_ex.ts
var myString: string = "str";
var myBoolean: boolean = true;
var myNumber: number = -1;
var myNullNumber: null = null;
// myNullNumber = 3; // 에러
var myUndefined: undefined;
// myUndefined = 4; // 에러
var mySymbol = Symbol("id");
var myObejct: object = {
    aaa: "aaa",
    bbb: 111,
};
var myNumberArray: number[] = [1, 2, 3];
var myFunction: Function = (x: number) => x * 2;
var myAnyType: any = 3;
myAnyType = "333";

console.log(myString); // str
console.log(myBoolean); // true
console.log(myNullNumber); // null
console.log(myUndefined); // undefined
console.log(mySymbol); // Symbol(id)
console.log(myObejct); // { aaa: 'aaa', bbb: 111 }
console.log(myNumberArray); // [ 1, 2, 3 ]
console.log(myFunction); // [Function: myFunction]
console.log(myAnyType); // 333

console.log(typeof mySymbol); // symbol
console.log(typeof myFunction); // function
console.log(typeof myAnyType); // string