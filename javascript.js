function calcularTotal(){
    let cant = document.getElementById('cantidad').value;
    var cat = document.getElementById('categoria').value;
    let final = calcularDescuento(cant, cat);
    document.getElementById('precioFinal').innerText = final;
    
};


function calcularDescuento(a, b){
    if (b === '1'){ //Estudiante descuenta 80% / 200
        return a*(200-(200*0.8));
    }
    if (b === '2'){ //Trainee descuenta 50% / 200
        return a*(200-(200*0.5));
    }
    if (b === '3'){ //Jr descuenta 15% / 200
        return a*(200-(200*0.15));
    }
};


function borrar(){
    document.getElementById('cantidad').value = '';
    document.getElementById('precioFinal').innerText = 0;
}; 
