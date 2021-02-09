    var Webflow = Webflow || [];
    Webflow.push(function() {
    // IX 2 Fix for loading animations when the site loads
    $('html').attr('data-wf-page', '601edfcbd9d961d870ebfd14');
    $('.main-hero').attr('data-w-id', '4ed49ac7-9cc4-d229-06dd-6db91a77663c') 
    $('.nav-social-media').attr('data-w-id', 'e4826fcb-f150-a5eb-0f95-25d0b34e6770')    
    $('.footer-hero').attr('data-w-id', '1e9856cf-28e4-b2d4-e8fc-be289ae5f0df')    
    $('.big-line').attr('data-w-id', '2922ef95-327e-668e-15d6-c60fe5b77d30') 
    $('.layer-center').attr('data-w-id', '31c76624-9d87-f9e5-e16a-4aa579a48ab1') 
    $('.line-left').attr('data-w-id', '31c76624-9d87-f9e5-e16a-4aa579a48ab2') 
    $('.line-right').attr('data-w-id', '31c76624-9d87-f9e5-e16a-4aa579a48ab5') 
    $('.layer-transition').attr('data-w-id', '516330c6-1ab7-a9ca-69af-91a8eb77f55d') 
    $('.layer-top-click').attr('data-w-id', '516330c6-1ab7-a9ca-69af-91a8eb77f55e') 
    $('.layer-bottom-click').attr('data-w-id', '516330c6-1ab7-a9ca-69af-91a8eb77f55f') 
    $('.layer-top').attr('data-w-id', '516330c6-1ab7-a9ca-69af-91a8eb77f560') 
    $('.layer-bottom').attr('data-w-id', '516330c6-1ab7-a9ca-69af-91a8eb77f561') 
    $('.hamb-icon').attr('data-w-id', 'de9c52aa-da4a-eb98-0efe-47d5f60b87b6') 
       
    
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require('ix2').init();
    document.dispatchEvent(new Event('readystatechange'));
    // IX 2 Fix for if you have different interactions at different breakpoints
    var resizeTimer;
    $(window).on('resize', function(e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        //When the page is resized re-start animations
        document.dispatchEvent(new Event('readystatechange'));
      }, 500);
    });
      });