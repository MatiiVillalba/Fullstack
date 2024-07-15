//operadores relacionales en javascript
// > mayor que
let uno = 150;
let dos = 500;

let mayor = uno > dos
console.log('el numero' + uno + 'es mayor que' + dos + ':' + mayor);


let menor = uno < dos
console.log('el numero' + uno + 'es menor que' + dos + ':' + menor);


let igual = uno == dos
console.log('el numero' + uno + 'es igual que'+ dos + ':' + igual);


let distinto = uno != dos
console.log('el numero' + uno + 'es distinto que'+ dos + ':' + distinto);


//combinaciones
let mayorigual = uno >= dos
console.log('el numero' + uno + 'es mayorigual que'+ dos + ':' + mayorigual);


let menorigual = uno <= dos
console.log('el numero' + uno + 'es menorigual que'+ dos + ':' + menorigual);


let identicotodo = uno === dos // valor, tipo de datos, clon
console.log('el numero' + uno + 'es identicotodo que'+ dos + ':' + identicotodo);


//condicionales
//()=> condicion que evalua el si logico
//{}=> el bloque de codigo que se ejecuta si la condicion se cumple
// la condicion se cumple con un booleano: true / false
// si es true se ejecuta el bloque de codigo
// si es false no se ejecuta el bloque de codigo

let octavos = true;
if (octavos) {
console.log('el partido de octavos de final se juega el 4 de julio');
}


let edad = 18
let inscripto = true;
let argentino = true

if (edad >= 18){
    console.log('1. puede votar');
}
console.log('==============================');
//if anidado
if (edad >= 18) {
  if(inscripto){
    console.log('2. puede votar');
  }
}
console.log('==============================');
if (edad >= 18) {
    if(inscripto){
        if (argentino) {
        console.log('3. puede votar');
     }
    }
  }
  console.log('==============================');

  //operadores logicos && (and) || (or) ! (not)
 //     1                2            3
  if (edad >= 18 && inscripto && argentino){
    console.log('4. puede votar');
  }
  console.log('==============================');
  let email = 'mativillalba03@gmail.com'
  let password = '123456'

  if (email == 'mativillalba03@gmail.com' && password == '123456'){
    console.log('5. bienvenido a la plataforma');
  }
  console.log('==============================');
  let emailuno = 'mativillalba03@gmail.com'
  let passworduno = '1234567'
// con que alguno sea true se ejecuta el bloque del codigo
//                         true                                    false
  if (emailuno == 'mativillalba03@gmail.com' || passworduno == '123456'){
    console.log('6. bienvenido a la plataforma');
  }
 console.log('==============================');
let club = 'true';
console.log(club);
console.log(!club);
if (club) {
    console.log('7. genial con tu club!!');
}
console.log('==============================');

   