// Singleton ==================================================

const mySingleton = (function () {
 
    // Instance stores a reference to the Singleton
    let instance;
   
    function init() {

      function privateMethod(){
          console.log( "private method." );
      }
   
      const privateVariable = "private data";
      const privateRandomNumber = Math.random();
   
      return {
   
        // Public methods and variables
        publicMethod: function () {
          console.log( "public method" );
        },
   
        publicProperty: "public data",
   
        getRandomNumber: function() {
          return privateRandomNumber;
        }
   
      };
   
    }
   
    return {
      getInstance: function () {
   
        if ( !instance ) {
          instance = init();
        }
   
        return instance;
      }
   
    };
   
  })();

  //===========  Usage:  ==============
   
  const singleA = mySingleton.getInstance();
  const singleB = mySingleton.getInstance();
  console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
  