$(document).ready(function(){
    
    particlesJS.load("background-canvas", "../Assets/particlesjs-config.json");
    
    fadeInTitles();
    
    $("#home-btn").click(function(){
        
        $("#home-page").show();
        $("#skills-page").hide();
        $("#about-page").hide();
        $("#projects-page").hide();
        $("#contact-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#home-btn"));
        addTextSelected($("#home-text"));
        resetTitles();
        fadeInTitles();
    })
    
    $("#skills-btn").click(function(){
        
        $("#home-page").hide();
        $("#skills-page").show();
        $("#about-page").hide();
        $("#projects-page").hide();
        $("#contact-page").hide();
        
        resetAllText();
        resetAllButtons();
        addBTNSelected($("#skills-btn"));
        addTextSelected($("#skills-text"));
        resetTitles();
        fadeInTitles();
    })
    
    $("#continueBTN").click(function(){
        
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
        
        $("#title-1").delay(700).animate({ opacity: 1 }, 2000);
        $("#title-2").delay(1200).animate({ opacity: 1 }, 2500);
        $("#title-3").delay(1500).animate({ opacity: 1 }, 3000);
    }
    
    function resetTitles(){
        
        $("#title-1").animate({ opacity: 0 }, 0);
        $("#title-2").animate({ opacity: 0 }, 0);
        $("#title-3").animate({ opacity: 0 }, 0);
    }
});