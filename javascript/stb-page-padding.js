﻿(function($){
// Start navigation padding

  $(document).ready(function() {

    if(window.location.href.indexOf("/kontakt-oss") > -1 && document.referrer.indexOf("/bedrift") > -1){
       window.location.href=window.location.href + '#tab-Bedrift';
    }

    if ( window.location.href.indexOf('#tab-') > -1 ){
      var anchor = window.location.href.substring(window.location.href.lastIndexOf("#")).split("?")[0];
      var contactTabs = $('#tabs li');
      $(contactTabs).each(function(){
        if($(this).children("a").attr("href") === anchor) {
          $(this).children("a").click();
          return;
        }
      });
    }

    $(".dropdown").on("hide.bs.dropdown", function() {
      if( $(this).find('.dropdown-menu') ) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        if( $(this).closest('#top-menu-nav').length ) {
          $(".shadow-overlay").css("display","none");
          $('.current').css("background-color", "#da291c;");
        }
      }
    });

    $(".dropdown").on("show.bs.dropdown", function() {
      if( $(this).find('.dropdown-menu') ) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        if( $(this).closest('#top-menu-nav').length ) {
          $(".shadow-overlay").css("display","block");
          if(!$(this).is($('.current'))) {
            $('.current').css("background-color", "#bb1b18");
          }
        }
      }
    });

    $(".dropdown").on("shown.bs.dropdown", function() {
      if(!$(this).is($('.current.login'))){
        $('#start-login-form input').focus();
      }
    });

    // Slide up the dropdown on clicking the remove icon
    $(".dropdown-menu > li > a").click(function() {
      $(".dropdown").removeClass('open');
      $(".dropdown").trigger("hide.bs.dropdown");
    });
  });

  //Checking for carts
  $(document).ready(function() {
   var cartCount = readCookie("cartCount");
   // seatbelt: window.showCartIcon might not be defined:
   if(window.hasOwnProperty('showCartIcon')){
    if (cartCount != null && showCartIcon === true) {
        addCartBtn(cartCount);  
      }
    }
  }); 

// Showing/hiding the overlay on clicking the dropdown toggle
  $(document).ready(function() {
    //initialize the overlay to get the document's dimensions
    $(".shadow-overlay").css("width",$(document).width());
    $(".shadow-overlay").css("height",$(document).height());
    showImportantNotice();
  });

  $(window).resize(function() {
    //Recalculate the overlay when window is resized
    $(".shadow-overlay").css("width",$(document).width());
    $(".shadow-overlay").css("height",$(document).height());
  });

  // Script for populating the dropdown with the selected tab link
  $(document).ready(function() {
    $(".dropdown-tabs .dropdown .heading").html($(".dropdown-tabs .dropdown-menu li.active a").html());
    $(".dropdown-tabs .dropdown-menu li a").click(function() {
      $(".dropdown-tabs .dropdown-menu li.active").removeClass("active");
      $(".dropdown-tabs .dropdown .heading").html($(this).html());
    });

    $(".dropdown-tabs button").click(function() {
      $(".dropdown-tabs button span.icon").toggleClass('chevron-up chevron-down');
    });
  });

 $(document).ready(function() {
    $(".dropdown-tabs .dropdown-select").change(function() {
      $("#main-tab-content > .tab-pane.active").removeClass("active");
      $(".tab-content #tab-"+this.value).addClass("active");
    });
  });
  
// Start prevent top menu clicks from running away with the page
  $(document).on('click', '.yamm .dropdown-menu', function(e) {
    e.stopPropagation();
  });
// End prevent top menu clicks from running away with the page

// End navigation padding

// Start content padding

