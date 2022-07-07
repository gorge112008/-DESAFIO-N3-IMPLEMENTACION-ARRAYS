//ALGORITMO DE SIMULACIÓN DE VENTAS DE COMIDA RÁPIDA:
alert ("**************BIENVENIDO A DELIPASO****************"    +"\n"+"\n"+
        "Come todo lo que te puedas imaginar a un solo clic!!!" +"\n"+"\n"+
        "*********************************************************."     );
//DEFINIENDO VARIABLES:
let todototal=0;   let msjfinal="Su pedido es:";   let detalle=""; let detalle2="";   let contador=0;  let contamenu=0;  let tiempo=0;
const menu=[];     let ini=0; let menus=""; const casos=[];
//ESTABLECIENDO FUNCIÓN CONSTRUCTORA:
function Menu(Nombre, Stock, Costo, Descripción, Total) {
    this.Nombre=Nombre; this.Stock=Stock; this.Costo= Costo; this.Descripción=Descripción; this.total=Total;
    //MÉTODO QUE REALIZA EL PEDIDO DEL MENÚ SELECCIONADO:
    this.pedido = () => {
        this.cantidad=parseInt(prompt(  "El pedido: "+this.Nombre+" cuesta S/."+this.Costo+" la unidad.\n"+
                                        "¿Qué cantidad desea pedir? \nPor favor ingrese un número"      ));
        return this.cantidad;
    }
    //MÉTODO QUE ACTUALIZA LAS PROPIEDADES DE CADA OBJETO:
    this.actualizar = () => {
        console.log(    "Se ha pedido " + this.cantidad + " " + this.Nombre    );
        this.Stock  =   this.Stock -   this.cantidad             ; //ACTUALIZANDO STOCK DEL OBJETO SELECCIONADO.           
        this.total  =   this.total +   this.cantidad             ; //ACTUALIZANDO CANTIDAD DE PEDIDOS DEL OBJETO.
        todototal   =   todototal  +   (this.Costo*this.cantidad); //ACTUALIZANDO MONTO TOTAL DE COMPRA.
        alert(  "Ha pedido "+ this.cantidad +" "+   this.Nombre +   "\n"        +
                "Queda "    + this.Stock    +" "+   this.Nombre +   " en Stock");
    }
    //MÉTODO QUE INDICA LA DISPONIBILIDAD DE CADA MENÚ:
    this.disponible = () => {
        console.log(    "*"+this.Nombre+":\n"+"--> "+ this.Stock+" unidades disponibles."               );
    }
    //MÉTODO QUE INDICA QUE LA CANTIDAD INGRESADA NO ESTA DISPONIBLE Y PERMITE UN NUEVO REINGRESO:
    this.comparar= () => {
        this.cantidad=parseInt(prompt(  "Disculpe, solo hay disponible "+this.Stock+" "+this.Nombre+".\n"+
                                        "Por favor, elija otra cantidad."));
        return this.cantidad;
    }
    //MÉTODO PARA INDICAR QUE SE HA CANCELADO LA OPERACIÓN Y SE DEVOLVERA AL MENÚ.
    this.cancelar = () => {
        alert(  "Se ha cancelado o no se ha indicado ninguna cantidad válida.\nSe le devolverá al menú" );
    }
    //MÉTODO PARA CALCULAR LA DEMORA DE CADA PEDIDO EN BASE A LA CANTIDAD PEDIDA.
    this.demora = () => {
        this.tiempo=this.cantidad*2;
        return this.tiempo;
    }
    //MÉTODO PARA INDICAR QUE SE HA TERMINADO EL STOCK Y SE ELIJA OTRA OPCIÓN.
    this.agotado= () => {
        alert(  "Disculpe, no queda más "+this.Nombre+", por favor elija otra opción del menú."         );
    }
    //MÉTODO PARA IMPRIMIR EL DETALLE DE UN MENÚ Y REINICIAR VARIABLES.
    this.reinicio= () => { 
        contador =     0;   //INICIALIZA VARIABLE CONTADOR 
    }    
}

