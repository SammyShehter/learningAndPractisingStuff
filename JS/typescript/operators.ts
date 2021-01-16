interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // name | age

const myName: PersonKeys = 'name'