// Start Adding twister effect to accordion/FAQ
  $(document).ready(function () {
    $("ul[data-widget=stbFaq]").stbFaq();
  });

  $.fn.stbFaq = function () {
    $(this).find("a").on("click", function (b) {
      if ($(this).hasClass("twister")) {
        b.preventDefault();
        var c = $(this).siblings("ul.accordion li .answer");
        $(this).hasClass("open") ? ($(this).removeClass("open"), c.slideUp(200)) : ($(this).addClass("open"), c.slideDown(200)); // jshint ignore:line
      }
    });
  };

  $(document).ready(function() {
    $('.stb-accordion').on('show.bs.collapse', function (event) {
      if($(event.target).parents('.stb-accordion').is('.toggle-red-chevron')) {
        $(event.target).prev().find('span:last').toggleClass('chevron-down chevron-up red');
      }else{
        $(event.target).prev().find('span:last').toggleClass('chevron-down chevron-up');
      }
      $(event.target).parent().addClass('active');
    });

    $('.stb-accordion').on('hide.bs.collapse', function () {
      if($(event.target).parents('.stb-accordion').is('.toggle-red-chevron')) {
        $('.panel-collapse.collapse.in').prev().find('span:last').toggleClass('chevron-down chevron-up red');
      }else{
        $('.panel-collapse.collapse.in').prev().find('span:last').toggleClass('chevron-down chevron-up');
      }
      $('.panel-collapse.collapse.in').parent().removeClass('active');
    });
  });
// End twister effect on accordion/FAQ

// Achieve Equal height columns
  $("document").ready(function() {
    $(".row .column").matchHeight(true);
  });

  $(window).resize(function() {
    $(".row .column").matchHeight(true);
  });

  //Equalheights fix for elements in hidden tabs
  $(document).ready(function() {
    $('ul[data-tabs="tabs"] a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('.tab-pane.active .row .column').matchHeight(true);
    });
  });
  // End achieve Equal heights

  // Handling automatic generation of TOC lists on article pages
  // Prepare the TOC link for a given header tag
  function prepareTocLink(headerTag, prefix) {
    // Take the header text
    var headerText = headerTag.text();
    // Prepare the header ID from its text
    headerTag.attr("id",prefix.replace(/ /g,"-").toLowerCase() + "--" + headerText.replace(/\-/g,'').replace(/ /g,"-").replace(/[æå]/gi,'a').replace(/ø/gi,'o').toLowerCase()); // generating id for the h3
    var headerId = headerTag.attr("id").replace(/\W/g, ''); // set the id
    headerTag.attr('name', headerId);
    // Create the link and return it
    return '<li><a href="#'+headerId+'">'+headerText+'</a></li>';
  }

  $(document).ready(function() {
    // Prepare the row that contains the table of contents
    var tocList ='<div class="row"><div class="col-md-8 toc-list top-padding-10 border-top-and-bottom stbcolor-background fifth"><p class="intro"><a href="#" onclick="$(\".toc-list .items\").slideToggle();$(\".toc-list p span\").toggleClass(\"chevron-down red chevron-up\");">G&aring; direkte til<span class="stb-sprite-medium chevron-down pull-right"></a></span></p><ul class="items"></ul></div></div>';

    // Place the table of content above the first h3.toc-header
    $(tocList).insertBefore( $('h3.toc-header:first').closest("div.row") );

    // Find all the top level TOC headings (h3)
    var tocHeaders= $('h3.toc-header');

    // Iterate through all the top level headings (h3)
    for(var i=0; i<tocHeaders.length; i++) {
      var heading = $(tocHeaders[i]);

      // Appending heading text to table to contents and also preparing links
      $('.toc-list .items').append( prepareTocLink(heading, "") );

      // Find all sub-headings(h4) inside each heading(h3)
      var subHeading = heading.nextUntil('h3','h4');

      // Check if there are any h4 elements. If there are none, we should not run the code below.
      if(subHeading.length === 0) continue;
    }

    //check if URL already has a hash and scroll to the correct heading
    if( window.location.hash.length > 0 && window.location.hash.indexOf("/") === -1 ) {  // only do scrolling now, since the has tag is present and it does not have a / which is for angular JS
      try {
        var hashId = window.location.hash;
        //if a matching heading has the hash ID, then scroll to it.

        if( hashId.length > 0 ){
          scrollToHash( hashId );
        }

      } catch(e) {
        // Don't do a thing!
      }
    }

    // Perform a smooth page scroll to an anchor on the same page.
    $(function() {
      $('.toc-list .items a[href*=#]:not([href=#])').click(function(event) {
        event.preventDefault();
        //if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        scrollToHash( this.hash);
        //}
      });
    });

    // replace medium with small chevron icon in mobile view
    if( $( window ).width() <= 768) {
      $('.toc-list p span').toggleClass("stb-sprite-small stb-sprite-medium");
    }

    // hide and show articles list
    $('.toc-list p').click(function() {
      // if the media screen width is large, then don't do anything
      // the following will apply for mobile view
      $('.toc-list .items').slideToggle();
      $('.toc-list p span').toggleClass("chevron-down red chevron-up");
    });

  });
  // End of automatic generation of toc lists on article pages

  // Opens the href in the rel-attribute to the clickable class
  $(document).ready(function($) {
    $(".clickable").click(function() {
      if ($(this).find("a").first().attr("target") === '_blank') {
        window.open($(this).attr("rel"));
      } else {
        window.document.location = $(this).attr("rel");
      }
    });

    $(".clickable a").click(function(e) {
      e.preventDefault();
      //Do nothing, as the clickable will handle this click.
    });
  });

  //Appending arrow after link for clickable links
  $(document).ready(function() {
    var arrowCode ='<span class="stb-sprite-small arrow-right pull-right"></span>';
    $('a.list-group-item').append(arrowCode);
  });

  //Adding link visibility to contents in first column in clickable rows in tables
  $(document).ready(function() {
    $('tr.clickable td:first-child').each(function() {
      if($(this).parent().hasClass('analyze')){
        $(this).html('<a href="#"' + ' class="analyze">' + $(this).text() + '</' + 'a>');
      }else{
        $(this).html('<a href="#"' + '>' + $(this).text() + '</' + 'a>');
      }
    });
  });

  // End content padding

  // Adding hotkeys based on Resig
  $("document").ready(function() {

    //Hotkey for search
    if($('.typeahead').length) {
      $(document).bind('keydown', 'shift+s', function(event){event.preventDefault();$('.navbar-nav .typeahead').focus();});
    }

    //Hotkey for bottom
    if( $('footer').length) {
      $(document).bind('keydown', 'shift+b', function(){$('html, body').animate({ scrollTop: $('footer').offset().top}, 500);});
    }

    //Hotkey for login
    if($('li.login > a').length) {
      $(document).bind('keydown', 'shift+l', function(){$('li.login > a').click();});
    }

    //Hotkey for top
    $(document).bind('keydown', 'shift+t', function(){$('html, body').animate({ scrollTop: 0}, 500);});
  });

