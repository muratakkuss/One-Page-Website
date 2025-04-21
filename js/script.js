$(document).ready(function() {
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    
    // Smooth scrolling for all links
    $('a.nav-link, a.smooth-scroll').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });
    
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // Initialize date picker
    $('.datepicker').datepicker({
        format: 'mm/dd/yyyy',
        autoclose: true,
        todayHighlight: true
    });
    
    // Submit search form
    $('#search-form').on('submit', function(e) {
        e.preventDefault();
        // In a real application, this would send the form data to the server
        alert('Your search has been submitted!');
    });
    
    // Show/Hide "Back to top" button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    
    // Scroll to top on click
    $('.back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    
    // Newsletter form submission
    $('#newsletter-form').on('submit', function(e) {
        e.preventDefault();
        var email = $('#newsletter-email').val();
        if (email) {
            // In a real application, this would send the form data to the server
            $('#newsletter-success').fadeIn().delay(3000).fadeOut();
            $(this)[0].reset();
        }
    });
    
    // Animate elements on scroll using Animate.css
    function animateOnScroll() {
        $('.animate__animated').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight > position) {
                var animation = $(this).data('animation');
                $(this).addClass(animation);
            }
        });
    }
    
    // Run animation function on page load and scroll
    animateOnScroll();
    $(window).scroll(animateOnScroll);
}); 