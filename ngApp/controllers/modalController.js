var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var ModalController = (function () {
            function ModalController($uibModalInstance, $state) {
                this.$uibModalInstance = $uibModalInstance;
                this.$state = $state;
            }
            ModalController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            ModalController.prototype.studentView = function () {
                var _this = this;
                this.$state.go('home')
                    .then(function () { return _this.$uibModalInstance.close(); });
            };
            ModalController.prototype.nukeSomething = function () {
                var _this = this;
                this.$state.go('admin')
                    .then(function () { return _this.$uibModalInstance.close(); });
            };
            ModalController.prototype.adminView = function () {
                var _this = this;
                this.$state.go('adminCourse')
                    .then(function () { return _this.$uibModalInstance.close(); });
            };
            return ModalController;
        }());
        Controllers.ModalController = ModalController;
        angular.module('mainsos').controller('ModalController', ModalController);
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
