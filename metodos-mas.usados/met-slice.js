// < ?========= METODO slice =========>

    let array = [1, 2, 3, 4, 5];

    let subArray1 = array.slice(0,-1 );
    console.log(subArray1); //[1, 2, 3, 4] borra lo numero de adelante.
    
    let subArray2 = array.slice(0,-2 );
    console.log(subArray2); //[1, 2, 3,] borra lo numero de adelante.
    
    let subArray3 = array.slice(1 );
    console.log(subArray3); //[ 2, 3, 4, 5] borra lo numero del comienzo.
    
    let subArray4 = array.slice(2 );
    console.log(subArray4); //[ 3, 4, 5] borra lo numero del comienzo.
    
    let subArray5 = array.slice(1,-1 );
    console.log(subArray5); //[ 2, 3, 4] borra los primero numero de adelante y atras.
    
    // con string
    
    let string = "Hello, world!";
    
    let subString1 = string.slice(0,-1);
    console.log(subString1); // Hello, world   borra las letra de adelante.
    
    let subString2 = string.slice(0,-2);
    console.log(subString2); // Hello, worl    borra las letra de adelante.
    
    let subString3 = string.slice(1);
    console.log(subString3); // ello, world!   borra las letra del comienzo.
    
    let subString4 = string.slice(2);
    console.log(subString4); // llo, world!    borra las letra del comienzo.
    
    let subString5 = string.slice(1,-1 );
    console.log(subString5); // ello, worl    borra las letra del comienzo.
    