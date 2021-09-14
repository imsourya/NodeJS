// State Pattern ==========================================================

const TrafficLight = function () {
    let count = 0;
    let currentState = new Red(this);
    const maxNumChanges = 5;          // limits number of changes

    this.change = function (state) {
        if (count++ >= maxNumChanges) return;
        currentState = state;
        currentState.go();
    };

    this.start = function () {
        currentState.go();
    };
}

// .............

const Red = function (light) {
    this.light = light;

    this.go = function () {
        console.log("Red --> for 1 minute");
        light.change(new Green(light));
    }
};

// .............
const Yellow = function (light) {
    this.light = light;

    this.go = function () {
        console.log("Yellow --> for 10 seconds");
        light.change(new Red(light));
    }
};

// .............

const Green = function (light) {
    this.light = light;

    this.go = function () {
        console.log("Green --> for 1 minute");
        light.change(new Yellow(light));
    }
};


// .... run .........
function run() {

    const light = new TrafficLight();
    light.start();
}

run();