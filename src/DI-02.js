// Using Dizzy Used DI ===========================================================
// npm install dizzy


const Dizzy = require("dizzy");
const dizzy = new Dizzy();  // Create the container
const port = 3000;


dizzy.register("port", port);  // Static value
dizzy.register("express", "express").fromModule();  // Node module

dizzy.register("app", function (express, addRoutes, port) {
    const app = express();
    addRoutes(app);
    app.listen(port, function () {
        console.log("Express listening on port: ", port);
    });

    return app;
}).asFactory();  // New instance every time it is injected

dizzy.register("addRoutes", function (app) {

    app.get("/", function (req, res) {
        res.send({ status: "server is up." });
    });

    app.get("/contact", function (req, res) {
        res.send({ addr: "blr", tel: 2332 });
    });

});

// Start app: thus inject "port", "express" and "addRoutes" into the call to the "app" factory.
dizzy.resolve("app");