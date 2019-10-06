describe('blinkyDancer', function () {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function () {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  it('New Test: check if the constructor is the subclass', function() {
    expect(blinkyDancer.constructor).to.be.equal(BlinkyDancer);
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('dancer location', function () {
    it('New Test: should create dancers on the dancefloor', function () {
      //should be in a location between top: 400 or greater
      var bodyHeight = 1000; //the height of our dancefloor is 1000 pixels
      var objectHeight = (bodyHeight - 400) * Math.random() + 400;
      var doesNotFly = (objectHeight >= 400);
      expect(doesNotFly).to.be.true;
    });
  });



});
