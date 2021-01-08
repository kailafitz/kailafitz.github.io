$(document).ready(function () {

    $("#menu-bars").click(function () {
        $(".mob-navbar").slideToggle();
    });
    
    $(".test").css("display", "none");
    $(".prince").css("display", "none");
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
    fadeLoad();
    quote();
    // navColor();
    showOne();

    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $("header").css({"background-color":"#e76e1c"});
            // $(".text").css({"color":"#2B4162"});
        }
        else{
            $("header").css({"background-color":"transparent"});
        }
    })


    // Pages load with a fade effect

    function fadeLoad() {

        // $('body').(function () {

        var lis = $('.test');
        var delay = 0;

        lis.each(function () {
            var $li = $(this);
            $li.queue('fade', function (next) {
                $li.delay(delay).fadeIn(1500, next);
            });

            $li.dequeue('fade');


            delay += 250;
        });
        // });
    };


    // Text animation - ABOUT PAGE

    function quote() {
        //get the welcome msg element
        var $all_msg = $('#e');
        //get a list of letters from the welcome text
        var $wordList = $('#e').text().split("");
        //clear the welcome text msg
        $('#e').text("");
        //loop through the letters in the $wordList array
        $.each($wordList, function (idx, elem) {
            //create a span for the letter and set opacity to 0
            var newEL = $("<span/>").text(elem).css({
                opacity: 0
            });
            //append it to the welcome message
            newEL.appendTo($all_msg);
            //set the delay on the animation for this element
            newEL.delay(idx * 40);
            //animate the opacity back to full 1
            newEL.animate({
                opacity: 1
            }, 500);
        });
    };

    // Navigation bar - changes color depending on bg color

    // function navColor() {
        
    //     let bgCol = $("body").css("background-color");

    //     if (bgCol == "rgb(255, 255, 255)") {
    //         $(".text").css("color", "#2B4162");
    //         $("#menu-bars").css("color", "#2B4162");
    //     }
    //     else if (bgCol == "rgb(229, 229, 229)") {
            
    //         $(".text").css("color", "#2B4162");
    //     }
    // }


    // Changing background color - ABOUT PAGE

    $(function () {
        'use strict';
        var view = $(window).height();
        $('.part')
            .height(view)
            .scrollie({
                scrollOffset: -50,
                scrollingInView: function (elem) {
                    var bgColor = elem.data('background');
                    $('body').css('background-color', bgColor);
                }
            });
    });

    // ----------------- DESIGN principleS

    function hideAllTitles() {
        $(".prince").hide('fast');
    }

    function showOne() {
        $("#prince1").show();
        $("#principles").css("background", "#056676");
    }

    function fadeOutAll() {
        $(".prince").fadeOut(1000);
    }

    function finishPrince() {
        $(".prince").finish();
    }

    $("#tog-but1").click(function () {
        hideAllTitles();
        finishPrince();
        $("#principles").css("background", "#056676");
        $("#prince1").fadeIn(1500);
    });
    $("#tog-but2").click(function () {
        hideAllTitles();
        finishPrince();
        $("#principles").css("background", "#2B4162");
        $("#prince2").fadeIn(1500);
    });
    $("#tog-but3").click(function () {
        hideAllTitles();
        finishPrince();
        $("#principles").css("background", "#056676");
        $("#prince3").fadeIn(1500);
    });
    $("#tog-but4").click(function () {
        hideAllTitles();
        finishPrince();
        $("#principles").css("background", "#2B4162");
        $("#prince4").fadeIn(1500);
    });
});