// Check for list groups with .expandable class and make them expandable
  $(document).ready(function() {
    $('ul.stb-list-group.expandable').each(function(index) {
      makeExpandableList($(this),2);
    });
  });
  /* ***** START Make lists expandable ***** */
  function makeExpandableList(selector) {
    initialExpandable(selector);

    var showMore = selector.find('.showMore');

    showMore.click(function() {
      if(showMore.hasClass('open')) {
        initialExpandable(selector);
        showMore.find('span').toggleClass('chevron-up red chevron-down');
      } else {
        selector.children('li').show(400);
        showMore.find('span').toggleClass('chevron-up red chevron-down');
      }
      showMore.find("span.show-detail, span.hide-detail").toggle();
      showMore.toggleClass('open');
    });
  }
  /* ***** END Make lists expandable ***** */

  /* ***** START Loop through list, showing li elements with summary class and hide all other li elements ***** */
  function initialExpandable(selector) {
    selector.children('li').each(function(index) {
      if(!$(this).is('.summary, .showMore')) {
        $(this).hide(400);
      }
    });
  }
  /* ***** END Loop through list, showing li elements with summary class and hide all other li elements ***** */

  // Google Analytics event tagging - automated for various design elements
  // To enable analytics the element needs a 'analyze' class
  $(document).ready(function() {

    // Analytics for menu usage
    $("ul.dropdown-menu a").bind( "click", function() {
      var aLinkDescribed = $(this).html();
      if (aLinkDescribed.indexOf("<span") > 0 ) {
        var spanStart = $(this).html().indexOf("</span>");
        aLinkDescribed = aLinkDescribed.substring(spanStart, aLinkDescribed.length);
        if (aLinkDescribed.indexOf("<span") > 0 ) {       
          spanStart = $(this).html().indexOf("<span");
          spanEnd = $(this).html().indexOf("</span>");
          aLinkDescribed = aLinkDescribed.substring(spanStart, spanEnd);
        }
      }
      var path = window.location.pathname;      
      ga('send', 'event', path , 'Klikk i meny', aLinkDescribed);
    });

    // Analytics for footer menu items usage
    $("footer a").bind("click", function() { 
      var footLink = $(this).html(); 
      if (footLink.indexOf("<span") < 1) {
        var path = window.location.pathname;    
        ga('send', 'event', path , 'Klikk i bunnmeny', footLink);
      } 
    });    

    // Analytics for Button
    $('button.analyze').bind( "click", function() {
      var btnTxt = $(this).html();
      var path = window.location.pathname;
      ga('send', 'event', path , 'Klikk på knapp', btnTxt);
    });

    // Analytics for Mini box
    $('.mini.clickable.analyze').bind( "click", function() {
      var boxId = $(this).attr('alt');
      var path = window.location.pathname;
      ga('send', 'event', path , 'Klikk på Mini Box', boxId);
    });

    // Analytics for Big box
    $('.big.clickable.analyze').bind( "click", function() {
      var boxId = $(this).attr('alt');
      var path = window.location.pathname;
      ga('send', 'event', path , 'Klikk på Big Box ', boxId);
    });

    // Analytics for Accordion
    $('.accordion.analyze a').bind( "click", function() {
      var q = $(this).find('.question').html();
      var path = window.location.pathname;
      ga('send', 'event', path , 'Klikk i FAQ ', q);
    });

    // Analytics for List group
    $('.list-group-item.analyze').bind( "click", function() {
      var q = $(this).html();
      var qspan = q.indexOf("<span", 0);
      var q2 = q.substring(0,qspan);
      var path = window.location.pathname;
      ga('send', 'event', path , 'Klikk i List Group ', q2);
    });

    // Analytics for Radio buttons and Checkboxes
    $('label.analyze').bind( "click", function() {
      var parent = $(this).parent();
      var q = $(this).html();
      var label = $(this).parent().prev('label').length > 0 ? $(this).parent().prev('label').html() : "" ;
      var path = window.location.pathname;
      if(parent.hasClass('radiobuttons')) {
        ga('send', 'event', path , 'Radio button: ' + label + ' checked', q);
      } else if(parent.hasClass('checkboxes')) {
        ga('send', 'event', path , 'Checkbox: ' + label + ' checked', q);
      }
    });

    // Analytics for Select
    $('select.analyze').bind( "change", function() {
      var q = $(this).val();
      var label = $(this).prev('label').length > 0 ? $(this).prev('label').html() : "" ;
      var path = window.location.pathname;
      ga('send', 'event', path , 'Dropdown:' + label + ' endret valg.', q);
    });

    //Analytics for Datepicker
    $('.datePicker.analyze').bind('dp.change dp.show', function(){
      var q = $(this).find('input').val();
      var label = $(this).prev('label').length > 0 ? $(this).prev('label').html() : "" ;
      var path = window.location.pathname;
      ga('send', 'event', path , 'Date changed for: ' + label, q);
    });

  });

  // Adjustments to Bootstrap Modal window
  var modalDialog = {
    triggerModal : function(type,options) {
      if(type === 'confirm') {
        var markup = '<div class="modal stb-modal fade" id="dialogModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog modal-span6">' +
            '<div class="modal-content">' +
            '<div class="modal-header stbcolor-secondary fifth">' +
            '<button type="button" class="close" data-dismiss="modal" onclick="options.onCloseAction();"><p class="pull-left">Lukk</p><span class="stb-sprite-medium remove pull-left"></span></button>' +
            '<h4 class="modal-title"><span class="stb-color-sprite-medium info"></span></h4>' +
            '</div>' +
            '<div class="modal-body">' +
            '<h3>'+options.title+'</h3>' +
            '<p>'+options.text+'</p>' +
            '<form>' +
            '<button class="stb-btn" onclick="options.onConfirmAction();">Yes</button>' +
            '<button class="stb-btn transparent light" onclick="options.onCancelAction();">No</button>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        if($('#dialogModal').length === 0) {
          $('body').append(markup);
        }

        $('#dialogModal').show();
        $('#dialogModal').modal();
      }
    }
  };
  // End Adjustments to Bootstraps Modal window

  // Script to highlight anchor tags in mini and big boxes on mouseenter
  $("document").ready(function() {
    $( ".mini" ).mouseenter(function() {
      $(this).find('a').css('color', '#DA291C');
      $(this).find('a').css('border-color', '#DA291C');
    });
    $( ".mini" ).mouseleave(function() {
      $(this).find('a').css('color', '#404040');
      $(this).find('a').css('border-color', '#404040');
    });
    $( ".big" ).mouseenter(function() {
      $(this).find('a').css('color', '#DA291C');
      $(this).find('a').css('border-color', '#DA291C');
    });
    $( ".big" ).mouseleave(function() {
      $(this).find('a').css('color', '#404040');
      $(this).find('a').css('border-color', '#404040');
    });

    $('.stbcolor-secondary.sixth .stb-box.mini,.stbcolor-secondary.sixth .stb-box.big').css('background-color', '#fff');
  });


