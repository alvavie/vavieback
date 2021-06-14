const {authJwt} = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    app.post(
        "/getClientInfo",
        [authJwt.verifyToken],
        controller.getClientInfo);

    app.post(
        "/getContracts",
        [authJwt.verifyToken],
        controller.getContracts);

    app.post(
        "/getPositions",
        [authJwt.verifyToken],
        controller.getPositions);

    app.post(
        "/getFundInfo",
        [authJwt.verifyToken],
        controller.getFundInfo);

    app.post(
        "/getFundPriceHist",
        [authJwt.verifyToken],
        controller.getFundPriceHist);

};