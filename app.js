/*<script>
        function Login(form){
        
                    if (form.u.value=="Mali"){
                if(form.c.value=="1234"){
                    location="cuentas.html";
                }else {
                    console.log("error de password");
                        }
                }else {
                    console.log("error de usuario");
            }
        }
    </script>
*/
function login(form){
    if (form.u.value=="Mali") {
        if (form.c.value="1234") {
            location="cuentas.html"
        } else {
            alert("error de password")
        }
    } else {
        alert("error de usuario")
    }                
}
function login(form){
    if (form.u.value=="Gera") {
        if (form.c.value="5678") {
            location="cuentas.html"
        } else {
            alert("error de password")
        }
    } else {
        alert("error de usuario")
    }                
}
function login(form){
    if (form.u.value=="Maui") {
        if (form.c.valuie="1234") {
            location="cuentas.html"
        } else {
            alert("error de password")
        }
    } else {
        alert("error de usuario")
    }                
}
function login(form){
    if (form.u.value=="Johana") {
        if (form.c.valuie="5678") {
            location="cuentas.html"
        } else {
            alert("error de password")
        }
    } else {
        alert("error de usuario")
    }                
}
function login(form){
    if (form.u.value=="Alex") {
        if (form.c.valuie="1234") {
            location="cuentas.html"
        } else {
            alert("error de password")
        }
    } else {
        alert("error de usuario")
    }                
}

function cuentasUsuario() {
    var cuenta = document.getElementById("cuenta"),
    saldoActual = document.getElementById("saldoActual");
    saldoActual.value = cuenta.value;
}


     function depositarDinero() {
         var deposito = parseInt(document.getElementsByName("deposito")[0].value);
             saldoActual.value = parseInt(saldoActual.value)+deposito;
           alert("Usted tiene un saldo nuevo de:" +saldoActual.value);
   }


   function retirarDinero() {

       var retiro = parseInt(document.getElementsByName("retirar")[0].value);
       saldoActual.value = parseInt(saldoActual.value)-retiro;
               if (retiro > parseInt(saldoActual.value)) {
              alert("Su saldo disponible es de:" +saldoActual.value)-retiro;
     } else {
       saldoActual.value = parseInt(saldoActual.value)-retiro;
     }
   }

   function verificarSaldo() {
         document.getElementsByName("verificar")[0].value = saldoActual.value;

   }