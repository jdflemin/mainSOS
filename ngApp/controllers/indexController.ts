namespace mainsos.Controllers {

    export class IndexController {
      public courses;
      public search;

      constructor(courseServices, private $uibModal, private $http){
        this.courses = courseServices.getAll()
      }

      public openAdminModal(){
        this.$uibModal.open({
          templateUrl: 'ngApp/views/adminmodal.html',
          controller: 'ModalController',
          controllerAs: 'controller',
          size: 'lg'
        });
      }

    }
  angular.module('mainsos').controller('indexController', IndexController);
}