// login
  $(document).ready(function() {
    /* Verify National Identity Number */
    var loginFields=  {
      nationalIdentityNumber: {
        container: '#menulogin-message',
        validators: {
          callback: idValidator,
          notEmpty: {
            message: '<span class="stb-color-sprite-small warning"></span> Oppgi fødselsnummer'
          }
        }
      }
    };
    var mobileLoginFields= {
      nationalIdentityNumber: {
        container: '#mobile-menulogin-message',
        validators: {
          callback: idValidator,
          notEmpty: {
            message: '<span class="stb-color-sprite-small warning"></span> Oppgi fødselsnummer'
          }
        }
      }
    };
    /**CORPORATE**/
 var loginFieldsCorporate=  {
    nationalIdentityNumberCorporate: {
    container: '#mobile-menulogin-message-corporate',
    validators: {
       callback: idValidator,
       notEmpty: {
         message: '<span class="stb-color-sprite-small warning"></span> Oppgi fødselsnummer'
       }
     }
   }
 };
 var mobileLoginFieldsCorporate=  {
    nationalIdentityNumberCorporate: {
    container: '#menulogin-message-corporate',
    validators: {
       callback: idValidator,
       notEmpty: {
         message: '<span class="stb-color-sprite-small warning"></span> Oppgi fødselsnummer'
       }
     }
   }
 };

 var LoginFieldsBankIDCorporate=  {
    nationalIdentityNumberCorporate: {
    container: '#menulogin-message-BankID-corporate',
    validators: {
       callback: idValidator,
       notEmpty: {
         message: '<span class="stb-color-sprite-small warning"></span> Oppgi fødselsnummer'
       }
     }
   }
 };

 var LoginFieldsPWCorporate=  {
    brukernavnBp: {
    container: '#brukernavn-bp-menu-message',
    validators: {
       callback: idValidator,
       notEmpty: {
         message: '<span class="stb-color-sprite-small warning"></span> Oppgi fødselsnummer'
       }
     }
   }
 };


    var callback = function(e) {
      // Prevent form submission
      e.preventDefault();
      loginFromMenu($(e.target).find("input[name='nationalIdentityNumber']").val());
    };

    /**CORPORATE**/
    var callbackCorporate = function(e) {
    // Prevent form submission
    e.preventDefault();
    loginFromMenuCorporate($(e.target).find("input[name='nationalIdentityNumberCorporate']").val());
    };
    var callbackBankIDporate = function(e) {
    // Prevent form submission
    e.preventDefault();
    loginBankID();
    };
    var callbackPWporate = function(e) {
    // Prevent form submission
    //e.preventDefault();
    };


    try {
      initBootstrapValidator ($('#start-login-form'),loginFields,callback);
      initBootstrapValidator ($('#start-login-form-mobile'),mobileLoginFields,callback);
      /**CORPORATE**/
      initBootstrapValidator ($('#start-login-form-corporate'),loginFieldsCorporate,callbackCorporate);
      initBootstrapValidator ($('#start-login-form-mobile-corporate'),mobileLoginFieldsCorporate,callbackCorporate);
      /*BankID corporate*/
      initBootstrapValidator ($('#bankIDCorporate'),LoginFieldsBankIDCorporate,callbackBankIDporate);
      /*Passord corporate*/
      initBootstrapValidator ($('#frmLoginBp'),LoginFieldsPWCorporate,callbackPWporate);
      

    } catch(err) { }
  });


  $(document).ready(function() {
    $('.table-responsive').each(function() {
      if($(this).hasScrollBar()) {
        $(this).addClass('scrollable').prevAll('.scroll-indicator').show();
      }
    });
    $('.table-responsive-pinned').each(function() {
      if($(this).hasScrollBar()) {
        $(this).addClass('scrollable').prevAll('.scroll-indicator').show();
      }
    });
    makeTableScrollable();
  });

  /* ***** Function for making tables responsive ***** */
  function makeTableScrollable() {
    var switched = false;
    var updateTables = function() {
      if (($(window).width() < 767) && !switched ) {
        switched = true;
        $(".table-responsive-pinned.scrollable table.responsive").each(function(i, element) {
          splitTable($(element));
        });
        return true;
      }
      else if (switched && ($(window).width() > 767)) {
        switched = false;
        $(".table-responsive-pinned.scrollable table.responsive").each(function(i, element) {
          unsplitTable($(element));
        });
      }
    };

    $(window).load(updateTables);
    $(window).on("redraw",function(){switched=false;updateTables();}); // An event to listen for
    $(window).on("resize", updateTables);

    function splitTable(original) {
      original.wrap("<div class='table-wrapper' />");
      var copy = original.clone();
      copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
      copy.removeClass("responsive");
      original.closest(".table-wrapper").append(copy);
      copy.wrap("<div class='pinned' />");
      original.wrap("<div class='scrollable' />");
      setCellHeights(original, copy);
    }

    function unsplitTable(original) {
      original.closest(".table-wrapper").find(".pinned").remove();
      original.unwrap();
      original.unwrap();
    }

    function setCellHeights(original, copy) {
      var tr = original.find('tr'),
          tr_copy = copy.find('tr'),
          heights = [];

      tr.each(function (index) {
        var self = $(this),
            tx = self.find('th, td');
        tx.each(function () {
          var height = $(this).outerHeight(true);
          heights[index] = heights[index] || 0;
          if (height > heights[index]) heights[index] = height;
        });

      });

      tr_copy.each(function (index) {
        //Integration with boostrap fix
        $(this).height(heights[index]);
      });
      tr.each(function (index) {
        $(this).height(heights[index]);
      });
    }
  }
  /* ***** End of Function for making tables responsive ***** */

  $.fn.hasScrollBar = function() {
    return this.get(0).scrollWidth > this.get(0).clientWidth;
  };

  //Show and hide contact us links
  $(document).ready(function() {
    $('a.contact').click(function() {
      showHideForm(this);
    });

    $('.contactus-cancel').click( function() {
      showHideForm($(this).parents('.contactus-form').prev('div').find('.contact'));
    });

    $('.contactus').submit(function(event) {
      event.preventDefault();
      var form = $(this);
      $(form).find(".help-block").remove();
      var phoneNumber = $(form).find('input.phone').val();
      if(!isNaN(phoneNumber) && phoneNumber.length === 8){
        var callbackUrl = $(form).find(".callback-channel").val() + phoneNumber;
        $(form).append("<iframe src='" + callbackUrl + "' scrolling='auto' frameborder='0' width='1' height='1' name='call'></iframe>");
        $(form).next('.contactus-receipt').find('.contact-number').append(phoneNumber);
        $(form).next('.contactus-receipt').show();
        $(form).hide();
      } else {
        $(form).find('input.phone').before("<span class='help-block has-error'><small class='help-block'><span class='stb-color-sprite-small warning'></span> Ugyldig telefonnummer!</small></span>");
      }
    });
  });

  function showHideForm(elem) {
    $(elem).parent('div').next('div').slideToggle('fast');
    $(elem).find('span:last').toggleClass('chevron-down chevron-up');
  }

  $(document).ready(function() {
    $(".contactElements a.chat.open").click(function(event){
      var contactElement = $(this);
      var contentKey = $(this).attr('data-key');
      var elementId = $(this).attr('data-element-id');
      var chatStatusUrl = $('#chat-status').attr('data-url');
      if (chatStatusUrl !== '' && contentKey !== null) {
        $.getJSON(chatStatusUrl + '?key=' + contentKey, function(chatData) {
          if (chatData.status === 'true') {
            try {
              $(contactElement).openChat();
            } catch (e) {
              return true;
            }
          } else {
            $(contactElement).removeAttr('href').removeClass('open').addClass('closed');
            $(contactElement).next().children().text(chatData.text);
            var icon = $(contactElement).children('.circle-16');
            $(icon).removeClass("stbcolor-secondary");
            $(icon).addClass("stbcolor-gray");
          }
        });
      }
      event.preventDefault();
    });
  });

  $(document).ready(function() {
    $('.attachmentUpload input.file').change(function(e) {
      if(e.target.files.length > 0){
        var attachments = e.target.files.length > 1 ? "<p><b>"+e.target.files.length+" filer valgt:</b></p>" :  "<p><b>1 fil valgt:</b></p>";

        for(var i = 0; i < e.target.files.length; i++){
          attachments += '<ul class="stb"><li>'+e.target.files[i].name+'</li></ul>';
        }

        $(this).parent().prev('.uploadedAttachments').empty().append(attachments);
      }else{
        $(this).parent().prev('.uploadedAttachments').empty();
      }

    });

    $('.stb-btn.uploadFile').click(function(e) {
      e.preventDefault();
      $(this).prev('.attachmentUpload').find('input.file').click();
    });

  });

}(jQuery));

