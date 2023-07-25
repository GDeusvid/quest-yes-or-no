

var rowRandomNumber1=0;
var rowRandomNumber2=0;
var row1=0;
var row2=0;

var columnRandomNumber1=0;
var columnRandomNumber2=0;
var column1=0;
var column2=0;

function ordenarValores(rowRandomNumber1,rowRandomNumber2,columnRandomNumber1,columnRandomNumber2){
    if (rowRandomNumber1===rowRandomNumber2){
        rowRandomNumber2++
    }
    if (columnRandomNumber1===columnRandomNumber2){
        columnRandomNumber2++
    }

    if (rowRandomNumber1<=rowRandomNumber2){
        row1= rowRandomNumber1
        row2= rowRandomNumber2
    } else{
        row1= rowRandomNumber2
        row2= rowRandomNumber1
    }
    if (columnRandomNumber1<=columnRandomNumber2){
        column1= columnRandomNumber1
        column2= columnRandomNumber2
    } else{
        column1= columnRandomNumber2
        column2= columnRandomNumber1
    }
}

function posiAleat(){
    var rowRandomNumber1 = Math.floor(Math.random() * 5)+3;
    var rowRandomNumber2 = Math.floor(Math.random() * 5)+3;
    var columnRandomNumber1 = Math.floor(Math.random() * 12)+1;
    var columnRandomNumber2 = columnRandomNumber1+2;
    ordenarValores(rowRandomNumber1,rowRandomNumber2,columnRandomNumber1,columnRandomNumber2);

    if ((row1===4 && row2===7) || (row1===5 && row2===6) ){
        if (column1>=5 && column1<=8){
            column1++;
            column2++;
        }
    }
    console.log(row1)
    console.log(row2)
    console.log(column1)
    console.log(column2)
}



$(".container1").hide();
$(".container2").hide();
$(".container3").hide();


$(".inicio button").on("click", function(){
    var pergunta = new Audio("sounds/pergunta.mp3");
    pergunta.play();
    $("body").css("display","grid");
    $(".inicio").hide();
    $(".container1 h1").text("Namora comigo?");
    $(".container1").fadeIn();
    $(".container2").fadeIn();
    $(".container3").fadeIn();
});


$(document).on("mouseover",function(){
    console.log("teste");
});
$(".nao").on("mouseover",function(){
    posiAleat();
    $(".container3").css("grid-row",row1+"/"+row2);
    $(".container3").css("grid-column",column1+"/"+column2);
    var hojenao = new Audio("sounds/hojenao.mp3");
    hojenao.play();
});

$(".sim").on("click",function(){
    
    $(".sim").hide();
    $(".nao").hide();
    $("h1").text("I love u ❤️");
    $(".imagem img").css("display","flex");
    $(".imagem img").hide();
    $(".imagem img").fadeIn(1500);
    var hojenao = new Audio("sounds/brasil.mp3");
    hojenao.play();
});