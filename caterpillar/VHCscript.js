

// change click to start font colour on hover
$("#start").hover(function(){
  $(this).css("color", "#ed0707ff");
  }, function(){
  $(this).css("color", "white");
});

// // click start to next page
$("#start").click(function(){
    window.location.href="vhc1.html"
});


// click egg to p2
$("#egg").click(function(){
    window.location.href="vhc2.html";
});

$('#suncat').hide(); // hides the div
$('#suncat').delay(2000).fadeIn('fast');


// DAMN IT IT DIDNT WORK ....delay fade in of suncat aka caterpillar
// $("#egg").click(function(){
//      $(".p1").fadeOut(200);
//     $("#sunbg").fadeIn(200);
//     $("#suncat").fadeIn(400);
// });

// click caterpillar to p3
$("#suncat").click(function(){
    window.location.href="vhc3.html"
});

// click to p4
$("#catsun").click(function(){
    window.location.href="../caterpillar/vhc4.html"
});


// click apple w caterpillar to next page. 
$("#catapple").click(function(){
    window.location.href="../caterpillar/vhc5.html";
});


// to make each class fruit appear on page in the defined grid after each click :( everytime i use this the whole js breaks!!!!
// $(".pears").click(function(){
// 	pearNumber = "#pears"+(parseInt($(this).attr("id").replace("pears",""))+1)$(pearsNumber.fadeIn(500))
// });

// ...........................................
// // this was take 1//
// $("#start").click(function(){
//     $("#start, #cover").fadeOut(200);
//     $("#p1").fadeIn(200);
// });

// $("#p1").click(function(){
//     $("#p1").fadeOut(200);
//     $("#p2").fadeIn(200);
// });

// // this was take 2//
// $(".start").click(function(){


// 	if ($(this).hasClass("start")) { //this menu is already open
// 		$(this).removeClass("start") //remove the "open" class 
// 	} else {
// 		$(this).addClass("p1") //add the "open" class
// 	}
// })


// // to make each class fruit appear on page in the defined grid after each click
// $(".cat").click(function(){
// 	catNumber = "#cat"+(parseInt($(this).attr("id").replace("cat".""))+1)$(catNumber.fadeIn(500))
// });
