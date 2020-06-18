interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

const MyName: PersonKeys = 'name'

let key: PersonKeys = 'name'

key = 'age'



type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> //leaves jus name and email
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> //leaves jus name and email

