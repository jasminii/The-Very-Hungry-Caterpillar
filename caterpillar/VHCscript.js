//cover..........................................
// change click to start font colour on hover
$("#start").hover(function(){
  $(this).css("color", "#ed0707ff");
  }, function(){
  $(this).css("color", "#d9ead3");
});

// // click start to next page
$("#start").click(function(){
    window.location.href="vhc1.html"
});

//page 1..........................................
// click egg to p2
$("#egg").click(function(){
    window.location.href="vhc2.html";
});

$('#suncat').hide(); // hides the div aka suncat
$('#suncat').delay(2000).fadeIn('fast'); //suncat appears

//page 2..........................................
// click caterpillar to p3
$("#suncat").click(function(){
    window.location.href="vhc3.html"
});

//page 3..........................................
// click to p4
$("#catsun").click(function(){
    window.location.href="../caterpillar/vhc4.html"
});

//page 4..........................................
// appearance of apples
$('#catapple').hide();
$("#apple").click(function(){
	$("#catapple").fadeIn(0)
	$("#apple").fadeOut(0)
})

// click to p5 
$("#catapple").click(function(){
    window.location.href="vhc5.html";});


//page 5..........................................
// appearance of pears
$('#pear2, #catpear').hide();
$("#pear1").click(function(){
	$("#pear2").fadeIn(200)
})

// replace pear2 with catpear
$("#pear2").click(function(){
	$("#catpear").fadeIn(0)
	$("#pear2").fadeOut(0)
})

//click to p6
$("#catpear").click(function(){
    window.location.href="vhc6.html"
});

//page 6..........................................

$(".plums").click(function(){						//When you click on anything with the class "pears", execute the following code
	plumNumber = $(this).attr("id")					//read the ID of whatever image you clicked on and assign it to a variable called
	plumNumber = plumNumber.replace("plum","")		//removing the text "pear" from the variable.
	plumNumber = parseInt(plumNumber)				//reading pearNumber now as a real numnber
	plumNumber = plumNumber+1;						//add one to the number.
	plumNumber = "#plum"+plumNumber 				//convert number to the ID of the item you want to fade in

	$(plumNumber).fadeIn(500)
});

$("#plum3").click(function(){
	$("#plum4").fadeIn(0)
	$("#plum3").fadeOut(0)
})


$("#plum4").click(function(){
    window.location.href="vhc7.html"
});

//page 7..........................................

$(".straws").click(function(){						
	strawNumber = $(this).attr("id")					
	strawNumber = strawNumber.replace("straw","")		
	strawNumber = parseInt(strawNumber)				
	strawNumber = strawNumber+1;						
	strawNumber = "#straw"+strawNumber 				

	$(strawNumber).fadeIn(500)
});

$("#straw4").click(function(){
	$("#straw5").fadeIn(0)
	$("#straw4").fadeOut(0)
})


$("#straw5").click(function(){
    window.location.href="vhc8.html"
});

//page 8..........................................

$(".oranges").click(function(){						
	orangeNumber = $(this).attr("id")					
	orangeNumber = orangeNumber.replace("orange","")		
	orangeNumber = parseInt(orangeNumber)				
	orangeNumber = orangeNumber+1;						
	orangeNumber = "#orange"+orangeNumber 				

	$(orangeNumber).fadeIn(500)
});

$("#orange5").click(function(){
	$("#orange6").fadeIn(0)
	$("#orange5").fadeOut(0)
})


$("#orange6").click(function(){
    window.location.href="vhc9.html"
});
$('#title99').hide();

//page 9..........................................

$(".foods").click(function(){						
	foodNumber = $(this).attr("id")					
	foodNumber = foodNumber.replace("food","")		
	foodNumber = parseInt(foodNumber)				
	foodNumber = foodNumber+1;						
	foodNumber = "#food"+foodNumber 				

	$(foodNumber).fadeIn(500)
});

// testing food n text appearance
// $(".foods").click(function(){						
// 	textNumber = $(this).attr("id")					
// 	textNumber = textNumber.replace("text","")		
// 	textNumber = parseInt(textNumber)				
// 	textNumber = textNumber+1;						
// 	textNumber = "#text"+textNumber 				

// 	$(textNumber).fadeIn(500)
// });


// $("#food9").click(function(){
// 	$("#food10, #title99").fadeIn('slow')
// 	// $("#food9").fadeOut(0)
// });

$("#food9").click(function(){
	$("#food10").fadeIn(500)
	$("#textContain").fadeOut(500)
	$("#title99").fadeIn(2000)
});


$("#food10").click(function(){
    window.location.href="vhc10.html"
});
$('#catleaf, #hole1, #hole2, #hole3').hide();
$("#hole1").fadeIn(2000)

//page 10..........................................
$("#hole1").click(function(){
	$("#hole2").fadeIn(500)
})

$("#hole2").click(function(){
	$("#hole3").fadeIn(500)
})

$("#hole3").click(function(){
	$("#catleaf").fadeIn(2000)
})


$("#catleaf").click(function(){
    window.location.href="vhc11.html"
});


//page 11..........................................
$('#title111').hide();
$("#bigcat").hover(function(){
	$("#title111").fadeIn(2800)
})


$("#bigcat").click(function(){
    window.location.href="vhc12.html"
});


//page 12..........................................
$('#cocoon2').hide();
$("#bigcat2").hover(function(){
	$("#cocoon2").fadeIn(5000)
	$("#bigcat2").fadeOut(3500)		
})

$("#cocoon2").click(function(){
    window.location.href="vhc13.html"
});

//page 13..........................................

$('#butterfly').animate({right:'50px', left:'0px'},2000)

$("#butterfly").click(function(){
    window.location.href="vhc14.html"
});


//page 14..........................................
$('#restart1').hide();
	$("#restart1").fadeIn(3000)

$(document).ready(function() {
        $( "#restart1" ).mouseover(function(){
            $(this).attr("src", "../images/restart.png");
        });

        $( "#restart1" ).mouseout(function(){
            $(this).attr("src", "../images/restart grey.png");
        });
    });


$("#restart1").click(function(){
    window.location.href="index.html"
});


