//database
let email = 'mativillalba03@gmail.com'
let password = '123456'


//recibimos datos del usuario
let emailuser = prompt('introduce tu email');
let pasworduser = prompt('introduce tu password');

//comparar los datos del usuario con la database
if(email == emailuser && password == pasworduser){
    window.location = './index.html'
   /*  alert('Bienvenidos a la plataforma bancaria') */
}