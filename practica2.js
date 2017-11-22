



/*
var reload=$('.counter')
reload.clearInterval()	*/

function timerDisplay(){          //this function displays a timer
   if (count <= 0){
     return clearInterval(counter);
   }
   count--;
   $('#time').html(count);
 }

$(document).keydown(function(tecla){
	var activeMove = $('.active1').next() 
	var activeActual = $('.active1')
	var siguiente = $('.active2').next()
	var siguienteRem = $('.active2')
	if (tecla.keyCode == 65) { 
		activeMove.addClass('active1')
		activeActual.removeClass('active1')
	

	}else if(tecla.keyCode == 83) { 
		siguiente.addClass('active2')
		siguienteRem.removeClass('active2')
	
	}

});


$('.counter').click(function(event){
  var time = document.getElementById("time");
  setInterval(function(){
    time.innerHTML= time.innerHTML-1
  },1000);

})  