//CONSTRUYENDO EL MENÚ EN BASE A LA FUNCIÓN CONSTRUCTORA Y AGREGANDOLOS AL ARRAY MENU:
menu.push(M1= new Menu( "Hamburguesa de Carne", 10, 8, "Hamburguesa 100% hecha de res a la parrilla, jugosos tomates, "       +
                        "frescas lechugas, mayonesa, ketchup, pepinillos y cebolla blanca. ",0          ));

menu.push(M2= new Menu( "Hamburguesa de Pollo", 12, 5, "Hamburguesa elaborada con las mejores pechugas blancas de pollo, "    +
                        "ligeramente sazonada con una combinación de lechuga y cremosa mayonesa. ",0    ));

menu.push(M3= new Menu( "Sandwich de Carne", 15, 4, "Sandwich preparado con la mejor calidad de filete de res sazonado y "    +
                        "cocinado a la perfección; acompañado de frescas lechugas, mayonesa y ketchup al gusto. ",0));

menu.push(M4= new Menu( "Sandwich de Pollo ", 15, 3, "Sandwich preparado con deliciosa pechuga de pollo fresca, "             +
                        "rica lechuga, mayonesa y ketchup al gusto. ", 0                                ));

menu.push(M5= new Menu( "Twister Tradicional de Pollo", 5, 16, "Delicioso Snack tostado con tiras de pollo envuelto junto a " +
                        "lechugas frescas,tomate y pepinillo en rodajas, con su mayonesa y ketchup. ",0 ));

menu.push(M6= new Menu( "Combo Alitas bbq picante", 5, 20, "Consta de 12 alitas bañadas en nuestra salsa secreta BBQ picante,"+
                        "acompañado de  una porción de papas fritas, ensalada y cremas al gusto. ",0    ));

menu.push(M7= new Menu( "Salchipapa", 15, 6, " Rodajas fritas de salchicha y papas fritas cortadas a la perfección "          +
                        "bañadas en deliciosa mayonesa y ketchup al gusto. ",0                          ));

menu.push(M8= new Menu( "Pollo Broster", 10, 10, "Pechuga de pollo tierno enharinado, rebozado y frito, "                     +
                        "acompañado de  una porción de papas fritas, ensalada y cremas al gusto. ",0    ));
/********************************************************************************************************************************** */
//!IMPORTANTE DESCOMENTAR! PRUEBE AGREGAR O ELIMINAR MENÚS, SE AUTOCONFIGURA. :9 !IMPORTANTE DESCOMENTAR! 

    //menu.shift();menu.shift();menu.pop();menu.pop();  //CASO DE PRUEBA ELIMANDO LOS 2 PRIMEROS Y 2 ULTIMOS MENÚS.

    //menu.splice(0,2);menu.splice(4,2);                //MISMO CASO DE PRUEBA CON EL METODO .SPLICE.

    //menu.reverse();                                   //INVIRTIENDO MENÚS CON EL MÉTODO .REVERSE();

//!IMPORTANTE DESCOMENTAR! PRUEBE AGREGAR O ELIMINAR MENÚS, SE AUTOCONFIGURA. :9 !IMPORTANTE DESCOMENTAR! 
/********************************************************************************************************************************* */

//CONFIGURANDO VARIABLE MENÚS PARA QUE INDIQUE LOS MENÚS DISPONIBLES:
for (let i = 1; i < menu.length+1; i++) { 
    menus=menus+i+"-"+menu[i-1].Nombre+"\n";
}

//CONFIGURANDO ARREGLO CASOS PARA DETERMINAR LA CANTIDAD DE CASOS POR MENÚS DISPONIBLES.
for (let i = 1; i < menu.length+1; i++) { 
    casos[i]=i.toString();
}

//SOLICITANDO DATOS PARA INICIAR EL PEDIDO:
let ingreso = prompt(   "Buen día, selecciona la opción del menú que desea pedir:       \n"+   
                         menus   +   "0-Ninguna, Salir                                   \n"+
                        "***************************************************************\n"+
                        "Si desea ver la carta detallada ingrese el "+(menu.length+1)+"." );

