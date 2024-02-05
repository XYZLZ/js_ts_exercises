// # Ejercicio Numero 1

// ## Un maestro quiere realizar el promedio de notas de sus asignaturas de sus determinadas asignaturas.
// - Las asignaturas son:
//     - Matematica
//     - Sociales
//     - Programacion
//     - Fisica

//     - Realizar una funcion que pida la asignatura, el nombre del alumno y las notas que se van a promediar.
//     - Las notas seran un conjunto de notas(arreglo)
//     - Las asignaturas no pueden ser diferentes a las dadas por el maestro.
//     - la funcion debe retornar el promedio de las notas con el nombre del estudiante y la asignatura.

type asignatura = "Matematica" | "Sociales" | "Programacion" | "Fisica";

function calcularPromedio(estudiante: string, asignatura: asignatura, notas: Array<number>) {

    const totalNotas = notas.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });

    // console.log(totalNotas);

    const promedioNotas = totalNotas / notas.length;
    // console.log(promedioNotas);

    return `El estudiante ${estudiante} de la asignatura ${asignatura} tiene un promedio de notas acumuladas de ${promedioNotas}`;
}

console.log(calcularPromedio('Pedro', "Fisica", [85, 90, 78]));