/* Validator for national identity number */
var idValidator = {
  message: '<span class="stb-color-sprite-small warning"></span> Ugyldig fødselsnummer!',
  callback: function(value, validor){
    return verifyIDNumber(value);
  }
};

//Adds cartIcon if cartCount cookie is found 
function addCartBtn(count) {
  $('body').prepend("<div class='cartIcon shoppingCartIcon'><a href='https://www2.storebrand.no/static/open/utsjekk/#/cart/'><div class='circle-24 stbcolor-gray fifth '><span class='stb-sprite-medium white shopping-cart'></span></div><div class='circle-16 stbcolor-primary first darker cartNr' style='border-radius:24px;height:24px;width:24px;padding-left:9px;padding-top:2px;'><h6 class='h2Number'>"+count+"</h6></div></a></div>");
}

//Toggle cart show/hide when scrolling
$(window).scroll(function(event) {
  if ($(window).scrollTop() === 0) {
    $('.shoppingCartIcon').fadeIn('slow');
  } else {
    $('.shoppingCartIcon').fadeOut('slow');
 }
});

// Adding Chrome-friendly "Skip to main content" functionality
$(document).ready(function () {
  $("#skipToContent").click(function () {
    $('#mainContent').attr('tabIndex', -1).focus();
  });
});

// Adding ARIA fixes
$(document).ready(function() {
  $('.tab-container a').click(function(e){
    e.preventDefault();
    $('.tab-container a').attr('aria-selected', 'false');
    $(this).tab('show').attr('aria-selected', 'true');
  });
});