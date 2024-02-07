// # Ejercicio Numero 2

// ## Como administrador de una institucion academica debo crear los usuarios para la institucion.
// - los usuarios por ahora mas importantes son:
//     - Admin
//     - Profesor
//     - Estudiante

//  - Realizar una interfaz para cada uno de los usuarios.
//  - las propiedades seran a tu criterio a exepcion de(nomina y active, notas, access).
//  - Los unicos que pueden tener nomina son el admin y el profesor.
//  - El unico que puede tener la propiedad notas es el estudiante.
//  - active debe ser opcional.
//  - La propiedad access debe heredar de una interfaz llamada NivelDeAcceso
//  - NivelDeAcceso debe contener la propiedad type.
//  - El nivel de acceso debe ser dinamico independiente del usuario. 


//Generic type
interface Persona<T> {
    name: string;
    Lastname: string;
    age: number;
    isActive?: boolean;
    access: T
}

interface NivelDeAcceso {
    type: string
}
interface Admin extends Persona<NivelDeAcceso> {
    department: string;
    nomina: number;
}

interface Maestro extends Persona<NivelDeAcceso> {
    asignatura: string;
    nomina: number;
}

interface Estudiante extends Persona<NivelDeAcceso> {
    materia: string;
    nota: number
}

