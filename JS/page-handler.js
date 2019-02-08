$(document).ready(function(){
    
    particlesJS.load("background-canvas", "../Assets/particlesjs-config.json");
    
    fadeInTitles();
    
    $("#home-btn").click(function(){
        
        hideAll();
        resetTitles();
        
        $("#home-page").show();
        $("#skills-page").hide();
        $("#about-page").hide();
        $("#projects-page").hide();
        $("#contact-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#home-btn"));
        addTextSelected($("#home-text"));
        fadeInTitles();
    })
    
    $("#mobile-home-btn").click(function(){
        
        hideAll();
        resetTitles();
        
        $("#home-page").show();
        $("#skills-page").hide();
        $("#about-page").hide();
        $("#projects-page").hide();
        $("#contact-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#home-btn"));
        addTextSelected($("#home-text"));
        fadeInTitles();
    })
    
    $("#skills-btn").click(function(){
        
        hideAll();
        
        $("#home-page").hide();
        $("#skills-page").show();
        $("#about-page").hide();
        $("#projects-page").hide();
        $("#contact-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#skills-btn"));
        addTextSelected($("#skills-text"));
        //resetTitles();
        //fadeInTitles();
    })
    
    $("#mobile-skills-btn").click(function(){
        
        hideAll();
        
        $("#home-page").hide();
        $("#skills-page").show();
        $("#about-page").hide();
        $("#projects-page").hide();
        $("#contact-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#skills-btn"));
        addTextSelected($("#skills-text"));
        //resetTitles();
        //fadeInTitles();
    })
    
    $("#continueBTN").click(function(){
        
        hideAll();
        
        $("#about-page").show();
        $("#skills-page").hide();
        $("#home-page").hide();
        $("#projects-page").hide();
        $("#contact-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#about-btn"));
        addTextSelected($("#about-text"));
    })
    
    $("#about-btn").click(function(){
        
        hideAll();
        
        $("#about-page").show();
        $("#skills-page").hide();
        $("#home-page").hide();
        $("#projects-page").hide();
        $("#contact-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#about-btn"));
        addTextSelected($("#about-text"));
    })
    
    $("#mobile-about-btn").click(function(){
        
        hideAll();
        
        $("#about-page").show();
        $("#skills-page").hide();
        $("#home-page").hide();
        $("#projects-page").hide();
        $("#contact-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#about-btn"));
        addTextSelected($("#about-text"));
    })
    
    $("#projects-btn").click(function(){
        
        hideAll();
        
        $("#projects-page").show();
        $("#skills-page").hide();
        $("#home-page").hide();
        $("#about-page").hide();
        $("#contact-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#projects-btn"));
        addTextSelected($("#projects-text"));
    })
    
    $("#mobile-projects-btn").click(function(){
        
        hideAll();
        
        $("#projects-page").show();
        $("#skills-page").hide();
        $("#home-page").hide();
        $("#about-page").hide();
        $("#contact-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#projects-btn"));
        addTextSelected($("#projects-text"));
    })
    
    $("#contact-btn").click(function(){
        
        hideAll();
        
        $("#contact-page").show();
        $("#skills-page").hide();
        $("#home-page").hide();
        $("#about-page").hide();
        $("#projects-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#contact-btn"));
        addTextSelected($("#contact-text"));
    })
    
    $("#mobile-contact-btn").click(function(){
        
        hideAll();
        
        $("#contact-page").show();
        $("#skills-page").hide();
        $("#home-page").hide();
        $("#about-page").hide();
        $("#projects-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#contact-btn"));
        addTextSelected($("#contact-text"));
    })
    
    $("#info-btn").click(function(){
        
        $("#info-result").show();
        $("#tech-result").hide();
        
        $("#project-text-2").removeClass("selected");
        $("#project-text-1").removeClass("unselected");
        
        $("#project-text-2").addClass("unselected");
        $("#project-text-1").addClass("selected");
    })
    
    $("#tech-btn").click(function(){
        
        $("#tech-result").show();
        $("#info-result").hide();
        
        $("#project-text-1").removeClass("selected");
        $("#project-text-2").removeClass("unselected");
        
        $("#project-text-1").addClass("unselected");
        $("#project-text-2").addClass("selected");
    })
    
    //Click events for project buttons
    $("#IM-Client").click(function(){
        
        $("#projects-page").hide();
        $("#IM-Client-Page").show();
        
        resetAllText();
        resetAllButtons();
    })
    
    //Click events for project buttons
    $("#IM-Server").click(function(){
        
        $("#projects-page").hide();
        $("#IM-Server-Page").show();
        
        resetAllText();
        resetAllButtons();
    })
    
    //Click events for project buttons
    $("#IG-Scraper").click(function(){
        
        $("#projects-page").hide();
        $("#IG-Scraper-Page").show();
        
        resetAllText();
        resetAllButtons();
    })
    
    $("#DroneZone").click(function(){
        
        $("#projects-page").hide();
        $("#DroneZone-Page").show();
        
        resetAllText();
        resetAllButtons();
    })
    
    $("#Jaguar").click(function(){
        
        $("#projects-page").hide();
        $("#Jaguar-Page").show();
        
        resetAllText();
        resetAllButtons();
    })
    
    $("#Tetris-Mobile").click(function(){
        
        $("#projects-page").hide();
        $("#Tetris-Mobile-Page").show();
        
        resetAllText();
        resetAllButtons();
    })
    
    $("#AA").click(function(){
        
        $("#projects-page").hide();
        $("#AA-Page").show();
        
        resetAllText();
        resetAllButtons();
    })
    
    $("#Checkers-Online").click(function(){
        
        $("#projects-page").hide();
        $("#Checkers-Online-Page").show();
        
        resetAllText();
        resetAllButtons();
    })
    
    $("#RT-Site").click(function(){
        
        $("#projects-page").hide();
        $("#RT-Site-Page").show();
        
        resetAllText();
        resetAllButtons();
    })
    
    $("#Astromasters-Site").click(function(){
        
        $("#projects-page").hide();
        $("#Astromasters-Site-Page").show();
        
        resetAllText();
        resetAllButtons();
    })
    
    $(".navigation").click(function(){
        
        hideAll();
        $("#projects-page").show();
    })
    
    function resetAllText(){
        
        $("#home-text").removeClass("selected");
        $("#skills-text").removeClass("selected");
        $("#about-text").removeClass("selected");
        $("#projects-text").removeClass("selected");
        $("#contact-text").removeClass("selected");
        
        $("#home-text").addClass("unselected");
        $("#skills-text").addClass("unselected");
        $("#about-text").addClass("unselected");
        $("#projects-text").addClass("unselected");
        $("#contact-text").addClass("unselected");
    }
    
    function resetAllButtons(){
        
        $("#home-btn").removeClass("dark");
        $("#skills-btn").removeClass("dark");
        $("#about-btn").removeClass("dark");
        $("#projects-btn").removeClass("dark");
        $("#contact-btn").removeClass("dark");
        
        $("#home-btn").addClass("darkest");
        $("#skills-btn").addClass("darkest");
        $("#about-btn").addClass("darkest");
        $("#projects-btn").addClass("darkest");
        $("#contact-btn").addClass("darkest");
    }
    
    function addBTNSelected(element){
        
        element.removeClass("darkest");
        element.addClass("dark");
    }
    
    function addTextSelected(element){
        
        element.removeClass("unselected");
        element.addClass("selected");
    }
    
    function fadeInTitles(){
        
        $("#title-1").delay(100).animate({ opacity: 1 }, 2000);
        $("#title-2").delay(400).animate({ opacity: 1 }, 2500);
        $("#title-3").delay(700).animate({ opacity: 1 }, 3000);
    }
    
    function resetTitles(){
        
        $("#title-1").css( "opacity", 0 );
        $("#title-2").css( "opacity", 0 );
        $("#title-3").css( "opacity", 0 );
    }
    
    function hideAll(){
        
        $("#projects-page").hide();
        $("#skills-page").hide();
        $("#home-page").hide();
        $("#about-page").hide();
        $("#contact-page").hide();
        $("#IM-Server-Page").hide();
        $("#IM-Client-Page").hide();
        $("#IG-Scraper-Page").hide();
        $("#DroneZone-Page").hide();
        $("#Jaguar-Page").hide();
        $("#Tetris-Mobile-Page").hide();
        $("#AA-Page").hide();
        $("#Checkers-Online-Page").hide();
        $("#RT-Site-Page").hide();
        $("#Astromasters-Site-Page").hide();
    }
});