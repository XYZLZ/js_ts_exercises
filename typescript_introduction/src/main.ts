// * Variables
let variable = 10;
let variable2: string | number = '10';

// ? Error lens <- Extension
let arr: Array<string> = [];
// * Bucles

// for (let index = 0; index < arr.length; index++) {



// }

// * Funciones


// * Que sume 3 numeros 
// * returm type number
// * la funcion me debe indicar que parametros nececito
// * Me debe incicar cuando le estoy pasando un argumento erroneo

function test(num1: number, num2: number, num3: number) {
    return num1 + num2 + num3;
}

const resultadoTest: number = test(5, 8, 24);

console.log(resultadoTest);


// * Custom types
type CustomText = string | number;
type Sizes = 'small' | 'medium' | 'large' | 'xl';


// function message  (text: CustomText, size: Sizes): CustomText   {
//   return text;
// }

// message(12, 'small')


// * Objetos

interface User<T> {
    name: string
    lastName: string
    age: number
    isActive?: boolean
    metodologia: T
}

interface Metodologia {
    tipo: string,
    pasos?: string
}

interface Teacher extends User<Metodologia> {
    Title?: string
    nomina?: string
}

let obj: Teacher = {
    name: 'Benjamin',
    lastName: 'Viola',
    age: 12,
    Title: "Profesor de Programacion",
    nomina: "20,000",
    metodologia: { tipo: 'asdasd' }
}


// * review 
interface API<T> {
    code: string | number
    error: boolean
    payload: {
        content: T
    }
}


interface ResponseUser {
    name: string
    email: string
    password: string
}


//type StringOrNumber = ResponseUser['email'];

interface ResponseAccess {
    typeAccess: string
    required: boolean
}

type UserApi = API<ResponseUser[]>
//const userObj: UserApi = {}

const arrobj: UserApi =
{
    code: 400,
    error: true,
    payload: {
        content: [
            {
                email: "email@email.com",
                name: "Hency Lara",
                password: "mipassword"
            },
            {
                email: "correo@correo.com",
                name: "Starlin Brea",
                password: "claveSecreta"
            }
        ]
    }
}

// const userData = arrobj.payload.content.map(elm => {
//     return elm.email
// });

// * enums

enum Error_TYPES {
    BAD_REQUEST,
    SERVER_ERROR,
    UNAUTHORIZED_USER
}

let error: Error_TYPES;


function create(metodologia: Metodologia, error: Error_TYPES) {
    if (error === Error_TYPES.SERVER_ERROR) { }
    return metodologia
}

//create({ tipo: '' }, Error_TYPES.BAD_REQUEST);