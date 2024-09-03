$(document).ready(function (){
    $("#sobremi-card").mouseenter(function(){
        $(this).css({'transform': 'translateY(-15%)'});
        $("#sobremi-card .card").addClass("border-3 border-light");
    }).mouseleave(function() {
        $(this).css({'transform': 'translateY(0%) translateX(0%)'});
        $("#sobremi-card .card").removeClass("border-3 border-light");
    });  

    $("#habilidades-card").mouseenter(function(){
        $(this).css({'transform': 'translateY(-10%) translateX(-2%)'});
        $("#habilidades-card .card").addClass("border-3 border-light");
    }).mouseleave(function() {
        $(this).css({'transform': 'translateY(0%)'});
        $("#habilidades-card .card").removeClass("border-3 border-light");
    });   

    $("#educacion-card").mouseenter(function(){
        $(this).css({'transform': 'translateY(-10%) translateX(2%)'});
        $("#educacion-card .card").addClass("border-3 border-light");
    }).mouseleave(function() {
        $(this).css({'transform': 'translateY(0%) translateX(0%)'});
        $("#educacion-card .card").removeClass("border-3 border-light");
    });


    $("#contacto-card").mouseenter(function(){
        $(this).css({'transform': 'translateY(10%) translateX(-2%)'});
        $("#contacto-card .card").addClass("border-3 border-light");
    }).mouseleave(function() {
        $(this).css({'transform': 'translateY(0%) translateX(0%)'});
        $("#contacto-card .card").removeClass("border-3 border-light");
    });    

    $("#experiencia-card").mouseenter(function(){
        $(this).css({'transform': 'translateY(12%)'});
        $("#experiencia-card .card").addClass("border-3 border-light");
    }).mouseleave(function() {
        $(this).css({'transform': 'translateY(0)'});
        $("#experiencia-card .card").removeClass("border-3 border-light");
    });

    $("#proyectos-card").mouseenter(function(){
        $(this).css({'transform': 'translateY(10%) translateX(2%)'});
        $("#proyectos-card .card").addClass("border-3 border-light");
    }).mouseleave(function() {
        $(this).css({'transform': 'translateY(0%) translateX(0%)'});
        $("#proyectos-card .card").removeClass("border-3 border-light");
    });

    let popupJustOpened = false; 
    $(".col-lg-4").click(function(){  
        $(".popup").hide(); 
        var id = $(this).attr("id");
        $("#" + id + "-e").fadeIn(800);
        popupJustOpened = true;
    })

    $(".navbar-nav a").click(function(){  
        $(".popup").hide(); 
        var content = $(this).text();
        content = content.toLowerCase()
        if (content == 'sobre mí'){
            $("#sobremi-card-e").fadeIn(800);
        }
        if (content == 'educación'){
            $("#educacion-card-e").fadeIn(800);
        }

        $("#" + content + "-card-e").fadeIn(800);
        popupJustOpened = true;
    })

    $(window).click(function() {  
        if (!popupJustOpened && $(".popup").is(":visible")) {
            $(".popup").fadeOut();
        }
        popupJustOpened = false;
    });
})
