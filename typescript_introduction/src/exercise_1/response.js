var promedioNotas = function (estudiante, asignatura, notas) {
    var promedio = Math.round(notas.reduce(function (acc, i) { return acc + i; }) / notas.length);
    var result = "El promedio del estudiante ".concat(estudiante, " de la materia ").concat(asignatura, " es ").concat(promedio);
    return result;
};
var Promedio_programacion = promedioNotas('Pedro', 'Programacion', [60, 80, 75]);
console.log(Promedio_programacion);
