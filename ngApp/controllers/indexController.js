var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var IndexController = (function () {
            function IndexController(courseServices, $uibModal, $state) {
                this.$uibModal = $uibModal;
                this.$state = $state;
                this.courses = courseServices.getAll();
            }
            IndexController.prototype.openAdminModal = function () {
                this.$uibModal.open({
                    templateUrl: 'ngApp/views/adminmodal.html',
                    controller: 'ModalController',
                    controllerAs: 'controller',
                    size: 'lg'
                });
            };
            IndexController.prototype.goToSearch = function () {
                this.$state.go('searchPage', { search: this.searchString });
            };
            return IndexController;
        }());
        Controllers.IndexController = IndexController;
        angular.module('mainsos').controller('indexController', IndexController);
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
