//Message array
var D = "11111111000001100000110000010111110";

var A = "01111111001000100100010010000111111";

var N = "11111110100000001000000010001111111";

var G = "01111101000001100100110010010001110";

var E = "11111111001001100100110010011001001";

var R = "11111111001000100110010010100110001";

var T = "10000001000000111111110000001000000";

var B = "11111111001001100100110010010110110";

var C = "01111101000001100000110000010100010";

var F = "11111111001000100100010010001001000";

var H = "11111110001000000100000010001111111";

var I = "10000011000001111111110000011000001";

var J = "10001111000001111111110000001000000";

var K = "11111110001000001010001000101000001";

var L = "11111110000001000000100000010000001";

var M = "11111111000000111111110000001111111";

var O = "01111101000001100000110000010111110";

var P = "11111111001000100100010010000110000";

var Q = "01111101000001100010110000110111110";

var S = "01100011001001100100110010011000110";

var U = "11111100000001000000100000011111110";

var V = "11111000000010000000100000101111100";

var W = "11111100000001111111000000011111110";

var X = "11000110010100000100000101001100011";

var Y = "11100000001000000111100010001110000";

var Z = "10000111000101100100110100011100001";

var sp = "0000000";

var stp = "0000001";

var exc = "1111101";

var ques = "11100001000000100110110010001111000";

var message = [D,A,N,G,E,R,exc,exc,exc,B,C,F,H,I,J,ques,K,L,M,O,P,stp,stp,stp,Q,S,T,U,V,W,X,Y,Z];

$(document).ready(function(){

    $(".wrapper").lcd(message,true);


$(".submit-button").click(function(){
var string = $(".text-input").val();
var message = [];
console.log(string);
string = string.toUpperCase();
for (i=0;i<string.length;i++){
    if(string.charAt(i)!=" "){
console.log(string.charAt(i));
message.push(eval(string.charAt(i)));
}
else {
    message.push(sp,sp);
}


}

  message.push(exc,exc,exc);
console.log(message);
$(".wrapper").empty();
$(".wrapper").lcd(message,true);

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
    message= message;
    p = 0;
    var dem = $(".display-element");
    for (o=0;o<message.length;o++){

        for (i=0;i<message[o].length;i++){

            if (message[o].charAt(i)==1){

                $this = dem.eq(p).addClass("active");
                p++;
            }
            else if (message[o].charAt(i)==0){
            p++;
            }
            if(i==(message[o].length-1)){

                for (spl=0;spl<sp.length;spl++){

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