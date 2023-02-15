interface Dog{
    readonly name:string
    age:number
    color?:string;
}
let dog1:Dog ={
    name:"구름",
    age:3
}
let dog2:Dog = {
    name:"몽이",
    age:2
}

//문자열리터럴 타입 지정
type Score = 'A'|'B'|'C'|'D'|'E'|'F';
interface Student {
    name:string;
    age: number;
    gender : string;
    [grade:number]:Score // 숫자형태의 키를 다 사용가능
}
//리터럴(값) 타입
let stu1:Student = {
    name:"창민",
    age:30,
    gender:"남자",
    1:"A"
}
let stu2:Student = {
    name:"요한",
    age:22,
    gender:"남자",
    1:"B"
}