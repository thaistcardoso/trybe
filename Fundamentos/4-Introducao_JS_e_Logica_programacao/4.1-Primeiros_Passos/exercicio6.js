// exercicio 6

const pecaXadrez = "rainha";

switch (pecaXadrez.toLowerCase()) {
    case ("peao"):
        console.log("uma casa para frente");
        break;
    case ("torre"):
        console.log("fileiras na vertical ou horizontal")
        break;
    case ("cavalo"):
        console.log("anda somente em 'L'");
        break;
    case ("bispo"):
        console.log("somente nas diagonais");
        break;
    case ("rainha"):
        console.log("pode andar em qualquer direção e quantas casas quiser");
        break;
    case ("rei"):
    console.log("pode andar em qualquer direção, mas apenas uma casa");
        break;
    default:
        console.log("Mão é uma peça válida")
}