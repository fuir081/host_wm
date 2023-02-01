$(document).ready(function () {

    /* modal de carga */
    $(window).on('load',function() {
        $(".m-loader").fadeOut(    500);
       
      
    });

    /****Parallax Fondo inicio***** */

    $(window).on("scroll", function(e) {
        parallax();
    });

    function parallax() {
        var scroll = $(window).scrollTop();
        var screenHeight = $(window).height();

        $(".parallax").each(function() {
            var offset = $(this).offset().top;
            var distanceFromBottom = offset - scroll - screenHeight

            if (offset > screenHeight && offset) {
                $(this).css("background-position", "right " + (( distanceFromBottom  ) * 0.6) +'px');
            }else{
                $(this).css("background-position", "right " + (( -scroll ) * 0.6) + 'px');
            }
        });
    } 

    /****Parallax comun*****/
    $(window).on("mousemove", function(e) {
        var w = $(window).width();
        var h = $(window).height();
        var offsetX = 2 - e.pageX / w;
        var offsetY = 2 - e.pageY / h;
        

        $(".prx").each(function(i, el) {
            var offset = parseInt($(el).data('offset'));
            var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

            $(el).css({
                '-webkit-transform': translate,
                'transform': translate,
                'moz-transform': translate
            });
        });
    });



    /************  Efecto menú fixed  ***********/
    

    $(window).on("scroll",function(){
        if($(this).scrollTop() > 400) $(".menu-fixed").addClass("menu-fixed_e");
        else $(".menu-fixed").removeClass("menu-fixed_e");
    })


    /***************Efecto Modal Carta *********** */

    $(".btn-m , button[name='btn-c']").on("click", function(e){
        e.preventDefault();
        
        
        if($("button[name='btn-c']").hasClass("cerrado")){
            $("button[name='btn-c']").removeClass("cerrado").addClass("abierto");
            $(".mb-carta").addClass("mb-carta_e");
            $(".mb-carta img").addClass("img-e");
        }else if($("button[name='btn-c']").hasClass("abierto")){
            $("button[name='btn-c']").removeClass("abierto").addClass("cerrado");
            $(".mb-carta").removeClass("mb-carta_e");
            $(".mb-carta img").removeClass("img-e");
        }
    });

    /******* Efecto  Menu Hambuerger ********* */

    $(".btn-res").on("click", function(){

        if($(this).hasClass("cerrado")){
            $(this).removeClass("cerrado").addClass("abierto");
            $(".btn-res div:nth-child(2)").toggleClass("res-e2");
            $(".btn-res div:first-child").toggleClass("res-e");
            $(".btn-res div:last-child").toggleClass("res-e");
            $(".btn-res").toggleClass("btn-resE");
            $(".r-menu ul").addClass("e-ul");
        }
        else if($(this).hasClass("abierto")){
            $(this).removeClass("abierto").addClass("cerrado");
            $(".btn-res div:nth-child(2)").toggleClass("res-e2");
            $(".btn-res div:first-child").toggleClass("res-e");
            $(".btn-res div:last-child").toggleClass("res-e");
            $(".btn-res").toggleClass("btn-resE");
            $(".r-menu ul").removeClass("e-ul");
        }

        
    });






/****** modale especial********/

$(".box-ie").on("click",function(e){
    e.preventDefault();
    var cadena = $(this).attr("style");
    

    try {
        if(cadena.includes("(")){
            var cadenaTemp = cadena.split("(");
            cadena = cadenaTemp[1];
            if(cadena.includes(")")){
                var cadenaTemp = cadena.split(")");
    
                cadena = cadenaTemp[0];
            }
    
        }
    
         $(".modal-especial img").attr("src",cadena);
         $(".modal-especial").addClass("modal-especial_e");
    } catch (error) {
        console.log(error);
    }

    
    

});









});