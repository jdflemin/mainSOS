namespace mainsos.Controllers {

    export class IndexController {
      public courses;

      constructor(courseServices, private $uibModal){
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
