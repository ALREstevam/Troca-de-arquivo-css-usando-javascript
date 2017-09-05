

var cssCount = 1;
function changeStylesheet(prefix, linkId) {
    //Faz a variável cssCount variar entre 0 e 1 a cada vez que a função é chamada
    cssCount = (cssCount + 1) % 2;
    // troca o valor de href num elemento <link> com id = linkId entre <prefixo>< 1 | 2 >.css
    document.getElementById(linkId).href = prefix + (cssCount + 1) + '.css';
}