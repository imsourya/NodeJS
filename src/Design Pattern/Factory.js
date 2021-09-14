const Factory = function () {
    this.createEmployee = function (type) {
        let employee;

        switch (type) {
            case "fulltime":
                employee = new FullTime(); break;
            case "part-time":
                employee = new PartTime(); break;
            case "temporary":
                employee = new Temporary(); break;
            case "contractor":
                employee = new Contractor(); break;
            default:
                employee = new FullTime(); break;
        }

        employee.type = type;

        employee.cost = function () {
            console.log(this.type + ": rate :" + this.hourly + "/hour");
        }

        return employee;
    }
}

const FullTime = function () {
    this.hourly = "$12";
};

const PartTime = function () {
    this.hourly = "$11";
};

const Temporary = function () {
    this.hourly = "$10";
};

const Contractor = function () {
    this.hourly = "$15";
};

// ...................
function run() {

    const employees = [];
    const factory = new Factory();

    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("temporary"));
    employees.push(factory.createEmployee("contractor"));

    for (let i = 0, len = employees.length; i < len; i++) {
        employees[i].cost();
    }
}

run();