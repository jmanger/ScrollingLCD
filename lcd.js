//Message array

var characters = {
A: 17063617599,
B: 34245600438,
C: 16780386466,
D: 34228691134,
E: 34245600457,
F: 34243486792,
G: 16780518542,
H: 34108212351,
I: 17586708673,
J: 19197321280,
K: 34108412225,
L: 34093416577,
M: 34227609727,
N: 34158675071,
O: 16780386494,
P: 34243486768,
Q: 16780452286,
R: 34243552561,
S: 13307634886,
T: 17316175936,
U: 33824981246,
V: 33290207612,
W: 33827029246,
X: 26617186915,
Y: 30081795184,
Z: 18131085537,
exc: 125,
ques: 30200259704,
" ": 0,
".": 1,
}
//var message = [D,A,N,G,E,R,exc,exc,exc,B,C,F,H,I,J,ques,K,L,M,O,P,stp,stp,stp,Q,S,T,U,V,W,X,Y,Z];

var message = "dangerlol.";


$(document).ready(function(){

    $(".wrapper").lcd(message,true);


$(".submit-button").click(function(){
var string = $(".text-input").val();
$(".wrapper").empty();
$(".wrapper").lcd(string,true);

});


});

$.fn.lcd = function(message,loop){

    var dis = $(this);
    console.log($(this));
    var screenLength = dis.data("screen-length");

    for (i=0;i<=screenLength;i++){

        dis.append("<div class=\"letter-height\"></div>");

    }

    for (c=0;c<=6;c++){

        $(".letter-height").append("<div class=\"display-element\"></div>");

    }

    $(".display-element").on("click", function(){

        $(this).toggleClass("active");

    });
    init(message);

function init(message){
    message= message.toUpperCase();
    var messagearray = [];
    for (i=0;i<message.length;i++){
        var ch = message.charAt(i);
       messagearray.push(ch);
       console.log(ch);
    };
    console.log(messagearray);
    p = 0;
    var dem = $(".display-element");
    for (o=0;o<messagearray.length;o++){


            var currentCharacter = characters[messagearray[o]];

            console.log(currentCharacter);

            var currentCharacter = currentCharacter.toString(2);

              if (currentCharacter.length==34){
                currentCharacter = "0"+currentCharacter;
            }

            console.log(currentCharacter);


        for (i=0;i<currentCharacter.length;i++){

            if (currentCharacter.charAt(i)==1){

                $this = dem.eq(p).addClass("active");
                p++;
            }
            else if (currentCharacter.charAt(i)==0){
            p++;
            }
            if(i==(currentCharacter.length-1)){

                 for (spl=0;spl<characters[" "].length;spl++){

                     p++;


                 }
            }

        }

    }

}
if(loop){
    window.setInterval(function(){Loop()},100);
}
function Loop(){

    var element = $(".letter-height").eq(0).detach();

    $(".wrapper").append(element);

}

}






// D 1111111 1000001 1000001 1000001 0111110

// SPACE 0000000

// A 0111111 1001000 1001000 1001000 0111111

// N 1111111 0100000 0010000 0001000 1111111

// G 0111110 1000001 1001001 1001001 0001110

// E 1111111 1001001 1001001 1001001 1001001

// R 1111111 1001000 1001100 1001010 0110001

// ! 1111101

// T 1000000 1000000 1111111 1000000 1000000";

// B 1111111 1001001 1001001 1001001 0110110