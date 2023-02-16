enum week{
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
}
enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
console.log(week[0])
console.log(week[1])
console.log(Color.Red)
console.log(Color['Green'])

let aaa:Color = Color.Red;

enum StarbucksGrade {
    Welcome,
    Green,
    Gold,
}
function getDiscount(v: StarbucksGrade) : number {
    switch(v){
        case StarbucksGrade.Welcome:
            return 0;
        case StarbucksGrade.Green:
            return 5;
        case StarbucksGrade.Gold:
            return 10;
    }
}

console.log(getDiscount(StarbucksGrade.Welcome))