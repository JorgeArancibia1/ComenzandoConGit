// alert("chao mundo")
// int
// String
// boolean
// float
// objeto
// array
// undefined
// null
// "" !== null


/* console.log(objeto) */

let nuevaVariable = true;
let nombreVariable = 1;

// var leche = false
const GOKU = "fase 2";
// Arreglo
nombreVariable = [0, "GATO", 2, 3, "PERRO", 5];

let persona = {
  nombre: "Gonzalo",
  edad: 17,
  genero: "TODES",
};
// Arreglo de objetos
let alumnos = [
  {
    nombre: "manuel",
    edad: 14,
    genero: "robot",
    cargo: "pilar",
  },
  {
    nombre: "manuel",
    edad: 14,
    genero: "robot",
    cargo: "pilar",
  },
  {
    nombre: "manuel",
    edad: 14,
    genero: "robot",
    cargo: "pilar",
  },
  {
    nombre: "manuel",
    edad: 14,
    genero: "robot",
    cargo: "pilar",
  },
];

/* const listaDeAlumnos = alumnos.map((alumno) => {
  return alumno
})
console.log(listaDeAlumnos) */

const numeros = [1,2,3,4,5]

/* const Numeritos = numeros.forEach(numero => {
  console.log(numero)
}); */
/*          0      0 < 4               0++ */
for (let i = 0; i < numeros.length; i++) {
  const element = numeros[i];
  console.log(element)
  console.log("elemento")
}

let productos = {
  nombre: "polera",
  color: "verde",
  marca: "nike",
  talla: "xl",
  precio: 110,
};

console.log(productos.precio + 10 + " Hola Mundo")

console.log(`${productos.precio + 10} Hola Mundo`)

// console.log (precio)
/* console.log(productos.precio); */

if (productos.precio === 110) {
  let suma = productos.precio + productos.precio;
  /* console.log(suma); */
} else {
  alert("error");
}

// console.log(nuevaVariable)
// console.log("array => ", nombreVariable)
// console.log("objeto => ", persona)

/* FUNCIONES */

/* function funcionVintage (){
}  */

const newFunction = (elemento1, elemento2) => {  
  let suma = elemento1 + elemento2
  return suma
}

let resultado1 = newFunction(1,2)
let resultado2 = newFunction("Hola ", "Mundo")
let resultado3 = newFunction("Chao ", 2)

/* console.log(resultado1)
console.log(resultado2)
console.log(resultado3) */

const funcionEjemplo = (nota1, nota2, nota3) => {
  let suma = nota1 + nota2 + nota3
  let promedio = suma / 3
  return promedio
}

let primerPromedio = funcionEjemplo (70,60,50)
console.log(primerPromedio)



  