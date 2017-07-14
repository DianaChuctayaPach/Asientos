
function mostrar(asientos){
   var str = "";
   for (var i = 0; i < asientos.length; i++) {
      if (asientos[i] == undefined)   
         str += (i+1) + "[" + "] ";
      else   
         str += (i+1) + "[*] ";
   }
   return "|" + str + "|\n";
}  

function reserva () {
   var N = 10; // Número de asientos
   var asientos = [];
   for (var i = 0; i < N; i++) {
      asientos[i] = undefined;
   }
   var mensaje = "0: Salir\n" +
                 "1: Reservar  asiento\n" +
                 "2: Buscar asiento \n" + //liberar
                 "3: Seleccionar asiento \n";
   
   var option = 0;
   while (true){
      var str = mostrar(asientos) + mensaje + " >> ingrese opcion:" ;
      option = parseInt( prompt( str )  );
      if (option == 0) {
         break;
      }else if (option == 1) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro >= 0 && nro <= N) {
            var name =  prompt( "nombre del pasajero" )  ;
            var id = parseInt( prompt( "dni del pasajero"  ) );
            asientos[nro - 1] = {
               nombre : name,
               dni: id
            };
         }
      }else if (option == 2) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro >= 0 && nro <= N) {
            asientos[nro - 1] = undefined;
         }
       }else if (option == 3) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro >= 0 && nro <= N) {
            str = mostrar(asientos) +
                     "Nombre del pasajero: " + asientos [nro - 1].nombre + 
                     "DNI del pasajero: " + asientos [nro - 1].dni;
                
            alert (str);
         }
      }
      
   } 
   imprimir(asientos);
}

reserva();
