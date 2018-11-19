 // GOOGLE MAPS
    function myMap() {
    var mapLocation = {
        center: new google.maps.LatLng(-6.24960157, 106.71028399),
        zoom:18,
        };
    
    var map = new google.maps.Map(document.getElementById("gMaps"),mapLocation);
    }




// ======================= JQUERY SYNTHAX =======================


$(document).ready(function(){

    // MOUSEENTER AND MOUSELEAVE IMG SECTION PRODUCTS
        // IMG-INDEX-1
        // $('section.products #img-index-1').mouseenter(function(){
        // $(this).stop().fadeTo(500, 0.7);
        // });
        // $('section.products #img-index-1').mouseleave(function(){
        // $(this).stop().fadeTo(500, 1);
        // });

        // // IMG-INDEX-2
        // $('section.products #img-index-2').mouseenter(function(){
        // $(this).stop().fadeTo(500, 0.7);
        // });
        // $('section.products #img-index-2').mouseleave(function(){
        // $(this).stop().fadeTo(500, 1);
        // });

        // // IMG-INDEX-3
        // $('section.products #img-index-3').mouseenter(function(){
        // $(this).stop().fadeTo(500, 0.7);
        // });
        // $('section.products #img-index-3').mouseleave(function(){
        // $(this).stop().fadeTo(500, 1);
        // });

        // // IMG-INDEX-4
        // $('section.products #img-index-4').mouseenter(function(){
        // $(this).stop().fadeTo(500, 0.7);
        // });
        // $('section.products #img-index-4').mouseleave(function(){
        // $(this).stop().fadeTo(500, 1);
        // });


    // ONCLICK
        //---------------------- PRODUCTS ---------------------
        // SATU
        // $('section.products #img-index-satu').click(function(){
        //     $(location).attr('href','products.html');
        // })

        // // DUA
        // $('section.products #dua').click(function(){
        //     alert('hellow');
        // })


        // // TIGA
        // $('section.products #tiga').click(function(){
        //     alert('hellow');
        // })


        // // EMPAT
        // $('section.products #empat').click(function(){
        //     alert('hellow');
        // })

        // -------------------- CAROUSEL ---------------------

        // $('.carousel').carousel({
        //     interval: 1000
        // });


        //---------------------- BUTTON ---------------------

        // BUTTON
        $('section.products button').click(function(){
            alert('hellow');
        })


    // OWL CAROUSEL
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:false,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


});