function loadResume() {
	today = new Date();
	randomNum = Math.floor(10000 + (Math.random() * ((99999 - 10000) + 1)));
  $("#index-page-container").append("<div id=\"resume-container\" class='disselect'></div>");
  $("#resume-container").append("<div id='resume-container-img'><img src='mind/resume/notready.png' draggable='false'></div>");
  $("#resume-container").append("<p>Oops.. My resume (14 Fall) is under updating. Please request a copy <a href=\"mailto:hello@lucaswz.com?subject=[Resume Request No.R" + today.getDate() + today.getMonth() + "-" + randomNum + " Through Lucaswz.com]\">here</a>. <br><br>Lucas is looking for any co-op (internship) opportunities for Sept 1 to Dec 31 2014 as a aprt of University of Waterloo Software Engineering Undergraduate Co-op Program.</p>");
}

// $(document).ready(function() {
//  $('ul#tools').prepend('<li class="print"><a href="#print">Click me to print</a></li>');
//  $('ul#tools li.print a').click(function() {
//   window.print();
//   return false;
//  });
// }); 

// $(function() {

// function getParameterByName(name) {
//   name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
//   var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//       results = regex.exec(location.search);
//   return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
// }

// (function() {
//   // Set up interface for localStorage if it does not exist.
//   var localStorage = window.localStorage = window.localStorage || {};
//   var funcNames = ['getItem', 'setItem', 'removeItem'];
//   for (var i = 0; i < funcNames.length; ++i) {
//     localStorage[funcNames[i]] = localStorage[funcNames[i]] || function() {};
//   }
// })();

// /**
//  * Main logic
//  */

// if (getParameterByName('resolve_url')) {
//   var SERVER_ROOT = 'http://mduan.com';
//   $('a').each(function() {
//     var $el = $(this);
//     var href = $el.attr('href');
//     if (href && href[0] === '/') {
//       $el.attr('href', SERVER_ROOT + href);
//     }
//   });
// }

// $('a').each(function() {
//   var $el = $(this);
//   if ($el.hasClass('icon')) {
//     $el.append($('<sup><i class="fa fa-external-link"></i></sup>'));
//   }
//   if (!$el.hasClass('internal')) {
//     $el.attr('target', '_blank');
//   }
// });

// //$(window).scroll(function() {
// //  var offset = $('.contact').offset().top + $('.contact').outerHeight(true);
// //  if (offset - $(this).scrollTop() > 0) {
// //    $('.hresume > .lhs').css({ position: 'relative' });
// //  } else {
// //    $('.hresume > .lhs').css({ position: 'fixed', top: 0 });
// //  }
// //});

// $('.experience')
//   .mouseenter(function() {
//     var collapse = !!JSON.parse(localStorage.getItem('collapseSidebar'));
//     if (collapse) {
//       return;
//     }
//     $(this).find('.skills .skill').each(function() {
//       var skill = $(this).attr('data-skill');
//       $('.skillsSection .skill[data-skill="' + skill + '"]').addClass('highlight');
//     });
//   })
//   .mouseleave(function() {
//     $(this).find('.skills .skill').each(function() {
//       var skill = $(this).attr('data-skill');
//       $('.skillsSection .skill[data-skill="' + skill + '"]').removeClass('highlight');
//     });
//   });

// $('.skillsSection .skill')
//   .mouseenter(function() {
//     var collapse = !!JSON.parse(localStorage.getItem('collapseSidebar'));
//     if (collapse) {
//       return;
//     }
//     var skill = $(this).attr('data-skill');
//     $('.experience').each(function() {
//       var $el = $(this);
//       if ($el.find('[data-skill="' + skill + '"]').length) {
//         $el.addClass('highlight');
//       }
//     });
//   })
//   .mouseleave(function() {
//     var skill = $(this).attr('data-skill');
//     $('.experience').each(function() {
//       var $el = $(this);
//       if ($el.find('[data-skill="' + skill + '"]').length) {
//         $el.removeClass('highlight');
//       }
//     });
//   });

// (function() {
//   // TODO(mack): Fix timezone bug (time from lastModified is UTC time).
//   var dateStr = moment(
//     document.lastModified, 'MM/DD/YYYY hh:mm:ss').format('MMMM Do, YYYY');
//   $('.updatedDate').text(dateStr);
// })();

// function updateSidebar() {
//   var collapse = !!JSON.parse(localStorage.getItem('collapseSidebar'));
//   if (collapse) {
//     $('.hresume').addClass('collapsed');
//   } else {
//     $('.hresume').removeClass('collapsed');
//   }
// }

// updateSidebar();
// $('.lhs.clearfix').followTo(browserHeight);

// $('.hresume > .lhs .toggle').click(function() {
//   var collapse = !JSON.parse(localStorage.getItem('collapseSidebar'));
//   localStorage.setItem('collapseSidebar', collapse);
//   updateSidebar();
// });
// });


// $.fn.followTo = function (pos) {
//     var $this = this,
//         $window = $(window);

//     $window.scroll(function (e) {
//         if ($window.scrollTop() < pos) {
//             $this.css({
//                 position: 'absolute',
//                 top: pos
//             });
//         } else {
//             $this.css({
//                 position: 'fixed',
//                 top: 0
//             });
//         }
//     });
// };
