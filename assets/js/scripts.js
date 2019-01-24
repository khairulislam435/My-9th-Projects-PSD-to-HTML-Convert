(function($){
    $(document).ready(function(){


        $(window).on('load', function(){
            $('#loading-spinner-wrapper').fadeOut();
        })


// ////////////////////////////////////////////////
// Check if something really exits
// ///////////////////////////////////////////////
        $.fn.exists = function () {
            return this.length > 0;
        };




        var Obj = {

            owlCarousel:function(){
                if($('.owl-carousel').exists()){
                    $('.owl-carousel').each(function () {
                        var $this = $(this),
                            $items = ($this.data('items')) ? $this.data('items') : 3,
                            $items_tablet = ($this.data('items-tablet')) ? $this.data('items-tablet') : 2,
                            $items_mobile = ($this.data('items-mobile')) ? $this.data('items-mobile') : 1,
                            $items_mobile_wide = ($this.data('items-mobile-wide')) ? $this.data('items-mobile-wide') : 2,
                            $loop = ($this.data('loop')) ? $this.data('loop') : true,
                            $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                            $autospeed = ($this.data('autospeed')) ? $this.data('autospeed') : 3000,
                            $smartspeed = ($this.data('smartspeed')) ? $this.data('smartspeed') : 800,
                            $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                            $space = ($this.data('space')) ? $this.data('space') : 0,
                            $dots = ($this.data('dots')) ? $this.data('dots') : false,
                            $stageOuterClass = ($this.data('state-outer-class')) ? $this.data('state-outer-class') : null,
                            $dotsclass = ($this.data('dots-class')) ? $this.data('dots-class') : false,
                            $arrow = ($this.data('arrow')) ? $this.data('arrow') : false;
                        $(this).owlCarousel({
                            loop: $loop,
                            items: $items,
                            autoplay: $autoplay,
                            autoplayTimeout:$autospeed,
                            smartSpeed: $smartspeed,
                            margin:$space,
                            dots: $dots,
                            nav: $arrow,
                            dotsClass:'owl-dots'+ ' '+$dotsclass,
                            stageOuterClass: 'owl-stage-outer'+ ' '+$stageOuterClass,
                            navText:["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
                            autoHeight:$autohgt,
                            responsive:{
                                0:{
                                    items:$items_mobile,
                                },
                                576:{
                                    items:$items_mobile_wide,
                                },
                                750:{
                                    items:$items_tablet,
                                },
                                1170:{
                                    items:$items,
                                }
                            }

                        });
                    });
                }
            }, // END owl-carousel

            // nav on scroll apperaance
            navOnScrollApperaance:function(){
                var $nav = $('.ec-nav');
                // add shadow when nav sticky top
                if($nav.length){
                    $(window).scroll(function() {
                        if ($(window).scrollTop() >= 100) {
                            $('.ec-nav.sticky-top').addClass('shadow-v1');
                        }
                        else {
                            $('.ec-nav.sticky-top').removeClass('shadow-v1');
                        }
                    });
                }

            },

            // Smooth scroll to target element
            scrollTo: function(){
                $('[data-scrollto]').on('click', function(){
                    var id = '#' + $(this).data('scrollto');
                    if ( $(id).length > 0 ) {
                        var offset = 0;
                        if ( $('.header').length ) {
                            offset = $('.header').height();
                        }
                        $('html').animate({scrollTop: $(id).offset().top}, 700);
                    }
                    return false;
                });
            },

            /// Scroll to top
            scrollTop: function(){
                var documentOffsetHeight = document.body.offsetHeight;

                $(window).on('scroll', function() {
                    if ($(this).scrollTop() > 600 ){
                        $('.scroll-top').addClass('active');
                    } else {
                        $('.scroll-top').removeClass('active');
                    }
                });

                $('.scroll-top').on('click', function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 500);
                    return false;
                });
            },


        }; // END main Obj



        Obj.owlCarousel();

        var stickyTop = $('.site-nav').offset().top;

        $(window).on( 'scroll', function(){
            if ($(window).scrollTop() >= stickyTop) {
                $('.site-nav').addClass("sticky-top");
            } else {
                $('.site-nav').removeClass("sticky-top");
            }
        });


    }); // END document ready
}(jQuery));


//form validation


function checkFirstName(){
    var firstName = $('#firstName').val();
    var regExp = /^([a-zA-Z ]){2,20}$/;
    if (regExp.test(firstName)) {
        $('#firstNameError') .text(' ');
        return true;
    } else {
        $('#firstNameError') .text('Use a-z, A-Z and Space');
        return false;
    }
}

$('#firstName').keyup( function () {
    checkFirstName();
});

function checkLastName(){
    var lastName = $('#lastName').val();
    var regExp = /^([a-zA-Z ]){2,20}$/;
    if (regExp.test(lastName)) {
        $('#lastNameError') .text(' ');
        return true;
    } else {
        $('#lastNameError') .text('Use a-z, A-Z and Space');
        return false;
    }
}

$('#lastName').keyup( function () {
    checkLastName();
});

function checkEmailAddress(){
    var emailAddress = $('#emailAddress').val();
    var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regExp.test(emailAddress)) {
        $('#emailAddressError').text(' ');
        return true;
    } else {
        $('#emailAddressError').text('Invalid Email Address');
        return false;
    }
}

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});

function checkPassword() {
    var password = $('#password').val();
    var regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regExp.test(password)) {
        $('#passwordError').text(' ');
        return true;
    } else {
        $('#passwordError').text(' Password at least 6 character with 0-9, one special character, one lower case and one Upper case later');
        return false;
    }
}

$('#password').keyup(function () {
    checkPassword();
});


function checkConfirmPassword() {
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    if (confirmPassword == password) {
        $('#confirmPasswordError').text(' ');
        return true;
    } else {
        $('#confirmPasswordError').text('Password does not match ');
        return false;
    }
}

$('#confirmPassword').keyup(function () {
    checkConfirmPassword();
});


function  checkPhoneNumber(){
    var phoneNumber = $('#phoneNumber').val();
    var regExp =/\+?(88)?0?1[56789][0-9]{8}\b/;
    if (regExp.test(phoneNumber)) {
        $('#phoneNumberError').text(' ');
        return true;
    } else {
        $('#phoneNumberError').text(' Phone number is invalid ');
        return false;
    }
}


$('#phoneNumber').keyup(function () {
    checkPhoneNumber();
});

function  checkDistrictName(){
    var districtName = $('#districtName').val();
    if (districtName == " ") {
        $('#districtNameError').text(' Please select district name');
        return false;
    } else {
        $('#districtNameError').text(' ');
        return true;
    }
}

$('#districtName').change(function () {
    checkDistrictName();
});


$('#registrationForm').submit( function () {

    if(
        checkFirstName() == true &&
        checkLastName()  == true &&
        checkEmailAddress() == true &&
        checkPassword() == true &&
        checkConfirmPassword() == true &&
        checkPhoneNumber() == true &&
        checkDistrictName() == true

    ){
        return true;
    } else {
        return false;
    }
});





$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

})