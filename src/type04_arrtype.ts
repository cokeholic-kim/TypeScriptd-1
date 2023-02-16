//구문 type [] , Array<type>
//문자열만 가지는 배열
let strarr: string[] = ["a","b","c","d"]
//or
let strarr2:Array<string> = ["🍖","🍈","🍎","🍊","⏫"]

//숫자만 가지는 배열
let numarr :number[] = [1,2,3,4,5]
//or
let numarr2:Array<number> = [1,2,3,4,5]

//숫자와 문자열을가지는 배열
let numstrArr : (number | string)[] = [1,2,"a"]
//or
let numstrArr2 :Array<number|string> = [1,2,"b"]

//객체타입을 가지는 배열
//인터페이스
interface User{
    readonly name:string;
    age:number,
    isJob?:boolean, //선택사항 있어도되고 없어도되는.
}
let objArr : User [] = [
    {
        name:"green",
        age:30
    },
    {
        isJob:true,
        name:"green",
        age:30
    }
]
const newname = objArr[0].name

//읽기전용 배열생성
let readArr : readonly number [] = [1,2,3,4]
// readArr.push(5) @error
// readArr[0] = 10  @error
