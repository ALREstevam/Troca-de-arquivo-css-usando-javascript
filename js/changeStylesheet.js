

var cssCount = 1;
function changeStylesheet(prefix, linkId) {
    //Faz a variável cssCount variar entre 0 e 1 a cada vez que a função é chamada
    cssCount = (cssCount + 1) % 2;
    // troca o valor de href num elemento <link> com id = linkId entre <prefixo>< 1 | 2 >.css
    document.getElementById(linkId).href = prefix + (cssCount + 1) + '.css';
}

var sheetList = [];
var currentSheet = 0;

function setSheetList(infoArr) {
    sheetList = infoArr;
}

function calcNextElem(total, current) {
    return (current + 1) % total;
}


function nextSheet(linkid) {
    if(sheetList.length > 0){
        currentSheet = calcNextElem(sheetList.length, currentSheet);
        document.getElementById(linkid).href = sheetList[currentSheet];
    }else{
        console.log('No stylesheet was set to make the swap.')
    }
}

