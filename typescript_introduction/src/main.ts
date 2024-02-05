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

function test(num1: number, num2: number, num3: number){
    return num1+num2+num3;
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
    metodologia: {tipo: 'asdasd'}
}


function create (metodologia: Metodologia) {
    return metodologia
}