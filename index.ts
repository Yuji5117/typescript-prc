// let id = 5
// id = '5'
// Type 'string' is not assignable to type 'number'.

// tsc --init = create tsconfig.json

// basics types
let id: number = 1
let company: string = 'Hello'
let isPublished: boolean  = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3]
let arr: string[] = ['hello', 'goodby', 'cool']
let isArr: boolean[] = [true, false, true]


// tuple
let person: [number, string, boolean] = [1, 'Bard', true]
// tuple array
let employee: [number, string][]

employee =[
    [1, 'hello'],
    [2, 'good'],
    [3, 'cool']
]

let people: [number, string, boolean][] = [
    [1, 'hello', true],
    [2, 'cool', true],
    [1, 'hello', true]
]


// Union
let pid: string | number
pid = 22


// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction1)


enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log(Direction2);



// Object
type User = {
    id: number,
    name: string
}

const user: User = {
  id: 1,
  name: 'yuji',
};

// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'test'
// }


// Type Assertion
let cid: any =1
// let customerId = <number>cid
let customerId = cid as number


// Functions
function addNum(x: number, y: number): number {
    return x + y
}

// console.log(addNum(1, 2))

function log(message: string | number): void {
  console.log(message);
}


// Interface
// readonly = 参照のみ可能・編集不可　
interface UserInterface {
    readonly id: number,
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

type Point = number | string
const p1: Point = 1


interface MathFunc {
    (x: number, y: number): number
}

// よくわからない
// const add: MathFunc = (x: number, y: number): number => number: any => x + y
// const sub: MathFunc = (x: number, y: number): number => number => x - y

// Classes

interface PersonInterface {
  id: number;
  name: string;
  register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id,
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}


const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

console.log(brad.register());

console.log(brad, mike)

// brad.id = 5「

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Yuji', 'Developer')

console.log(emp);


// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['1', '2', '3', '4'])

numArray.push(1)
strArray.push('4');