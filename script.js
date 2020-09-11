$(document).ready(function () {
    $("#menu-bars").click(function () {
        $(".navbar").slideToggle();
    });

    $(".test").css("display", "none");
    $(".prince").css("display", "none");
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
    test1();
    test2();

    function test1() {

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


    function test2() {
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
            newEL.delay(idx * 20);
            //animate the opacity back to full 1
            newEL.animate({
                opacity: 1
            }, 500);
        });
    };


    // $(function() {
    //     //get the welcome msg element
    //     var $all_msg = $('#element');
    //     //get a list of letters from the welcome text
    //     var $wordList = $('#element').text().split("");
    //     //clear the welcome text msg
    //     $('#element').text("");
    //     //loop through the letters in the $wordList array
    //     $.each($wordList, function(idx, elem) {
    //       //create a span for the letter and set opacity to 0
    //       var newEL = $("<span/>").text(elem).css({
    //         opacity: 0
    //       });
    //       //append it to the welcome message
    //       newEL.appendTo($all_msg);
    //       //set the delay on the animation for this element
    //       newEL.delay(idx * 70);
    //       //animate the opacity back to full 1
    //       newEL.animate({
    //         opacity: 1
    //       }, 1100);
    //     });

    //   });


    // ----------------- DESIGN PRINCIPALS

    function hideAllTitles() {
        $(".prince").hide('fast');
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
        $("#principals").css("background", "#056676");
        $("#prince1").fadeIn(1500);
        

        // $("#prince1").css("display", "block");
        // $("#prince1").fadeIn(3000, function () {
        //     $(this).fadeIn('slow');
        // });
    });
    $("#tog-but2").click(function () {
        hideAllTitles();
        finishPrince();
        $("#principals").css("background", "#2B4162");
        $("#prince2").fadeIn(1500);

        // $("#prince2").css("display", "block");
        // $("#prince2").fadeIn(3000, function () {
        //     $("#principals").css("background", "#2B4162");
        //     $(this).fadeIn('slow');
        // });
    });
    $("#tog-but3").click(function () {
        hideAllTitles();
        finishPrince();
        $("#principals").css("background", "#056676");
        $("#prince3").fadeIn(1500);

        // $("#prince3").css("display", "block");
        // $("#prince3").fadeIn(3000, function () {
        //     $("#principals").css("background", "#056676");
        //     $(this).fadeIn('slow');
        // });
    });
    $("#tog-but4").click(function () {
        hideAllTitles();
        finishPrince();
        $("#principals").css("background", "#2B4162");
        $("#prince4").fadeIn(1500);

        // $("#prince4").css("display", "block");
        // $("#prince4").fadeIn(3000, function () {
        //     $("#principals").css("background", "#2B4162");
        //     $(this).fadeIn('slow');
        // });
    });

    // -----------------------------------------------



    // $(function () {
    //     'use strict';
    //     var view = $(window).height();

    //     $('.card')
    //         .height(view)
    //         .scrollie({
    //             scrolloffset: -50,
    //             scrollingInView: function (elem) {
    //                 var bgColor = elem.data('col');
    //                 $('#port-body').css('background-color', bgColor);
    //             }
    //         });
    // });

});
