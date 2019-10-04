$(document).ready(function () {
  window.dancers = [];

  $('.lineUpButton').on('click', function (event) {

    for (var i = 0; i < window.dancers.length; i++) {
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
        var top = 500 + (walkerCounter * 50);
        window.dancers[i].lineUp(top, 900);

        walkerCounter++;
      }
      //if constructor is Stark (blinkydancer)
      if (window.dancers[i].constructor === BlinkyDancer) {

        //position in the left (blinky dancer)
        var top = 500 + (starkCounter * 50);
        window.dancers[i].lineUp(top, 400);

        starkCounter++;
      }
      //if constructor is Targaryen (fightingdancer)
      if (window.dancers[i].constructor === FightingDancer) {
        //position in the right (fightingdancer)
        var top = 500 + (targCounter * 50);
        window.dancers[i].lineUp(top, 1400);

        targCounter++;
      }

    }
  });

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

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });




});

