// Exercicio 1
function insereText(){
    document.getElementsByTagName("p")[1].innerText = "Estar trabalhando na XP";
};
insereText();

//exercicio 2
function alteraMainToGreen(){
    document.getElementsByTagName("main")[0].style.backgroundColor = "rgb(76, 164, 109)";
}
alteraMainToGreen();

//exercicio 3
function alteraMidleToWhite(){
    document.getElementsByTagName("section")[0].style.backgroundColor = "white";
}
alteraMidleToWhite();

//exercicio 4
function alteraTitulo(){
    document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";
}
alteraTitulo();

//exercicio 5
function convertTextUpperCase(){
    const paragrafo = document.getElementsByTagName("p");
    for (let i = 0; i < paragrafo.length; i += 1) {
        paragrafo[i].innerText = paragrafo[i].innerText.toUpperCase();
    }
}
convertTextUpperCase();   
    // console.log(paragrafo[i].style.fontVariantCaps = 'all-small-caps');


//exercicio 6
function exibeElementosParagrafo(){
    const paragrafo = document.getElementsByTagName("p");
    for (let i = 0; i < paragrafo.length; i += 1) {
    console.log(document.getElementsByTagName("p")[i].innerHTML);
    }
}
exibeElementosParagrafo();