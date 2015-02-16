var num1;
var num2;
var x = 0;
var resultado = 0;
var numAcumulado;
var operacion = "";

function asignarnum(num){
	numAcumulado = $('#disp span').html() + num;
	$('#disp span').html(numAcumulado);
}

function almacena(){
	element = document.getElementById('caja');
	if(element.innerHTML == ""){
		alert("Introduce primer numero");
	}else{
		num1 = element.innerHTML;
		console.log("num1 = " + num1);
		element.innerHTML = "";
	}	
}

function opera(op){
	num1 = parseInt(numAcumulado);
	console.log("num1 = " + num1);
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
	if(operacion == "suma"){
		var numeros = $('#disp span').html().split("+");
		num2 = parseInt(numeros[1]);
		resultado = num1+num2;
	}else if(operacion == "mult"){
		var numeros = $('#disp span').html().split("x");
		num2 = parseInt(numeros[1]);
		resultado = num1*num2;
	}else if(operacion == "div"){
		var numeros = $('#disp span').html().split("/");
		num2 = parseInt(numeros[1]);
		resultado = num1/num2;
	}else if(operacion == "resta"){
		var numeros = $('#disp span').html().split("-");
		num2 = parseInt(numeros[1]);
		resultado = num1-num2;
	}
	$('#disp span').html(resultado);
	numAcumulado = $('#disp span').html();

}

jQuery(document).ready(function() {
	numAcumulado = 0;
	num1 = 0;
	num2 = 0;
	$('#calculadora a').click(function(){
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
			numAcumulado=0;
		}else{
			numAcumulado = $('#disp span').html() + $(this).html();
			$('#disp span').html(numAcumulado);
		}	
	});
});