//Generic

function getSize<T>(arr: T[]):number {
    return arr.length
}

const numArr= [1,2,3,4]
getSize <number>(numArr); //arr.length 4

const strArr23 = ['a','b','c'];
getSize<string>(strArr23); // 3

const boolArr2 = [true,false,true,false]
getSize<boolean>(boolArr2); // 4

const objectarr = [{},{name:"a"},{},{age:"30"},{}]
getSize<object>(objectarr) // 4

//interface generic

interface Animal<T> {
    name: string;
    color: string;
    option:T; //t변수에 따라 타입을받을수있음
}
const animal2: Animal<string> = {
    name:"고양이",
    color:"검정",
    option:"특이함",
}
const animal1:Animal<{age: number, hobby:string}> = {
    name:"강아지",
    color:"검정",
    option: {
        age:3,
        hobby:"공놀이"
    }
}

//generic extends 
interface Student100{
    name: string;
    age: number;
}
interface Car {
    name: string
}
interface Fruit{
    color: string;
}
const student1: Student100 = {
    name:"",
    age:33
}
const car1:Car = {
    name:"소나타"
}
const fruit1:Fruit = {
    color:"빨강"
}

function printobjName<t extends {name:string}>(data:t): string{
    return data.name;
}

printobjName(student1);
printobjName(car1);
// printobjName(fruit1)
type U = number | string | boolean;
interface MyType<T extends U>{
    name: string;
    value: T
}

const dataA: MyType<string> = {
    name: "하하핳",
    value:"제네릭"
}

const dataB: MyType<number>={
    name:"대충글자몇개",
    value:3
}

const dataC: MyType<boolean>={
    name:"대충글자몇개",
    value:true
}

interface color1 {
    name: string;
    age: number;
}
interface color2 {
    color: string;
}
interface color3 {
    name: string;
    color: string;
}

const pallette1:color1 = {
    name:"",
    age:15
}

const pallette2:color2 = {
    color: "white"
}
const pallette3:color3={
    name:"ddd",
    color:"black"
}

function printColor<t extends {color:string}>(obj:t){
    console.log(obj.color)
}

printColor(pallette2)
printColor(pallette3)
// printColor(pallette1) // 이거는 color가 없는데 ?


//인터페이스 3개 
interface 민준상{
    name:string
    color: string
}
interface 요한{
    name:string
    color:string
}
interface 창민{
    name: string
}

//객체 
const s1:민준상 = {
    name:"민준",
    color:"흰색"
}
const s2:요한 = {
    name:"요한",
    color: "노랑"
}
const s3:창민 = {
    name: "창민"
}

// function printColor<t extends {color:string}>(obj:t):string{
//     return obj.color
// }
printColor(s1)
printColor(s2)
// printColor(s3)
