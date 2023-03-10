//매개변수가 여러개일때 선택적 매개변수가 뒤로가야함 
//앞에있으면 에러발생

function printUser(name:string,age?:number){
    return `Hello${name} age ${age}`
}
printUser("green");

//함수 옵셔널 매개변수
function showName(name?:string){
    return `Hello ${name} || 'aaa'` //name 이 없으면 aaa가 출력됨
}
function showName2(name="aaa"){
    return `Hello ${name}`
}

showName('green')
showName();
showName2("green");
showName2()

//함수 나머지 매개변수
function addArr(...nums:number[]){
    console.log(nums);
}
addArr(1,2,3);
addArr(1,2,3,4,5,6,7,8)

//함수에서의 this 타입지정

interface User2 {
    name: string
}

let yellow:User2 ={
    name:"yellow"
}
function printUsername(this:User2){
    console.log(this.name)
}
const myFun = printUsername.bind(yellow);


//함수 오버로드 
interface Person {
    name: string;
    age: number;
}
function join(name: string, age: string): string;
function join(name: string, age: number): Person;//함수 오버로드 
function join(name: string, age: number | string ): Person| string {
    if(typeof age === "number"){
        return {
            name:name,
            age:age
        }
    }else{
        return "나이는 숫자로 입력하세요."
    }
}
const green2: Person = join("green",30);
const blue: string = join("blue","hi")