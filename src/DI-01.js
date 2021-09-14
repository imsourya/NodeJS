// Dependency Injection

const di = require('di4js'); //  npm install  di4js

const Car = function (engine, year) {
	this.engine = engine;
	this.year = year;
  };
  
  Car.prototype.start = function () {
	this.engine.start();
  };
  
  // ................

  const DieselEngine = function () {
	this.hp = 0;
  };
  
  DieselEngine.prototype.start = function () {
	console.log("Diesel engine with " + this.hp + " hp has been started...");
  };
  

  // ....................

  di
	.autowired(false)
	.register('dieselEngine')
	  .as(DieselEngine)
	  .withProperties()
		.prop('hp').val(185)
	.register('car')
	  .as(Car)
	  .withConstructor()
		.param().ref('dieselEngine')
		.param().val(1976);
  
  const car = di.resolve('car');
  car.start();