const str: string = 'hello'

let intn: number = 32

intn = 22

const numberArr: number[] = [1, 2, 3]
const numberArr2: Array<number> = [12]

// Tuple
const contact: [string, number] = ['maks', 2]

// Any
let variable: any = 42
variable = 'a string'
variable = []

function sayMyName(name: string): void {
    console.log(name)
}

sayMyName("Maks")


// Never
function throwErr(message: string): never {
    throw new Error(message)
}

//Type alias
type Login = string
const userlogin: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

type someType = string | null | undefined


console.log(str)