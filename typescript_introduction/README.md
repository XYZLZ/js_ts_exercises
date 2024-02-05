# Ejercicio Numero 1

## Un maestro quiere realizar el promedio de notas de sus asignaturas de sus determinadas asignaturas.
- Las asignaturas son: 
 - Matematica
 - Sociales
 - Programacion
 - Fisica

- Realizar una funcion que pida la asignatura, el nombre del alumno y las notas que se van a promediar.
- Las notas seran un conjunto de notas (arreglo)
- Las asignaturas no pueden ser diferentes a las dadas por el maestro.
- la funcion debe retornar el promedio de las notas con el nombre del estudiante y la asignatura.


# Ejercicio Numero 2

## Como administrador de una institucion academica debo crear los usuarios para la institucion.
- los usuarios por ahora mas importantes son:
 - Admin
 - Profesor
 - Estudiante

- Realizar una interfaz para cada uno de los usuarios.
- las propiedades seran a tu criterio a exepcion de (nomina y active, notas, access).
- Los unicos que pueden tener nomina son el admin y el profesor.
- El unico que puede tener la propiedad notas es el estudiante.
- active debe ser opcional.
- La propiedad access debe heredar de una interfaz llamada NivelDeAcceso
- NivelDeAcceso debe contener la propiedad type.
- El nivel de acceso debe ser dinamico independiente del usuario. 