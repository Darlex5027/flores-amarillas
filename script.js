document.body.style.zoom = "100%";



var colores = {

    negro: "#000000",
    amarillo:"#FFD800",
    rosaClaro:"#FDBDBD",
    rosaOscuro:"#FD00BD",
    verdeClaro:"#00B730",
    verdeOscuro:"#036C18",
    azul:"#A7CDFE",
    blanco:"#FFFFFF",
    fondo:"#A7CDFE"
  };

const dibujo = [
    [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
    [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.blanco,colores.blanco,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
    [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.blanco,colores.rosaClaro,colores.rosaClaro,colores.blanco,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
    [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.blanco,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.blanco,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
    [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
    [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.blanco,colores.blanco,colores.blanco,colores.blanco,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.negro,colores.blanco,colores.bla,colores.blanco,colores.blanco,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
    [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.blanco,colores.verdeClaro,colores.verdeClaro,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.verdeClaro,colores.verdeClaro,colores.blanco,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
[colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.verdeClaro,colores.verdeClaro,colores.verdeClaro,colores.negro,colores.amarillo,colores.amarillo,colores.amarillo,colores.amarillo,colores.amarillo,colores.amarillo,colores.negro,colores.verdeClaro,colores.verdeClaro,colores.verdeClaro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
    [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.negro,colores.negro,colores.verdeOscuro,colores.verdeClaro,colores.verdeClaro,colores.negro,colores.amarillo,colores.amarillo,colores.amarillo,colores.amarillo,colores.negro,colores.verdeClaro,colores.verdeClaro,colores.verdeOscuro,colores.negro,colores.negro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
    [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.blanco,colores.blanco,colores.blanco,colores.negro,colores.verdeOscuro,colores.verdeOscuro,colores.verdeClaro,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.verdeClaro,colores.verdeOscuro,colores.verdeOscuro,colores.negro,colores.blanco,colores.blanco,colores.blanco,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
    [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.negro,colores.negro,colores.verdeOscuro,colores.verdeOscuro,colores.verdeOscuro,colores.negro,colores.negro,colores.verdeOscuro,colores.verdeOscuro,colores.verdeOscuro,colores.negro,colores.negro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
[colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.verdeOscuro,colores.negro,colores.verdeOscuro,colores.verdeOscuro,colores.negro,colores.verdeOscuro,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.rosaClaro,colores.rosaOscuro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
[colores.negro,colores.negro,colores.negro,colores.negro,colores.verdeClaro,colores.negro,colores.rosaOscuro,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.verdeOscuro,colores.negro,colores.verdeOscuro,colores.verdeOscuro,colores.negro,colores.verdeOscuro,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.rosaOscuro,colores.negro,colores.verdeOscuro,colores.negro,colores.negro,colores.negro,colores.negro],
                [colores.negro,colores.blanco,colores.blanco,colores.blanco,colores.verdeClaro,colores.negro,colores.negro,colores.amarillo,colores.negro,colores.negro,colores.amarillo,colores.negro,colores.negro,colores.verdeOscuro,colores.verdeOscuro,colores.negro,colores.negro,colores.amarillo,colores.negro,colores.negro,colores.amarillo,colores.negro,colores.negro,colores.verdeClaro,colores.blanco,colores.blanco,colores.blanco,colores.negro],
                [colores.negro,colores.verdeClaro,colores.verdeClaro,colores.verdeClaro,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.verdeClaro,colores.verdeClaro,colores.verdeClaro,colores.negro],
                [colores.negro,colores.verdeOscuro,colores.verdeOscuro,colores.verdeClaro,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.amarillo,colores.amarillo,colores.negro,colores.verdeClaro,colores.verdeOscuro,colores.verdeOscuro,colores.negro],
                [colores.fondo,colores.negro,colores.verdeOscuro,colores.verdeOscuro,colores.verdeOscuro,colores.negro,colores.negro,colores.amarillo,colores.negro,colores.negro,colores.amarillo,colores.negro,colores.negro,colores.verdeOscuro,colores.verdeOscuro,colores.negro,colores.negro,colores.amarillo,colores.negro,colores.negro,colores.amarillo,colores.negro,colores.negro,colores.verdeOscuro,colores.verdeOscuro,colores.verdeOscuro,colores.negro,colores.fondo],
                [colores.fondo,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.amarillo,colores.amarillo,colores.amarillo,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.amarillo,colores.amarillo,colores.amarillo,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.fondo],
                [colores.fondo,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.fondo],
                [colores.fondo,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.rosaOscuro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.rosaOscuro,colores.negro,colores.negro,colores.fondo],
                [colores.fondo,colores.fondo,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.rosaOscuro,colores.negro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.rosaOscuro,colores.negro,colores.negro,colores.fondo,colores.fondo],
                [colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaOscuro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo],
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaOscuro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo],                
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaOscuro,colores.negro,colores.rosaClaro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],                
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaOscuro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.rosaClaro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaClaro,colores.rosaOscuro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.rosaOscuro,colores.rosaClaro,colores.rosaClaro,colores.rosaOscuro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.negro,colores.negro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.rosaOscuro,colores.negro,colores.negro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo],
                [colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.negro,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo,colores.fondo]];


function dibujarPixel(ctx, grosor, alto, largo, x, y,color) {
        ctx.fillStyle = color; //color del zorro
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        
        ctx.lineTo(x, y - (alto * grosor));
        ctx.lineTo(x + (largo * grosor), y - (alto * grosor));
        ctx.lineTo(x + (largo * grosor), y);
        ctx.fill();
    
    
}
//28px ancho 35px alto
function imprimirMatriz(){
    const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');
    const canvas2 = document.getElementById('miCanvas2');
    const ctx2 = canvas2.getContext('2d');
    ctx2.fillStyle= "#000000"
    write("Para la niña más hermosa", ctx2, 5, 50, 100,)
    write("que cualquier ser", ctx2, 5, 50, 200,)
    write("podrá conocer jamás,", ctx2, 5, 50, 300,)
    write("                         Tu Oso.", ctx2, 5, 50, 400,)
    //Obtenemos el ancho del canvas
    ancho = canvas.clientWidth;
    //Calculamos el ancho de un pixel
    anchoCuadrado=ancho/dibujo[0].length;
    //Obtenemos el alto del canvas
    alto = canvas.clientHeight;
    //Calculamos el alto de un pixel
    altoCuadrado=alto/dibujo.length;

    console.log("ancho: "+dibujo[0].length)
    console.log("alto: "+dibujo.length)
    for (let y = 0; y < dibujo.length; y++) {
        for (let x= 0; x < dibujo[y].length; x++) {
            console.log("Pixel: "+"("+x+","+y+")")
            console.log(dibujo[y][x])
        }
    }
    for (let y = 0; y < dibujo.length; y++) {
        for (let x= 0; x < dibujo[y].length; x++) {
            console.log("Pixel: "+"("+x+","+y+")")
            console.log(dibujo[y][x])
            ctx.fillStyle = dibujo[y][x];//color; 
            
            ctx.beginPath();
            //posición 0,0
            a=x*anchoCuadrado;
            b=y*anchoCuadrado;
            //Traslada el puntero a la esquina inferior izquierda
            b=y*(anchoCuadrado)+anchoCuadrado;
            ctx.moveTo(a,b);
            console.log("Move to: "+a+","+b )
            //Traslada el puntero a la esquina inferior derecha
            a=(x+1)*anchoCuadrado;
            b=b;
            ctx.lineTo(a, b);
            console.log("Line: "+a+","+ b)
            //Traslada el puntero a la esquina superior derecha
            a=a;
            b=b-anchoCuadrado;
            ctx.lineTo(a,b);
            console.log("Line: "+a+","+ b)
            //Traslada el puntero a la esquina superior izquierda
            a=a-anchoCuadrado;
            b=b;
            ctx.lineTo(a, b);
            console.log("Line: "+a+","+ b)
            ctx.fill();
            
            //cuadrilatero(ctx,anchoCuadrado,1,1,x*anchoCuadrado, y*anchoCuadrado, dibujo[x][y])
        }
    }
    
}