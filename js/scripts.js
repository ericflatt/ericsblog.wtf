// toggle dark mode
var toggle = document.getElementById('toggle');
var html = document.getElementsByTagName('html')[0];
toggle.addEventListener('change', e => {
	if (e.target.checked) {
		html.classList.add('darkmode');
	} else {
		html.classList.remove('darkmode');
	}
});

// toggle between light and dark mode
$(document).ready(function () {
  $("#toggle").click(function () {
          $("#text").text(($("#text").text() == 'dark mode?') ? 'light mode?' : 'dark mode?');
  })
});

function light() {
  document.getElementById("light").style.display = "block";
}

function goAway() {
    document.getElementById("mode").style.display = "none";
  }

  function goAway() {
    document.getElementById("lightmode").style.display = "none";
  }

function me() {
    document.getElementById("me").style.display = "block";
  }
  
function meInvisible() {
    document.getElementById("me").style.display = "none";
  }

  function meTwo() {
    document.getElementById("meTwo").style.display = "block";
  }
  
function meInvisibleTwo() {
    document.getElementById("meTwo").style.display = "none";
  }  

  function pageLoad() {
    location.reload();
  }

  //cursor image
  $(document).mousemove(function(e){
    $("#image").css({left:e.pageX, top:e.pageY});
});

//draggable elements
$( function() {
  $( "#draggable" ).draggable();
} );

$( function() {
  $( ".draggable" ).draggable();
} );


// idle user do something

// idleTimer = null;
// idleState = false;
// idleWait = 2000;

// (function ($) {

//     $(document).ready(function () {
    
//         $('*').bind('mousemove keydown scroll', function () {
        
//             clearTimeout(idleTimer);
                    
//             if (idleState == true) { 
                
//                 // Reactivated event
//                 $("body").show();           
//             }
            
//             idleState = false;
            
//             idleTimer = setTimeout(function () { 
                
//                 // Idle Event
//                 $("body").hide();

//                 idleState = true; }, idleWait);
//         });
        
//         $("body").trigger("mousemove");
    
//     });
// }) (jQuery)