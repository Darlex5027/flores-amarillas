
function cuadrilatero(ctx, grosor, alto, largo, x, y) {
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - (alto * grosor));
    ctx.lineTo(x + (largo * grosor), y - (alto * grosor));
    ctx.lineTo(x + (largo * grosor), y);

}

function letra(letra, ctx, grosor, x, y) {
    switch (letra) {
        case '3':
            ctx.beginPath();
            x -= (3 * grosor);
            y -= .25 * grosor;
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (.5 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (4 * grosor));
            cuadrilatero(ctx, grosor, .5, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, .5, 3, x + (1 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (3 * grosor));
            ctx.fill();
            console.log(letra);
            break;
        case '<':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 1, x + grosor, y - (3 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (4 * grosor));

            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (5 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y - (6 * grosor));

            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (2 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y);
            ctx.fill();
            break;
        case ',':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 2, x - (1 * grosor), y + (1 * grosor));
            ctx.fill();
            console.log(letra);
            break;
        case '.':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 1, x, y);
            ctx.fill();
            console.log(letra);
            break;
        case '_':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 6, x, y);
            ctx.fill();
            console.log(letra);
            break;
        case 'a':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 6, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 6, 1, x + (4 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (3 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'á':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 6, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 6, 1, x + (4 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (3 * grosor));
            ctx.fill();

            ctx.beginPath();

            y -= grosor * 7.5;
            x += grosor * 2;
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 1, x += grosor * 1, y -= grosor);
            //cuadrilatero(ctx, grosor, 1, 2, x - (1 * grosor), y + (1 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'b':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (4 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (3 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y);
            ctx.fill();
            console.log(letra);

            break;
        case 'c':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 5, 1, x, y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y - (5 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y);
            ctx.fill();
            console.log(letra);

            break;
        case 'd':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 5, 1, x + (4 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y);
            ctx.fill();
            console.log(letra);

            break;
        case 'e':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 3, x, y - (3 * grosor));
            ctx.fill();
            console.log(letra);

            break;

        case 'é':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 3, x, y - (3 * grosor));
            ctx.fill();
            console.log(letra);

            y -= grosor * 7.5;
            x += grosor * 2;
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 1, x += grosor * 1, y -= grosor);
            //cuadrilatero(ctx, grosor, 1, 2, x - (1 * grosor), y + (1 * grosor));
            ctx.fill();
            console.log(letra);
            break;
        case 'f':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x, y - (3 * grosor));
            ctx.fill();
            console.log(letra);
            break;
        case 'g':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 5, 1, x, y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (2 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y - (5 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'h':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 7, 1, x + (4 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 5, x, y - (3 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'i':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x + (2 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 3, x + (grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (grosor), y);
            ctx.fill();
            console.log(letra);

            break;
        case 'í':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x + (2 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 3, x + (grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 3, x + (grosor), y);
            ctx.fill();
            console.log(letra);

            ctx.beginPath();
            y -= grosor * 7.5;
            x += grosor * 2;
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 1, x += grosor * 1, y -= grosor);
            //cuadrilatero(ctx, grosor, 1, 2, x - (1 * grosor), y + (1 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'j':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 1, x, y - grosor);
            cuadrilatero(ctx, grosor, 1, 2, x + grosor, y);
            cuadrilatero(ctx, grosor, 6, 1, x + (3 * grosor), y - grosor);
            cuadrilatero(ctx, grosor, 1, 3, x + (2 * grosor), y - (6 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'k':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 1, x + grosor, y - (3 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (4 * grosor));

            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (5 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y - (6 * grosor));

            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (2 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y);
            ctx.fill();
            console.log(letra);

            break;
        case 'l':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 5, x, y);
            ctx.fill()
            console.log(letra);

            break;
        case 'm':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 7, 1, x + (4 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 1, x + grosor, y - (5 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (5 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (2 * grosor), y - (3 * grosor));
            ctx.fill()
            console.log(letra);

            break;
        case 'n':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 7, 1, x + (4 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 1, x + (1 * grosor), y - (4 * grosor))
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (3 * grosor))
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (2 * grosor))
            ctx.fill()
            console.log(letra);

            break;
        case 'ñ':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 4, 1, x + (4 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 1, x + (1 * grosor), y - (4 * grosor))
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (3 * grosor))
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (2 * grosor))
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (5 * grosor))
            cuadrilatero(ctx, grosor, 1, 2, x + (2 * grosor), y - (6 * grosor))
            ctx.fill()
            console.log(letra);

            break;
        case 'o':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 5, 1, x, y - (1 * grosor))
            cuadrilatero(ctx, grosor, 5, 1, x + (4 * grosor), y - (1 * grosor))
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor))
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (0 * grosor))
            ctx.fill()
            console.log(letra);

            break;

        case 'ó':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 5, 1, x, y - (1 * grosor))
            cuadrilatero(ctx, grosor, 5, 1, x + (4 * grosor), y - (1 * grosor))
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor))
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (0 * grosor))
            ctx.fill()
            console.log(letra);


            ctx.beginPath();

            y -= grosor * 7.5;
            x += grosor * 2;
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 1, x += grosor * 1, y -= grosor);
            //cuadrilatero(ctx, grosor, 1, 2, x - (1 * grosor), y + (1 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'p':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor))
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (3 * grosor))
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (4 * grosor))
            ctx.fill()
            console.log(letra);

            break;
        case 'q':
            cuadrilatero(ctx, grosor, 5, 1, x, y - (1 * grosor))
            cuadrilatero(ctx, grosor, 4, 1, x + (4 * grosor), y - (2 * grosor))
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor))
            cuadrilatero(ctx, grosor, 1, 2, x + (1 * grosor), y - (0 * grosor))
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (2 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y);
            ctx.fill()
            console.log(letra);

            break;
        case 'r':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (6 * grosor))
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (3 * grosor))
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (4 * grosor))
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (2 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y);

            ctx.fill()
            console.log(letra);

            break;
        case 's':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 4, x + (1 * grosor), y - (6 * grosor))
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (3 * grosor))
            cuadrilatero(ctx, grosor, 1, 4, x + (0 * grosor), y - (0 * grosor))
            cuadrilatero(ctx, grosor, 2, 1, x + (0 * grosor), y - (4 * grosor))
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (1 * grosor))
            ctx.fill()
            console.log(letra);

            break;
        case 't':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 7, 1, x + (2 * grosor), y);
            cuadrilatero(ctx, grosor, 1, 5, x + (0 * grosor), y - (6 * grosor));

            ctx.fill()
            console.log(letra);

            break;
        case 'u':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 6, 1, x, y - (1 * grosor))
            cuadrilatero(ctx, grosor, 6, 1, x + (4 * grosor), y - (1 * grosor))
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (0 * grosor))
            ctx.fill()
            console.log(letra);

            break;
        case 'ú':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 6, 1, x, y - (1 * grosor))
            cuadrilatero(ctx, grosor, 6, 1, x + (4 * grosor), y - (1 * grosor))
            cuadrilatero(ctx, grosor, 1, 3, x + (1 * grosor), y - (0 * grosor))
            ctx.fill()
            console.log(letra);



            ctx.beginPath();
            y -= grosor * 7.5;
            x += grosor * 2;
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 1, x, y);
            cuadrilatero(ctx, grosor, 1, 1, x += grosor * 1, y -= grosor);
            //cuadrilatero(ctx, grosor, 1, 2, x - (1 * grosor), y + (1 * grosor));
            ctx.fill();
            console.log(letra);

            break;
        case 'v':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 4, 1, x, y - (3 * grosor));
            cuadrilatero(ctx, grosor, 4, 1, x + (4 * grosor), y - (3 * grosor));
            y += 3 * grosor;
            cuadrilatero(ctx, grosor, 2, 1, x + grosor, y - (4 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (3 * grosor), y - (4 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (3 * grosor));
            ctx.fill()
            console.log(letra);

            break;
        case 'w':
            ctx.beginPath();
            ctx.moveTo(x, y);

            cuadrilatero(ctx, grosor, 6, 1, x + (0 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 3, 1, x + (2 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (1 * grosor), y - (0 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (0 * grosor));
            cuadrilatero(ctx, grosor, 6, 1, x + (4 * grosor), y - (1 * grosor));
            ctx.fill()
            console.log(letra);

            break;
        case 'x':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 2, 1, x + (0 * grosor), y - (5 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (0 * grosor), y - (0 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (5 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (0 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (1 * grosor), y - (2 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (2 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (1 * grosor), y - (4 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (4 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (3 * grosor));
            ctx.fill()
            console.log(letra);

            break;
        case 'y':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 2, 1, x + (0 * grosor), y - (5 * grosor));
            cuadrilatero(ctx, grosor, 2, 1, x + (4 * grosor), y - (5 * grosor));
            cuadrilatero(ctx, grosor, 4, 1, x + (2 * grosor), y - (0 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (1 * grosor), y - (4 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (4 * grosor));
            ctx.fill()
            console.log(letra);

            break;
        case 'z':
            ctx.beginPath();
            ctx.moveTo(x, y);
            cuadrilatero(ctx, grosor, 1, 5, x + (0 * grosor), y - (6 * grosor));
            cuadrilatero(ctx, grosor, 1, 5, x + (0 * grosor), y - (0 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (0 * grosor), y - (1 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (1 * grosor), y - (2 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (2 * grosor), y - (3 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (3 * grosor), y - (4 * grosor));
            cuadrilatero(ctx, grosor, 1, 1, x + (4 * grosor), y - (5 * grosor));
            ctx.fill()
            console.log(letra);

            break;


        default:
            console.log(letra + "no disponible");
            break;
    }
}

function write(texto, ctx, grosor, x, y) {

    const cadena = texto;
    let array = cadena.toLowerCase().split("");
    array.forEach(element => {
        letra(element, ctx, grosor, x, y);
        x += grosor * 6;
    });
}