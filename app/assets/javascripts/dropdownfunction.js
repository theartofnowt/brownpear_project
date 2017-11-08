// (function($) { // Begin jQuery
  $(document).on('turbolinks:load',(function() {
    console.log("It works on each visit!") // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    //Toggle open and close nav styles on click. added preventDefault to stop element from clicking up again.
    $('#nav-toggle').click(function(e) {
      e.preventDefault();
      $('nav ul').stop().slideToggle();
      console.log("should come down and stay down?")
    });
    //Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
      console.log("should x")
    });
  }));
 // end DOM ready
 // })(jQuery); // end jQuery
