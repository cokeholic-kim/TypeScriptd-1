class ClassAnimal {
    protected name:string;
    //정적 멤버 변수 선언
    //this나 인스턴스로 접근할수 없음 클래스명.변수명 으로접근
    static eye = 2;
    static eat():void{
        console.log("먹는다");
    }
    constructor(name: string){
        this.name = name
    }
}
class ClassCat extends ClassAnimal{
    public getName() : string {
        this.sound()
        return `cat name is ${this.name}`
    }
    private sound():void{
        console.log("야.옹");
    }
}

let cat = new ClassCat("레오")

console.log(cat.getName())
console.log(ClassAnimal.eye)
ClassAnimal.eat();

//추상클래스 선언
//상속만 가능
//인스턴스객체 생성 불가.
abstract class Person {
    name: string;
    constructor(name:string){
        this.name = name;
    }
    abstract work():void; //추상메소드 선언.
}
class Teacher extends Person {
    work(): void {
        console.log("가르킵니다.")
    }
}
// let person1 = new Person("이름")

class Engineer extends Person{
    work(): void{
        console.log("엔지니어")
    }
}

let teacher1 = new Teacher("bella");
teacher1.work()
let Enginner2 = new Engineer("ll")
Enginner2.work()