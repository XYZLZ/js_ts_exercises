interface MyUser<T> {
    name: string
    email: string
    age: number
    active?: boolean
    access: T
}

interface AccessLevel {
    type: string
}

interface Administrator extends MyUser<AccessLevel> {
    nomina: string
}
interface Proffesor extends Administrator {}

interface Student extends MyUser<AccessLevel> {
    notas: Array<number>
}