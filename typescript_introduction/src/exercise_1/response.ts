type Asigatura = 'Sociales' | 'Programacion' | 'Fisica' | 'Matematica';

const promedioNotas = (estudiante: string, asignatura: Asigatura, notas: number[]) => {
    const promedio = Math.round(notas.reduce((acc, i) => acc + i) / notas.length);
    const result = `El promedio del estudiante ${estudiante} de la materia ${asignatura} es ${promedio}`
    return result
}

const Promedio_programacion = promedioNotas('Pedro', 'Programacion', [60, 80, 75]);
console.log(Promedio_programacion);