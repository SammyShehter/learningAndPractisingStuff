"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
var common_routes_config_1 = require("../common/common.routes.config");
var UsersRoutes = /** @class */ (function (_super) {
    __extends(UsersRoutes, _super);
    function UsersRoutes(app) {
        return _super.call(this, app, 'UsersRoutes') || this;
    }
    UsersRoutes.prototype.configureRoutes = function () {
        this.app.route('/users')
            .get(function (req, res) {
            res.status(200).send('List of users');
        })
            .post(function (req, res) {
            res.status(200).send('Post to user');
        });
        this.app.route("/users/:userId")
            .all(function (req, res, next) {
            next();
        })
            .get(function (req, res) {
            res.status(200).set("GET requested for id " + req.params.userId);
        })
            .post(function (req, res) {
            res.status(200).set("POST requested for id " + req.params.userId);
        })
            .patch(function (req, res) {
            res.status(200).set("PATCH requested for id " + req.params.userId);
        })
            .delete(function (req, res) {
            res.status(200).set("DELETE requested for id " + req.params.userId);
        });
        return this.app;
    };
    return UsersRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.UsersRoutes = UsersRoutes;