//FUNCIÓN QUE CONSTRUYE PARTE DEL MENSAJE FINAL QUE SE IMPRIMIRÁ AL COMPLETAR EL PEDIDO.
function final(menu) {
    if (menu.total==0) {  
        msjfinal=msjfinal;
        return msjfinal;
    } else {
        msjfinal=msjfinal+"\n"+"*"+ menu.Nombre+"= "+menu.total+" unidad(es).";
        return msjfinal;
    }
}

//INICIANDO BUCLE MEDIANTE CONDICIONAL WHILE:     
while (ingreso!= "0" && ingreso!=null)  {

    //INDICANDO EL STOCK MEDIANTE CONSOLA PERIODICAMENTE EN CADA CICLO:
    console.log(    "************Stock DELIPASO**********\n"+"Menú disponible:"     );
    for (let i = 0; i < menu.length; i++) { menu[i].disponible(); }
                    
//APLICANDO ESTRUCTURA SWITCH:
switch (ingreso) {
    //INGRESANDO AL CASO 1,2,3,4 SI LA OPCIÓN ELEGIDA ES 1,2,3,4:
    case casos[ingreso]:
        //MIENTRAS EXISTA STOCK DEL MENU SE INGRESA A LA CONDICIÓN IF.
        ini=ingreso-1;  //DECLARANDO NUEVA VARIABLE PORQUE LOS ARRAY COMIENZAN DESDE EL VALOR 0 Y NUESTRO INGRESO EN VALOR 1. 
        if (menu[ini].Stock!=0) {
            menu[ini].cantidad=menu[ini].pedido();    //SE LLAMA AL MÉTODO PEDIDO PARA OBTENER LA CANTIDAD DEL PEDIDO.
            //SI LA CANTIDAD PEDIDA EXCEDE AL STOCK SE INGRESA A UN BUCLE PARA PEDIR OTRA CANTIDAD.
            while (menu[ini].cantidad > menu[ini].Stock)    {
                menu[ini].cantidad=menu[ini].comparar();  //SE LLAMA AL MÉTODO COMPARAR PARA OBTENER UNA NUEVA CANTIDAD DE PEDIDO.
            }
            //EVALUANDO LA CANTIDAD INGRESADA MEDIANTE CONDICIONALES IF ELSE:
            if(menu[ini].cantidad == "" || menu[ini].cantidad == "0" || isNaN (menu[ini].cantidad))  {
                menu[ini].cancelar()  ;    //SI LA CANTIDAD NO ES CORRECTA, SE LLAMA AL MÉTODO CANCELAR Y DEVUELVE AL MENÚ.
                break;
            }   else    {
                menu[ini].actualizar();    //SI LA CANTIDAD ES CORRECTA, SE LLAMA AL MÉTODO ACTUALIZAR Y DEVUELVE AL MENÚ.
                    if (("tiempo" in menu[ini])==false) { //EVALUANDO SI LA PROPIEDAD TIEMPO EXISTE CON LA ESTRUCTURA IN.
                        menu[ini].tiempo = 0          ;   //CREANDO LA PROPIEDAD TIEMPO DENTRO DEL OBJETO.
                    }
                    menu[ini].demora()    ;    //SE LLAMA AL MÉTODO DEMORA PARA OBTENER LA DEMORA DEL PEDIDO.
                    tiempo = tiempo + menu[ini].tiempo;   //CALCULANDO TIEMPO TOTAL DE DEMORA DEL PEDIDO.
                break;
            } 
        }
        menu[ini].agotado();                  //SI NO EXISTE STOCK DEL MENÚ SE LLAMA AL MÉTODO AGOTADO Y DEVUELVE AL MENÚ.
    break;
    //INGRESANDO AL CASO DETALLE SI LA OPCIÓN ELEGIDA ES LA DE DETALLE DEL MENÚ:
    case (menu.length+1).toString():
        for (const lista of menu) {     //RECORRIENDO ARRAY MENU MEDIANTE LA ESTRUCTURA FOR OF.
            if (contamenu>3) {
                contamenu++;
                detalle2 = detalle2 + "Menú " + contamenu + ": ------------>  ";       //ENUMERANDO MENÚS POR ORDEN.
                for (const info in lista) { //RECORRIENDO OBJETOS DENTRO DEL ARRAY MENU MEDIANTE LA ESTRUCTURA FOR IN.
                    if (contador==4) {      //ESTABLECIENDO EL LÍMITE DE PROPIEDADES QUE SE DESEA MOSTRAR.
                        detalle2 = detalle2 + "*************************************************************************\n";
                        break;
                    } else {
                        detalle2 = detalle2 + "*" + info + ": " + lista[info] + "\n";  //CONSTRUYENDO DETALLES DEL MENÚ.
                        contador++;
                    }
                }
                contador = 0; //REINICIANDO CONTADOR DE LÍMITE DE PROPIEDADES.    
            }else {
            contamenu++;
            detalle = detalle + "Menú " + contamenu + ": ------------>  ";       //ENUMERANDO MENÚS POR ORDEN.
            for (const info in lista) { //RECORRIENDO OBJETOS DENTRO DEL ARRAY MENU MEDIANTE LA ESTRUCTURA FOR IN.
                if (contador==4) {      //ESTABLECIENDO EL LÍMITE DE PROPIEDADES QUE SE DESEA MOSTRAR.
                    detalle = detalle + "*************************************************************************\n";
                    break;
                } else {
                    detalle = detalle + "*" + info + ": " + lista[info] + "\n";  //CONSTRUYENDO DETALLES DEL MENÚ.
                    contador++;
                }
            }
            contador = 0; //REINICIANDO CONTADOR DE LÍMITE DE PROPIEDADES.
            }
        }
        contamenu = 0;    //REINICIANDO CONTADOR DE MENÚS.
        alert(detalle);   //IMPRIMIENDO POR ALERTA CARTA DETALLADA.
        if (detalle2!="") {alert(detalle2); }  //IMPRIMIENDO POR ALERTA CARTA DETALLADA2 SÓLO SI LA CARTA ES MUY GRANDE.
        detalle = "";     //REINICIANDO VARIABLE PARA MOSTRAR CARTA DETALLADA.
        detalle2 = "";     //REINICIANDO VARIABLE PARA MOSTRAR CARTA DETALLADA2.
    break;
    //INGRESANDO AL CASO POR DEFECTO SI SE INGRESA UNA OPCIÓN NO VÁLIDA:    
    default:
        alert(  "Opción no válida"  );
    break;
    }   
    //SOLICITANDO DATOS PARA CONTINUAR CON EL BUCLE O SALIR DEL MISMO:
    ingreso = prompt(   "Buen día, selecciona la opción del menú que desea pedir:       \n"+   
                         menus   +   "0-Ninguna, Terminar Pedido.                       \n"+
                        "***************************************************************\n"+
                        "Si desea ver la carta detallada ingrese el "+(menu.length+1)+"." );
    //
    if (ingreso == "0") {
        break;
    }   else if (ingreso == null) {
                todototal=0;
            alert(  "Se ha cancelado el pedido"); //INDICANDO CANCELACIÓN DEL PEDIDO.
        break;
    }
}
//INDICANDO EL DESENLACE DEL PEDIDO MEDIANTE UNA CONDICIONAL IF ELSE:
if (todototal== "0") {
    alert ("Muchas Gracias por su visita, que tenga un buen día");                 //ALERTA EMITIDA AL CANCELAR EL PEDIDO.
}   else    {
    for (let i = 0; i < menu.length; i++) { msjfinal = final(menu[i]); }           //LLAMANDO FUNCIÓN FINAL PARA CONSTRUIR MENSAJE.
    alert ( msjfinal+"\n"+"El monto total de su pedido es de: S/."+ todototal   +   " Soles.        \n"+
            "Su pedido estará listo en un tiempo aproximado de "  + tiempo      +   " minutos       \n"+
            "Muchas Gracias por su compra, que tenga un buen día!!!"             );//ALERTA EMITIDA AL COMPLETAR CON ÉXITO EL PEDIDO.
}
