var num1;
var num2;
var x = 0;
var resultado = 0;
var numAcumulado;
var operacion = "";
var numMemo;
var encendido;
var noAns;

function asignarnum(num) {
  if ($('#disp span').html() == "0") {//para si se reincia con "c", no salga el 0 a la izquierda
    $('#disp span').html("");
  }
  numAcumulado = $('#disp span').html() + num;
  $('#disp span').html(numAcumulado);
}

function numOperando(acumulado) {
  var num;
  if (acumulado != 0) {
    var esFloat = acumulado.split(".");
    if (esFloat.length == 2) {
      num = parseFloat(acumulado);
    } else {
      num = parseInt(acumulado);
    }
  } else {
    num = 0;
  }	
  return num;
}

function opera(op){
  console.log("entra en opera pork se a pulsado una operacion")
  if(num1 == 0 || ((num1 != 0) && noAns)){
    num1 = numOperando(numAcumulado);
    console.log("num1 en opera = " + num1);
  }
  operacion = op;
  if(op == "suma"){
    numAcumulado = $('#disp span').html() + "+";
  }else if(op == "mult"){
    numAcumulado = $('#disp span').html() + "x";
  }else if(op == "div"){
    numAcumulado = $('#disp span').html() + "/";
  }else if(op == "resta"){
    numAcumulado = $('#disp span').html() + "-";
  }
  $('#disp span').html(numAcumulado);
}

function igual(){
    var resultado = 0;
    console.log("operacion en igual es = " + operacion);
	if(operacion == "suma"){
		var numeros = $('#disp span').html().split("+");
		num2 = numOperando(numeros[1]);
		console.log("num1 = " + num1);
		console.log("num2 = " + num2);
		resultado = num1+num2;
	}else if(operacion == "mult"){
		var numeros = $('#disp span').html().split("x");
		num2 = numOperando(numeros[1]);
		console.log("num1 = " + num1);
		console.log("num2 = " + num2);
		resultado = num1*num2;
	}else if(operacion == "div"){
		var numeros = $('#disp span').html().split("/");
		num2 = numOperando(numeros[1]);
		console.log("num1 = " + num1);
		console.log("num2 = " + num2);
		resultado = num1/num2;
	}else if(operacion == "resta"){
		var numeros = $('#disp span').html().split("-");
		num2 = numOperando(numeros[1]);
		console.log("num1 = " + num1);
		console.log("num2 = " + num2);
		resultado = num1-num2;
	}
	$('#disp span').html(resultado);
	numAcumulado = $('#disp span').html();
	operacion = "";
	noAns = true;

}

function verOper(num){
	if(num == 43){
		return "suma";
	}else if(num == 45){
		return "resta";
	}else if(num == 47){
		return "div";
	}else if(num == 120){
		return "mult";
	}
}

function verTecla(key){
	if(key>47 && key<58){//es un numero
		var numero = key - 48; //48 es por el caracter del 0 en el teclado, 49(1)-48(0) = 1;
		asignarnum(numero);
	}else if(((key > 42 && key < 48) && key != 44) || key == 120){
		if(key == 46){
			numAcumulado = $('#disp span').html() + ".";
			$('#disp span').html(numAcumulado);
		}else{
			var op = verOper(key);
			opera(op);
		}
	}else if(key == 13 || key == 61){
		igual();
	}else if(key == 99 || key == 67){
		$('#disp span').html("0");
		num1=0;
		num2=0;
		numAcumulado=0;
	}else if(key == 77 || key == 109){
		if(operacion != ""){
			asignarnum(numMemo);
		}else{
			$('#disp span').html("");
			asignarnum(numMemo);
		}
	}
}

jQuery(document).ready(function() {
	numAcumulado = 0;
	num1 = 0;
	num2 = 0;
	numMemo = 0;
	noAns = true;
	$('#calculadora a').click(function(){
		if(encendido){
			if($(this).html() == "+"){
				opera("suma");
			}else if($(this).html() == "x"){
				opera("mult");
			}else if($(this).html() == "/"){
				opera("div");
			}else if($(this).html() == "-"){
				opera("resta");
			}else if($(this).html() == "="){
				igual();
			}else if($(this).html() == "c"){
				$('#disp span').html("0");
				num1=0;
				num2=0;
				//asignarnum("0");
			}else if($(this).html() == "mem"){
				if($('#disp span').html() == "ans"){
					numMemo = num1;
					console.log("numMemo desde ans = " + numMemo);
				}else{
					numMemo = $('#disp span').html();
					console.log("numMemo = " + numMemo);
				}
			}else if($(this).html() == "m"){
				if(operacion != ""){
					asignarnum(numMemo);
				}else{
					$('#disp span').html("");
					asignarnum(numMemo);
				}
			}else if($(this).html() == "on/off"){
				encendido = false;
				$('#disp span').html("Good bye!");
				$("#disp span").addClass("apagar");
				setTimeout(function(){ 
					$("#disp span").removeClass("apagar");
					$('#disp span').html("");}, 
				3000);
			}else if($(this).html() == "ans"){
				noAns = false;
				num1 = numOperando($('#disp span').html());
				$('#disp span').html("ans");
			}else{
				asignarnum($(this).html());
			}
		}else{
			if($(this).html() == "on/off"){
				encendido = true;
				asignarnum("0");
			}
		}	
	});

	$(window).keypress(function(e) {
		if(encendido){
		    var key = e.which;
		    console.log(key);
		    verTecla(key);
	    }
	});
});