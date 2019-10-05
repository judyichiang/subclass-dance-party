$(document).ready(function () {
  window.dancers = [];

  $('.lineUpButton').on('click', function (event) {

    for (var i = 0; i < window.dancers.length; i++) {
      //for cleanup maybe have i multiplied differently based on dancers.length;
      var left = 500 + (i * 100);

      window.dancers[i].lineUp(800, left);
    }

  });

  $('.groupUpButton').on('click', function (event) {

    var walkerCounter = 0;
    var starkCounter = 0;
    var targCounter = 0;

    for (var i = 0; i < window.dancers.length; i++) {
      //check contructor
      //if constructor is white walker (popdancer)
      if (window.dancers[i].constructor === PopDancer) {

        //position in the middle (popdancer)
        var top = 400 + (walkerCounter * 50);
        window.dancers[i].lineUp(top, 900);

        walkerCounter++;
      }
      //if constructor is Stark (blinkydancer)
      if (window.dancers[i].constructor === BlinkyDancer) {

        //position in the left (blinky dancer)
        var top = 400 + (starkCounter * 50);
        window.dancers[i].lineUp(top, 400);

        starkCounter++;
      }
      //if constructor is Targaryen (fightingdancer)
      if (window.dancers[i].constructor === FightingDancer) {
        //position in the right (fightingdancer)
        var top = 400 + (targCounter * 50);
        window.dancers[i].lineUp(top, 1400);

        targCounter++;
      }

    }
  });

  //on click
  //check class
  //remove class
  //add new class(skull)

  // $("span")
  //   .mouseover(function () {
  //     debugger;
  //     // $( this ).find( "span" ).text( "mouse over x" + i );
  //     $(this).addClass('death');
  //   })
  // .mouseout(function() {
  //   $( this ).find( "span" ).text( "mouse out" );
  // });
  /// ----------------------------


  $("span.dancer").hover(
    function () {
      debugger;
      $(this).addClass('death');
    }, function () {
      $(this).removeClass('death');
    }
  );

  // $("span.dancer").hover(function () {
  //   $(this).fadeOut(100);
  //   $(this).fadeIn(500);
  // });




  /// ---------------------------

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var bodyHeight = $("body").height();

    var dancer = new dancerMakerFunction(
      (bodyHeight - 400) * Math.random() + 400,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });




});

