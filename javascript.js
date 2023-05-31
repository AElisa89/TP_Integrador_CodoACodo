function calcularTotal(){
    let cant = document.getElementById('cantidad').value; // capturo input Cantidad
    var cat = document.getElementById('categoria').value; // capturo Categoria 
    let final = calcularDescuento(cant, cat); // llamo a Fn calcularDescuento y le paso los valores
    document.getElementById('precioFinal').innerText = final;  // muestro final con descuento aplicado
    
};


function calcularDescuento(a, b){
    if (b === '1'){ // 1- Estudiante descuenta 80%
        return a*(200-(200*0.8)); 
    }
    if (b === '2'){ // 2- Trainee descuenta 50%
        return a*(200-(200*0.5));
    }
    if (b === '3'){ // 3- Jr descuenta 15%
        return a*(200-(200*0.15));
    }
};


function borrar(){
    document.getElementById('cantidad').value = '';
    document.getElementById('precioFinal').innerText = 0;
}; 
