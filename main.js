const acounts = [ 
    {
    userId: "Mali" ,
    name:'Alvaro',
    lastName:'Hernandez',
    balance: 200,
    password: 1234,
    },
    {
    userId: 'Guera',
    name:'Yaxche',
    lastName:'Manrique',
    balance: 290,
    password: 5255,
    },
    {
    userId: '3333',
    name: 'stiven',
    lastName:'Trujillo',
    balance: 67,
    password: 1010,
    }
]

const users = 'userID'
console.log [acounts.users];


// for (var userId in acounts) {
//     console.log (infoUser, acounts[UserID])
// }


function login()  {
const user = document.getElementById ("user").value;
const pass = document.getElementById ("password").value;


if(user == "mali" && pass == "1234" || user == "guera" && pass == "5678" ) 
{
    window.location= "inicio.html";

}
else
 {
    alert ("Datos incorrectos");    
 }

}





// const Usuario = document.querySelector ("user")
// document.getElementById ("usuario").value = document.write = usuario + user;



// function retiros () {
//     const saldoActual = parseInt(document.getElementById ("saldo"))
//     const retiro = parseInt(document.getElementById ("valor"))
    
//     console.log (saldoActual - retiro);
// }



// const saldo = document.querySelector ("saldo").value;
// const introducir = document.querySelector ("introducing");
// const checkBtn = document.querySelector ('rertirar'.value)

// checkBtn.addEventListener ('click', function retirar () {
//     const saldo - const introducir
// })




// {
//     if(pass == passIng){
//        window.location="inicio.html";
//      } else {
//          alert ("Contraseña invalida");

//      }
//     } else {
//         alert ("Usuario invalido");
//     }
// }







// else {
//     alert   ("Datos incorrectos, intente de nuevo");

// }
// }


// function logeo () {
//     if(form.user.value=="pedro"){
//         if(form.password.value=="1234"){
//             location="principal.html";
//         } else {
//             alert("Contraseña invalida");
//         }
//     } else {
//         alert("Usuario invalido")
//     }
// }