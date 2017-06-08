var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var AdminController = (function () {
            function AdminController(languageService) {
                this.languageService = languageService;
            }
            AdminController.prototype.restoreDefaultDisplay = function () {
            };
            AdminController.prototype.restoreDefaultAdd = function () {
            };
            AdminController.prototype.restoreDefaultSearch = function () {
            };
            AdminController.prototype.clearContentDisplay = function () {
            };
            AdminController.prototype.clearContentAdd = function () {
            };
            AdminController.prototype.clearContentSearch = function () {
            };
            return AdminController;
        }());
        Controllers.AdminController = AdminController;
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
